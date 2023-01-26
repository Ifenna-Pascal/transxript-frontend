/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useContextHook } from '../../context/AuthContext';

type IProps = {
    setStep: (step: string) => void,
    form: any
}

function AllResults({setStep, form}: IProps) {
    const [input, setInput] = useState<string>('');
    const context = useContextHook();
    const details = context?.state?.course_details;
    const profile = context?.state?.profile;

    const handleStep = () => {
         setStep('1')
    }
    {console.log(context?.state?.allResults)}
      
    useEffect(() => {
      context?.selectedCourse(form);
    }, [])

    useEffect(()=> {
      const data = {
        level: details?.year,
        courseTitle: details?.courseTitle,
        semester: details?.semester,
        session: profile?.academic_session
      } 
      console.log(data, "dataaaa");
      
      context?.allResult(data);
    }, [details?.year])
    const filtered = input.length > 0 ? context?.state?.allResults?.filter((x:any) => x.regNo.includes(input)) : context?.state?.allResults
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
        <input onChange={(e:any)=> setInput(e.target.value)} value={input} type="text" className='w-full boder-2 border-gray-800 bg-gray-200 focus:outline-none py-2 px-3' placeholder='search by registration number' />
        <table className="min-w-full border-b mt-4 text-center">
          <thead className="border-b">
            <tr>
            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 border-r">
                S/N
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
            // context?.state?.allResults && context?.state?.allResults.length > 0  ? 
          filtered && filtered.length > 0 ? filtered.map((result:any, id:any) => (
              <Row key={id+1} id={id+1}  regNumber={result?.regNo} score={result?.total} grade={result?.grade} />
            ))
            : <tr className='flex items-center justify-center text-white  py-4 bg-red-400'>NO RESULT FOUND</tr>
          }
           
            
          </tbody>
          </table> 
    </div>
  )
}

export default AllResults


// eslint-disable-next-line no-import-assign, no-redeclare
const Row = ({id, score, grade, name, regNumber}: any) => { 
  return (
    <tr className="border-b shadow-sm" key={id}>
    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">{id}</td>
      
    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
      {regNumber}
      </td>
    <td className="text-sm text-gray-900 font-light relative py-4 whitespace-nowrap border-r">
    
      {score}
    </td>
    <td className="text-sm text-gray-900 font-light  py-4 whitespace-nowrap border-r">
      {grade}
    </td>
  </tr>    
  )
}