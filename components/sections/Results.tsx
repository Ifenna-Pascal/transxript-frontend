/* eslint-disable no-unused-vars */
import React, { Dispatch, useState, useEffect, SetStateAction} from 'react'
import { toast } from 'react-toastify'
import { useContextHook } from '../../context/AuthContext'
import { GradeSwitch } from '../../services/switch'
import Button from '../ui/Button'
import UploadResults from './UploadResults';
import * as XLSX from 'xlsx'

type Props = {
  setStep: Dispatch<SetStateAction<string>>
}

type IProps = {
  id: string;
  score: number;
  grade:string;
  name:string;
  regNumber: string;
}

function Results({setStep}: Props) {
  const context = useContextHook();
  const details = context?.state?.course_details;
  const profile = context?.state?.profile

  useEffect(()=> {
    context?.allStudents();
  }, [])



// on change states
const [excelFile, setExcelFile]=useState<any>(null);
const [excelFileError, setExcelFileError]=useState<string | null>(null);  

// submit
const [excelData, setExcelData]=useState<any>(null);
// it will contain array of objects

// handle File
const fileType=['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];

const handleFile = (e:any)=>{
const selectedFile = e.target.files[0];
if(selectedFile){
  // console.log(selectedFile.type);
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
    }
  }
  
const handleStep = () => {
  if(excelData && excelData.length > 0) {
    setExcelData(null);
  }else setStep('2')
}

const saveResult = () => {
  const result = excelData?.map((data: any) => {
    return  {
      regNo: data?.RegistrationNumber.toString(),
      level: details?.year,
      semester: details?.semester,
      courseTitle: details?.courseTitle,
      courseCode: details?.courseCode,
      creditLoad: details?.creditLoad,
      total: data?.Score.toString(),
      grade: data?.Grade,
      session: profile?.academic_session
    }
  })

  context?.saveResult(result);
  setStep('2')
}


  return (
    <div>
        <div className='flex items-center justify-center w-[40px] h-[40px] cursor-pointer rounded-[50%] bg-primary' onClick={ handleStep}>
        <i className="ri-arrow-left-s-line text-[28px] text-white"></i>
        </div>
        <div className='flex flex-col mt-3'>
          <h1 className='text-[22px] py-2  text-gray-700 font-montserrat'> {details?.courseTitle} ({details?.courseCode}) </h1>
          <p className='text-gray-500 -mt-2 font-montserrat text-[20px]'>{details?.year} Year - {details?.semester} Semester</p>
          <p className='text-gray-500 pb-4  font-montserrat text-[18px]'>{details?.creditLoad} credit load</p>
        </div>
        {
          excelData && excelData?.length > 0 ?     <table className="min-w-full border-b mt-4 text-center">
          <thead className="border-b">
            <tr>
            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 border-r">
                S/N
          </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 border-r">
                Name
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 border-r">
                Reg Number
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 border-r">
                Score (100%)
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 border-r">
                Grade
              </th>
            </tr>
          </thead>
          <tbody>
            
          {
            excelData?.map((student:any, id:any) => (
              <Row key={id+1} id={id+1} name={student?.Name} regNumber={student?.RegistrationNumber} score={student?.Score} grade={student?.Grade} />
            ))
          }
           
            
          </tbody>
        <Button name={context?.state?.isLoading ? "saving...." : "save"} className='login my-6 py-3 rounded-md px-12 bg-primary hover:text-primary text-white text-[18px] font-semibold hover:bg-gray-300' onClick={saveResult} />
        
        </table> : 
        <UploadResults handleFile={handleFile} handleSubmit={handleSubmit} />
        }

    </div>
  )
}

export default Results


 const Row = ({id, score, grade, name, regNumber}: any) => {
  const context = useContextHook();
  const details = context?.state?.course_details;
  
  // const [grade, setGrade] = useState<string>('');
  // const [err, setErr] = useState<string>('');
  // const [click, setClick] = useState<boolean>(false)
  // const handleChange = (e:any) => {
  //   const result = e.target.value;
  //   setGrade(e.target.value);
  //   if(parseInt(result) > 100) {
  //     setErr('beyond percentage')
  //   }else {
  //     setErr('')
  //   }
  // }
  const Add = () => {
    // if(!grade || parseInt(grade) <= 0) return toast.error('Enter grade field')
    const result = 
    {
      level: details?.year,
      semester: details?.semester,
      courseTitle: details?.courseTitle,
      courseCode: details?.courseCode,
      creditLoad: details?.creditLoad,
      total: score,
      grade: grade
    }
    context?.addResult(result);
    console.log(context?.state?.result)
  }
  return (
    <tr className="border-b shadow-sm" key={id}>
    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">{id}</td>
      
    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">{name}</td>
    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
      {regNumber}
      </td>
    <td className="text-sm text-gray-900 font-light relative py-4 whitespace-nowrap border-r">
        {/* <p className='text-[12px] absolute top-0 right-2 text-red-500'>{err && err}</p>
      <input type="text" value={grade} placeholder='Enter score (%)' className='border-b focus:outline-none' onChange={handleChange} /> */}
      {score}
    </td>
    <td className="text-sm text-gray-900 font-light  py-4 whitespace-nowrap border-r">
      {/* {GradeSwitch(grade)} */}
      {grade}
    </td>
    {/* <td className="text-sm items-center justify-center text-gray-900 flex font-light px-6 py-4 whitespace-nowrap"> */}
    
    {/* <i className={`${click ? "ri-check-line" : "ri-add-line"} text-[24px] ${click ? "text-green-400" : "text-primary"}  mr-3 hover:font-bold cursor-pointer`} onClick={Add}></i> */}

    {/* </td> */}
  </tr>    
  )
}