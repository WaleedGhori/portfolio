import React from 'react';
import Slider from "react-slick";
import Image from 'next/image'
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import Head from 'next/head';

const home = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade:true,
    slidesToShow: 1,
    slidesToScroll: 1, 
    initialSlide: 0,
  };
  return (
    <>
    <Head>
    <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" /> 
  </Head>
    <div className=''>
      <div className='flex flex-row bg-black flex-wrap'>
        <div className='m-auto transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-150'>
          <h1 className='text-cyan-500 font-bold text-3xl'>HI, Iam Waleed Ghori</h1>
          <br />
          <p className='font-semibold text-cyan-50'>I am very passionate & dedicated Software Engineer,
            <br />I am very quick learner and i am also interested to learn new technologies.</p>
        </div>
        <div className='hero_image mr-16 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-150'>
          <Image src='/hero1.png' alt='Codeswear' width={500} height={180}></Image>
        </div>
      </div>
      <div>
        <h2 className='font-bold text-3xl text-center mb-2 mt-8'>Skills</h2>
        <hr className='w-20 h-1 bg-cyan-600 m-auto mt-0' />
      </div>
      <div className='max-w-[1200px] mx-auto py-[40px] grid lg:grid-cols-4 sm:grid-cols-2 gap-6'>
        <div className='flex flex-col justify-center items-center p-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-150 hover:bg-cyan-200 rounded-md'>
          <div className='text-6xl text-cyan-600'><FaReact /></div>
          <div><h3 className='text-2xl'>React Js</h3></div>
        </div>
        <div className='flex flex-col justify-center items-center p-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-150 hover:bg-cyan-200 rounded-md'>
          <div className='text-6xl text-cyan-600'><SiNextdotjs /></div>
          <div><h3 className='text-2xl'>Next Js</h3></div>
        </div>
        <div className='flex flex-col justify-center items-center p-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-150 hover:bg-cyan-200 rounded-md'>
          <div className='text-6xl text-cyan-600'><SiTailwindcss /></div>
          <div><h3 className='text-2xl'>Tailwindcss</h3></div>
        </div>
        <div className='flex flex-col justify-center items-center p-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-150 hover:bg-cyan-200 rounded-md'>
          <div className='text-6xl text-cyan-600'><FaBootstrap /></div>
          <div><h3 className='text-2xl'>Bootstrap</h3></div>
        </div>
        <div className='flex flex-col justify-center items-center p-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-150 hover:bg-cyan-200 rounded-md'>
          <div className='text-6xl text-cyan-600'><SiMongodb /></div>
          <div><h3 className='text-2xl'>Mongodb(Basic)</h3></div>
        </div>
        <div className='flex flex-col justify-center items-center p-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-150 hover:bg-cyan-200 rounded-md'>
          <div className='text-6xl text-cyan-600'><FaNodeJs /></div>
          <div><h3 className='text-2xl'>Node Js(Basic)</h3></div>
        </div>
      </div>

      {/* <div className='max-w-[1200px] mx-auto py-[40px] grid lg:grid-cols-4 sm:grid-cols-2 gap-6'>
          <div className='shadow-lg p-4 text-center transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-150 hover:bg-cyan-600 hover:bg-opacity-20 rounded-md'>
            <span><FaLaptopCode className=' inline text-cyan-700 text-3xl'/></span>
            <h3 className='text-xl py-2'>Web Developement</h3>
            <p>This is crazy to learn about it and now we are going to explore the new ideas and thought.</p>
          </div>
      </div> */}

      <div>
        <h2 className='font-bold text-3xl text-black text-center mb-2 mt-4'>Portfolio</h2>
        <hr className='w-36 h-1 bg-cyan-600 m-auto mt-0' />
      </div>
      <div className='max-w-[1200px] mt-4 mx-auto gap-6 mb-4'>
      <Slider {...settings}>
        <div className='flex flex-col min-w-[100px] w-40'>
          <div className='flex justify-center m-auto'><Image src='/hero1.png' alt='Codeswear' width={300} height={150}></Image></div>
          <div className='text-center p-4'>
            <h3 className='text-lg font-bold'>WakErp</h3>
            <p>Wakerp is a erp which helps shopkeepers to perform their operation with visibilty, shopkeeper can create invoices and also apply CRUD on product, and wakerp helps shopkeeper to maintain the customer sales records. (MERN-Stack)</p>
          </div>
        </div>
        <div className='flex flex-col min-w-[100px] w-40'>
          <div className='flex justify-center m-auto'><Image src='/hero1.png' alt='Codeswear' width={300} height={150}></Image></div>
          <div className='text-center p-4'>
            <h3 className='text-lg font-bold'>Tech Websites</h3>
            <p>This website is software company website where tech company upload their all information regarding company policies, standards, portfolio, carees and visiion of company. (NEXT JS) </p>
          </div>
        </div>
        <div className='flex flex-col min-w-[100px] w-40'>
          <div className='flex justify-center m-auto'><Image src='/hero1.png' alt='Codeswear' width={300} height={150}></Image></div>
          <div className='text-center p-4'>
            <h3 className='text-lg font-bold'>Code Wear</h3>
            <p>CodesWear is a single vendor e-commerce website. This website help business to grow their buisness on internet. (NEXT JS)</p>
          </div>
        </div>
        <div className='flex flex-col min-w-[100px] w-40'>
          <div className='flex justify-center m-auto'><Image src='/hero1.png' alt='Codeswear' width={300} height={150}></Image></div>
          <div className='text-center p-4'>
            <h3 className='text-lg font-bold'>Bloging</h3>
            <p>This is a Blogging static Website which helps beginner to aculmate the new trend of IT and also give opportunity to IT expert to giver their golden advice and show thier experience behind the world.</p>
          </div>
        </div>
        </Slider>

      </div>

      <div className='mt-12 pt-3'> 
      <div>
      <h2 className='font-bold text-3xl text-black text-center mb-2 mt-4'>Experienced</h2>
      <hr className='w-44 h-1 border border-cyan-600 bg-cyan-600 m-auto mt-0' />
      </div>
      <div className='p-8 mx-10'>
        <p className='text-black'>I have a 1 year working experience being a kpo from distribution. Where iam dealing with bookers and salesman and makeing invoices, bookings, and entrying data into erp and also on excel...</p>
      </div>
      </div>

    </div>
    </>
  )
}

export default home
