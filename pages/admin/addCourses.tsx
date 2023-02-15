/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import AdminSideBar from '../../components/sections/AdminSideBar'
import Header from '../../components/sections/Header';
import * as XLSX from 'xlsx';
import UploadResults from '../../components/sections/UploadResults';
import Button from '../../components/ui/Button';
import { useContextHook } from '../../context/AuthContext';
import getToken from '../../hooks/getToken';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { addCourses} from '../../services/auth';

function AddCourses() {
    // on change states
const router = useRouter();
const [excelFile, setExcelFile]=useState<any>(null);
const [loading, setLoading] = useState(false);
const [excelFileError, setExcelFileError]=useState<string | null>(null);  
const context = useContextHook();
useEffect(() => {
  const token = getToken(); 
  if(!token)  {
  toast.error('Login to view');
    router.push('/')
  }
},[])

// submit
const [excelData, setExcelData]=useState<any>(null);
// it will contain array of objects

// handle File
const fileType=['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];

const handleFile = (e:any)=>{
const selectedFile = e.target.files[0];
if(!fileType.includes(selectedFile.type)) return toast.error('unsupported file type')
if(selectedFile){
  if(selectedFile && fileType.includes(selectedFile.type)){
    console.log(selectedFile.type);
    console.log(selectedFile);
    
    const reader = new FileReader();
    reader.readAsArrayBuffer(selectedFile);
    reader.onload=(e)=>{
      setExcelFileError(null);
      setExcelFile(e.target?.result);
    } 
  }
  else{
    setExcelFileError('Please select only excel file types');
    setExcelFile(null);
  }
}
else{
  console.log('plz select your file');
}
}

// submit function
// eslint-disable-next-line no-unused-vars
const handleSubmit=(e: { preventDefault: () => void; })=>{
    e.preventDefault();
    if(excelFile!==null){
      const workbook = XLSX.read(excelFile,{type:'buffer'});
      const worksheetName = workbook.SheetNames[0];
      const worksheet=workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      setExcelData(data);
      console.log(data, "data");
      
    }
    else{
      setExcelData(null);
      toast.error('File type not supported')
    }
}

const uploadCourse = () => {
  addCourses(excelData, setLoading)
}

 
  return (
    <div className='flex'>
    <AdminSideBar />
    <div className='ml-[230px] w-full py-6 px-10'>
        <Header />    
     <div className='my-8'>
     <h1 className='text-[20px] -mb-3 text-gray-700 font-montserrat'> Upload Course  </h1>
     {
          excelData && excelData?.length > 0 ?     <table className="min-w-full border-b mt-4 text-center">
          <thead className="border-b">
            <tr>
            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 border-r">
                S/N
          </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 border-r">
                Year
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 border-r">
                Semester
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 border-r">
                Course Title
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 border-r">
                Course Code
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 border-r">
                Credit Load
              </th>
            </tr>
          </thead>
          <tbody>
            
          {
            excelData?.map((student:any, id:any) => (
              <Row key={id+1} id={id+1} year={student?.year} semester={student.semester} courseTitle={student?.courseTitle} creditLoad={student?.creditLoad} courseCode={student?.courseCode} />
            ))
          }
           
            
          </tbody>
        <Button name={loading ? "saving...." : "save"} className='login my-6 py-3 rounded-md px-12 bg-primary hover:text-primary text-white text-[18px] font-semibold hover:bg-gray-300' onClick={uploadCourse} />
        
        </table> : 
        <UploadResults handleFile={handleFile} handleSubmit={handleSubmit} />
        }     
     </div>
    </div>
</div>
  )
}

export default AddCourses


const Row = ({id, year, semester, courseTitle, courseCode, creditLoad}: any) => {  
 
  return (
    <tr className="border-b shadow-sm" key={id}>
    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">{id}</td>
    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">{year}</td>
    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">{semester}</td>
    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
      {courseTitle}
      </td>
    <td className="text-sm text-gray-900 font-light relative py-4 whitespace-nowrap border-r">
      {courseCode}
    </td> 
    <td className="text-sm text-gray-900 font-light relative py-4 whitespace-nowrap border-r">
      {creditLoad}
    </td> 
  </tr>    
  )
}