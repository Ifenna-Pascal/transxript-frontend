/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react';
import { useContextHook } from '../../context/AuthContext';
import StudentToken from '../../hooks/studnet';
import { getResults } from '../../services/auth';
import Print from '../../services/print';

type Props = {
  level:string;
  semester:string;
  // download: any
}

 
function Result({level, semester}:Props) {
  const context = useContextHook();
  const results = context?.state?.studentResults?.filter((x:any) => x.level === level && x.semester === semester);
  console.log(results, "resillll");
  
  
  return (
    <div className='rounded-[10px] border ' id="print">
        <div className='px-4'>
            <p className='py-4 relative border-b text-[16px] font-popins'>Department: <span>Computer & Electronic Engineering</span> <button onClick={() => Print()} className='flex absolute right-0 top-2 items-center justify-center  w-[40px] h-[40px] rounded-[50%]'><i className="ri-download-cloud-2-line text-[24px] hover:translate-y-2 duration-500 text-primary font-semibold"></i></button></p>
            <p className='py-4 border-b text-[16px] font-popins'>Academic Level: <span>{level}</span></p>
            <p className='py-4 border-b text-[16px] font-popins'>Semester: <span>{semester} semester</span></p>
        </div>

        <div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 px-4 lg:-mx-8">
    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full border-b  text-center">
          <thead className="border-b">
            <tr>
            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 border-r">
                S/N
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
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 border-r">
                Total
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                Grade
              </th>
            </tr>
          </thead>
          <tbody>
              {
                results && results.length > 0 ? results?.map((x:any,i:number) => (
                  <tr className="border-b" key={x?._id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">{i+1}</td>
                    
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">{x.courseTitle}</td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                    {x.courseCode}
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                    {x.creditLoad}
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                    {x.total}
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {x.grade}
                  </td>
                </tr>
                )) : <tr className='flex items-center justify-center text-white  py-4 bg-red-400'>NO RESULT FOUND</tr>
              }
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Result