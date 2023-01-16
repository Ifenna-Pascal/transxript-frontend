import React, { Dispatch, SetStateAction } from 'react'
import Button from '../ui/Button'

type Props = {
  setStep: Dispatch<SetStateAction<string>>
}

function Results({setStep}: Props) {
  return (
    <div>
        <div className='flex items-center justify-center w-[40px] h-[40px] cursor-pointer rounded-[50%] bg-primary' onClick={()=> setStep('2')}>
        <i className="ri-arrow-left-s-line text-[28px] text-white"></i>
        </div>
        {/* <div className='w-[50px] h-[50px] text-[30px] flex items-center justify-center text-primary  rounded-[50%]'><p className='text-center'>{'<'}</p></div> */}
        <div className='flex flex-col mt-8'>
          <h1 className='text-[22px] py-2  text-gray-700 font-montserrat'> Engineering Mathemeatics (FEG 228) </h1>
          <p className='text-gray-500 -mt-2 font-montserrat text-[20px]'>2017/2018 - 2nd Semester</p>
          <p className='text-gray-500 pb-4  font-montserrat text-[18px]'>3 credit load</p>
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
            
            <tr className="border-b shadow-sm">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">1</td>
                
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">Monanu Ifenna</td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                2017030180362
              </td>
              <td className="text-sm text-gray-900 font-light  py-4 whitespace-nowrap border-r">
                <input type="text" placeholder='Enter score (%)' className='border-b focus:outline-none' />
              </td>
              <td className="text-sm text-gray-900 font-light  py-4 whitespace-nowrap border-r">
              <input type="text" placeholder='Enter grade' className='border-b focus:outline-none'/>
                
              </td>
              <td className="text-sm items-center justify-center text-gray-900 flex font-light px-6 py-4 whitespace-nowrap">
              
              <i className="ri-add-line text-[24px]  text-primary mr-3 hover:text-white cursor-pointer"></i>
         
              </td>
            </tr>     <tr className="border-b shadow-sm">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">2</td>
                
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">Obasi clareth</td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                2017030180333
              </td>
              <td className="text-sm text-gray-900 font-light  py-4 whitespace-nowrap border-r">
                <input type="text" placeholder='Enter score (%)' className='border-b focus:outline-none' />
              </td>
              <td className="text-sm text-gray-900 font-light  py-4 whitespace-nowrap border-r">
              <input type="text" placeholder='Enter grade' className='border-b focus:outline-none'/>
                
              </td>
              <td className="text-sm items-center justify-center text-gray-900 flex font-light px-6 py-4 whitespace-nowrap">
              
              <i className="ri-add-line text-[24px]  text-primary mr-3 hover:text-white cursor-pointer"></i>
         
              </td>
            </tr>     <tr className="border-b shadow-sm">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">3</td>
                
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">Ifedi Jude</td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                2017030171292
              </td>
              <td className="text-sm text-gray-900 font-light  py-4 whitespace-nowrap border-r">
                <input type="text" placeholder='Enter score (%)' className='border-b focus:outline-none' />
              </td>
              <td className="text-sm text-gray-900 font-light  py-4 whitespace-nowrap border-r">
              <input type="text" placeholder='Enter grade' className='border-b focus:outline-none'/>
                
              </td>
              <td className="text-sm items-center justify-center text-gray-900 flex font-light px-6 py-4 whitespace-nowrap">
              
              <i className="ri-add-line text-[24px]  text-primary mr-3 hover:text-white cursor-pointer"></i>
         
              </td>
            </tr>     <tr className="border-b shadow-sm">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">4</td>
                
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">Obai Keneth</td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                2017030177222
              </td>
              <td className="text-sm text-gray-900 font-light  py-4 whitespace-nowrap border-r">
                <input type="text" placeholder='Enter score (%)' className='border-b focus:outline-none' />
              </td>
              <td className="text-sm text-gray-900 font-light  py-4 whitespace-nowrap border-r">
              <input type="text" placeholder='Enter grade' className='border-b focus:outline-none'/>
                
              </td>
              <td className="text-sm items-center justify-center text-gray-900 flex font-light px-6 py-4 whitespace-nowrap">
              
              <i className="ri-add-line text-[24px]  text-primary mr-3 hover:text-white cursor-pointer"></i>
         
              </td>
            </tr>     <tr className="border-b shadow-sm">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">5</td>
                
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">Ofeli Mathew</td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                2017030180222
              </td>
              <td className="text-sm text-gray-900 font-light  py-4 whitespace-nowrap border-r">
                <input type="text" placeholder='Enter score (%)' className='border-b focus:outline-none' />
              </td>
              <td className="text-sm text-gray-900 font-light  py-4 whitespace-nowrap border-r">
              <input type="text" placeholder='Enter grade' className='border-b focus:outline-none'/>
                
              </td>
              <td className="text-sm items-center justify-center text-gray-900 flex font-light px-6 py-4 whitespace-nowrap">
              
              <i className="ri-add-line text-[24px]  text-primary mr-3 hover:text-white cursor-pointer"></i>
         
              </td>
            </tr> 
            
          </tbody>
        </table>
        <Button name="Add Result" className='login my-6 py-3 rounded-md px-12 bg-primary hover:text-primary text-white text-[18px] font-semibold hover:bg-gray-300'  />

    </div>
  )
}

export default Results