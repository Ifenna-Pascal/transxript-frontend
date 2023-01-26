/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import Result from '../components/sections/Result';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import StudentToken from '../hooks/studnet';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { useContextHook } from '../context/AuthContext';

type Props = {
    header: string;
    result: string
}


function Student() {
  const context = useContextHook();
    const router = useRouter()
    const [current, setCurrent] = useState<number>(0);
    const [token,setToken] = useState<any>({});
    useEffect(()=> {
      const token = StudentToken();
      if(!token)  {
        toast.error('Login to view');
        router.push('/')
      }
      console.log(token, "tokenn")
      setToken(token);
      context?.studentsResults(token?.token?._id)
    },[])
    const settings = {
      className: 'center',
    //   autoplay: true,
      infinite: false,
      slidesToShow: 1,
      arrows: false,
      focusOnSelect: true,
      draggable: true,
      dots: true,
      // autoplaySped: 1000,
      speed: 500,
      afterChange: (current: React.SetStateAction<number>) => setCurrent(current),
      customPaging: (i: number) => (
        <div
          className={`w-[25px]  mt-6 h-[4px] rounded-[10px] ${current === i ? 'bg-primary' : 'bg-gray-400'}`}
        ></div>
      ),
      responsive: [
        {
          breakpoint: 450,
          settings: {
            // autoplay: true,
            centerMode: false,
            infinite: true,
            centerPadding: '60px',
            slidesToShow: 1,
            arrows: false,
            draggable: true,
            dots: true,
            // autoplaySped: 1000,
            speed: 500,
            afterChange: (current: React.SetStateAction<number>) => setCurrent(current),
            customPaging: (i: number) => (
              <div
                className={`w-[20px]  mt-4 h-[4px] rounded-[10px] ${current === i ? 'bg-AP-primary' : 'bg-gray-500'}`}
              ></div>
            ),
          },
        },
      ],
    };
  return (
    <div className='px-8' id="print">   
        <div className='grid grid-cols-3 py-8 items-start justify-start '>
            <Block header="Student Name" result={`${token?.token?.firstname} ${token?.token?.lastname}`} />
            <Block header="Registration Number" result={token?.token?.regNumber} />
            <Block header="Academic Entrance Session" result={`${token?.token?.academic_session}`} />
        </div>
      <Slider {...settings} className="mb-12 mt-4">
      <Result level="1" semester="first" />
      <Result level="1" semester="second" />
      <Result level="2" semester="first" />
      <Result level="2" semester="second" />
      {/* <Result/>
      <Result/>
      <Result/>
      <Result/>
      <Result/>
      <Result/> */}
    </Slider>
    {/* <Button className='login py-5 px-16 bg-gray-200 text-primary text-[20px] font-semibold hover:bg-gray-300 my-8' name='Download Transcript' /> */}
    </div>
  )
}

export default Student

const Block = ({header, result}: Props) => {
    return (
        <div className='flex flex-col justify-center '>
            <p className='font-popins text-[26px]  '>{header}</p>
            <p  className='font-PT text-[22px] pt-1 text-gray-500'>{result}</p>             
        </div>
    )
}
