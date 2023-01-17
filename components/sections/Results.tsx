/* eslint-disable no-unused-vars */
import React, { Dispatch, useState, useEffect, SetStateAction} from 'react'
import { toast } from 'react-toastify'
import { useContextHook } from '../../context/AuthContext'
import { GradeSwitch } from '../../services/switch'
import Button from '../ui/Button'

type Props = {
  setStep: Dispatch<SetStateAction<string>>
}

type IProps = {
  id: string;
  index: number;
  firstname: string;
  lastname: string;
  regNumber: string;
}

function Results({setStep}: Props) {
  const context = useContextHook();
  const details = context?.state?.course_details;

  useEffect(()=> {
    context?.allStudents();
  }, [])

  const saveResult = () => {
    context?.saveResult(context?.state?.result);
    setStep('2')
  }



  return (
    <div>
        <div className='flex items-center justify-center w-[40px] h-[40px] cursor-pointer rounded-[50%] bg-primary' onClick={()=> setStep('2')}>
        <i className="ri-arrow-left-s-line text-[28px] text-white"></i>
        </div>
        {/* <div className='w-[50px] h-[50px] text-[30px] flex items-center justify-center text-primary  rounded-[50%]'><p className='text-center'>{'<'}</p></div> */}
        <div className='flex flex-col mt-8'>
          <h1 className='text-[22px] py-2  text-gray-700 font-montserrat'> {details?.courseTitle} ({details?.courseCode}) </h1>
          <p className='text-gray-500 -mt-2 font-montserrat text-[20px]'>{details?.year} Year - {details?.semester} Semester</p>
          <p className='text-gray-500 pb-4  font-montserrat text-[18px]'>{details?.creditLoad} credit load</p>
        </div>
        <table className="min-w-full border-b mt-4 text-center">
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
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            
          {
            context?.state?.students?.map((student:any, id:any) => (
              <Row key={student?._id} firstname={student?.firstname} lastname={student?.lastname} regNumber={student?.regNumber} index={id} id={student?._id} />
            ))
          }
           
            
          </tbody>
        </table>
        <Button name={context?.state?.isLoading ? "Saving...": "Add Result"  } className='login my-6 py-3 rounded-md px-12 bg-primary hover:text-primary text-white text-[18px] font-semibold hover:bg-gray-300' onClick={saveResult} />

    </div>
  )
}

export default Results


const Row = ({id, index, firstname, lastname, regNumber}: IProps) => {
  const context = useContextHook();
  const details = context?.state?.course_details;
  
  const [grade, setGrade] = useState<string>('');
  const [err, setErr] = useState<string>('');
  const [click, setClick] = useState<boolean>(false)
  const handleChange = (e:any) => {
    const result = e.target.value;
    setGrade(e.target.value);
    if(parseInt(result) > 100) {
      setErr('beyond percentage')
    }else {
      setErr('')
    }
  }
  const Add = () => {
    if(!grade || parseInt(grade) <= 0) return toast.error('Enter grade field')
    const result = 
    {
      studentId: id,
      level: details?.year,
      semester: details?.semester,
      courseTitle: details?.courseTitle,
      courseCode: details?.courseCode,
      creditLoad: details?.creditLoad,
      total: grade,
      grade: GradeSwitch(grade)
    }
    context?.addResult(result);
    console.log(context?.state?.result)
    setClick(true);
  }
  return (
    <tr className="border-b shadow-sm" key={id}>
    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">{index + 1}</td>
      
    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">{firstname} {lastname}</td>
    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
      {regNumber}
      </td>
    <td className="text-sm text-gray-900 font-light relative py-4 whitespace-nowrap border-r">
        <p className='text-[12px] absolute top-0 right-2 text-red-500'>{err && err}</p>
      <input type="text" value={grade} placeholder='Enter score (%)' className='border-b focus:outline-none' onChange={handleChange} />
    </td>
    <td className="text-sm text-gray-900 font-light  py-4 whitespace-nowrap border-r">
      {GradeSwitch(grade)}
    </td>
    <td className="text-sm items-center justify-center text-gray-900 flex font-light px-6 py-4 whitespace-nowrap">
    
    <i className={`${click ? "ri-check-line" : "ri-add-line"} text-[24px] ${click ? "text-green-400" : "text-primary"}  mr-3 hover:font-bold cursor-pointer`} onClick={Add}></i>

    </td>
  </tr>    
  )
}