import React from 'react'
import Image from 'next/image'
import {FaLaptopCode } from "react-icons/fa";
const home = () => {
  return (
    <div className=''>
      <div className='flex flex-row bg-black flex-wrap'>
      <div className='m-auto transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-150'>
        <h1 className='text-cyan-500 font-bold text-3xl'>HI, Iam Waleed Ghori</h1>
        <br/>
        <p className='font-semibold text-cyan-50'>I am very passionate & dedicated Software Engineer,
          <br/>I am very quick learner and i am also interested to learn new technologies.</p>
      </div>
      <div className='hero_image mr-16 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-150'>
      <Image src='/hero1.png' alt='Codeswear' width={500} height={180}></Image>
      </div>
      </div>
      <div>
          <h2 className='font-bold text-3xl text-center mb-4 mt-4'>Skills</h2>
          <hr className='w-20 h-1 bg-cyan-600 m-auto mt-0' />
      </div>

      <div className='max-w-[1200px] mx-auto py-[50px] grid lg:grid-cols-4 sm:grid-cols-2 gap-6'>
          <div className='shadow-lg p-4 text-center'>
            <span><FaLaptopCode className='text-4xl inline text-cyan-700 '/></span>
            <h3 className='text-xl py-2'>Web Developement</h3>
            <p>This is crazy to learn about it and now we are going to explore the new ideas and thought.</p>
          </div>
      </div>
    </div>
  )
}

export default home
