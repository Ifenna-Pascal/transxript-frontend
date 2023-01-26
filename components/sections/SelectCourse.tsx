import React, {Dispatch, useState, useEffect, SetStateAction} from 'react'
import { toast } from 'react-toastify'
import { useContextHook } from '../../context/AuthContext'
import { formsProps } from '../../pages/adviser_dashboard'
import Button from '../ui/Button'
import Header from './Header'


type Props = {
    setStep: Dispatch<SetStateAction<string>>,
    form: formsProps
  }

function SelectCourse({setStep, form}: Props) {
    const context = useContextHook();
    const [course, setCourse] = useState<string>('')
    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        if(!course) return toast.error('select a course');
        context?.getCourse(course)
        setStep('3');
    }
    useEffect(() => {
        context?.selectedCourse(form);
    },[])
  return (
    <div>
        <Header />
        <div className='flex items-center justify-center w-[40px] h-[40px] my-6 cursor-pointer rounded-[50%] bg-primary' onClick={()=> setStep('1')}>
        <i className="ri-arrow-left-s-line text-[28px] text-white"></i>
        </div>
        {
            context?.state?.isLoading ? <p className='text-[20px] text-blue-500 font-semibold'>Searching Course...</p> : (
                <form onSubmit={handleSubmit} >
                <div className=''>
               <p className='text-gray-600 pb-2 font-montserrat text-[18px] relative'>Select Course<span className='absolute ml-1 text-red-500'>*</span></p>
               <select name="course" onChange={(e:any) => setCourse(e.target.value) }  className='w-full text-gray-800 font-PT text-[20px] border py-3 h-[60px] border-gray-300 focus:outline-gray-300 px-4 tex rounded-md'> 
                    <option selected disabled>Select Course</option>
                    {
                        context?.state?.selected_course?.length > 0 ?
                            context?.state?.selected_course?.map((x:any)=> (
                                <option key={x._id} value={x._id}>{x.courseTitle}</option>
                               
                            )):
                    <option >No course enlisted yet</option>
                        
                    }
               </select>
               <Button name="Submit" className='login my-6 py-3 rounded-md px-12 bg-primary hover:text-primary text-white text-[18px] font-semibold hover:bg-gray-300'  />
               </div>   
           
              </form>
            )
        }   
    </div>

  )
}

export default SelectCourse