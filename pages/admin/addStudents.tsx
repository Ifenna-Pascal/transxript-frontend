/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import AdminSideBar from '../../components/sections/AdminSideBar'
import Header from '../../components/sections/Header'
import UploadResults from '../../components/sections/UploadResults';
import * as XLSX from 'xlsx';
import Button from '../../components/ui/Button';
import { useContextHook } from '../../context/AuthContext';
import getToken from '../../hooks/getToken';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { addStudents } from '../../services/auth';

function AddStudents() {
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
console.log(selectedFile.type);

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
    if(excelFile!==null && excelFileError?.length === 0 ){
      const workbook = XLSX.read(excelFile,{type:'buffer'});
      const worksheetName = workbook.SheetNames[0];
      const worksheet=workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      setExcelData(data);
      console.log( "data");
      
    }
    else{
      setExcelData(null);
      toast.error('File type not supported')
    }
  }
  
const uploadStudent = () => {
  addStudents(excelData, setLoading)
}

  return (
    <div className='flex'>
        <AdminSideBar />
        <div className='ml-[230px] w-full py-6 px-10'>
            <Header />    
            <div className='my-8'>
     <h1 className='text-[20px] -mb-3 text-gray-700 font-montserrat'> Upload Students  </h1>
     {
          excelData && excelData?.length > 0 ?     <table className="min-w-full border-b mt-4 text-center">
          <thead className="border-b">
            <tr>
            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 border-r">
                S/N
          </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 border-r">
                FirstName
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 border-r">
                LastName
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 border-r">
                Reg Number
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 border-r">
                Acadmic Session
              </th>
            </tr>
          </thead>
          <tbody>
           {/* {excelFileError && <p className='text-red-500'>{excelFileError}</p>}  */}
          {
            excelData?.map((student:any, id:any) => (
              <Row key={id+1} id={id+1} firstname={student?.firstname} regNumber={student?.regNumber} lastname={student?.lastname} academic_session={student?.academic_session} />
            ))
          }
           
            
          </tbody>
        <Button name={loading ? "saving...." : "save"} className='login my-6 py-3 rounded-md px-12 bg-primary hover:text-primary text-white text-[18px] font-semibold hover:bg-gray-300' onClick={uploadStudent} />
        
        </table> : 
        <UploadResults handleFile={handleFile} handleSubmit={handleSubmit} />
        }
      
     </div>
        </div>
    </div>
  )
}

export default AddStudents

const Row = ({id, firstname, lastname, regNumber, academic_session}: any) => {  
 
  return (
    <tr className="border-b shadow-sm" key={id}>
    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">{id}</td>
    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">{firstname}</td>
    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">{lastname}</td>
    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
      {regNumber}
      </td>
    <td className="text-sm text-gray-900 font-light relative py-4 whitespace-nowrap border-r">
      {academic_session}
    </td> 
  </tr>    
  )
}