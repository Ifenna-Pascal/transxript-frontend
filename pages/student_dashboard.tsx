/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import Result from '../components/sections/Result';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from '../components/ui/Button';
import Sidebar from '../components/sections/Sidebar';

type Props = {
    header: string;
    result: string
}

function Student() {
    const [current, setCurrent] = useState<number>(0);
    const settings = {
      className: 'center',
    //   autoplay: true,
      infinite: false,
      slidesToShow: 1,
      arrows: false,
      focusOnSelect: true,
      draggable: true,
      dots: true,
      autoplaySped: 1000,
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
            autoplay: true,
            centerMode: false,
            infinite: true,
            centerPadding: '60px',
            slidesToShow: 1,
            arrows: false,
            draggable: true,
            dots: true,
            autoplaySped: 1000,
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
    <div className='px-8 '>   
        {/* <Sidebar/> */}
        <div className='grid grid-cols-4 py-8 items-start justify-start '>
            <Block header="Student Name" result='Monanu Ifenna' />
            <Block header="Registration Number" result='2017030180362' />
            <Block header="Years of Session" result='2017/2018 - 2021/2022' />
            <Block header="Total Results" result='20' />
        </div>
      <Slider {...settings} className="mb-12 mt-4">
      <Result/>
      <Result/>
      <Result/>
      <Result/>
      <Result/>
      <Result/>
      <Result/>
      <Result/>
      <Result/>
      <Result/>
    </Slider>
    <Button className='login py-5 px-16 bg-gray-200 text-primary text-[20px] font-semibold hover:bg-gray-300 my-8' name='Download Transcript' />
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