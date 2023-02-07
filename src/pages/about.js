import React from 'react'
import Image from 'next/image'
const about = () => {
  return (
    <div className='min-h-screen bg-black'>
      <div className='flex lg:flex-row flex-col justify-center align-middle'>
      <div className='w-2/5 about_image mr-16 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110  duration-150'>
          <Image src='/about.png' alt='Codeswear' width={500} height={180}></Image>
        </div>
        <div className='flex flex-row bg-black flex-wrap w-3/5'>
          <div className=''>
          <div className='pt-8'>
            <h2 className='font-bold text-white text-3xl mb-2'>About</h2>
            <hr className='w-24 h-1 border-cyan-600 bg-cyan-600 mt-0' />
          </div>
            <h1 className='text-cyan-500 font-bold text-3xl mt-4'>HI, Iam Waleed Ghori</h1>
            <br />
            <p className='text-white lg:text-lg md:text-base text-sm pr-11 mb-4 font-serif'>Iam very passionate software engineer. Now currently i am styding software engineering from sindh madasatull islam karachi. I am student of last year of my graduation, currently i am looking a opportunity to enhance my skill and start my career as a software engineer for that purpose i started to learn technologies like React, Nodejs, Mongodb etc. I am alot for project as a university project like in second semester i develop a GUI application in java with swing frame work my project name is WAK Bank Management System. This Bank management system help bank to manage thier opertion with efficiency. Now i more explore the java GUI. SO, this is my first where i learn about the difficulties and chanlanges regarding with project. And now i realize i need to learn web developement so i started learning about web development from scratch. So now this i have some skill in webdevelopment for persuing my career.</p>
            <button type='button' className='bg-cyan-500 text-white p-2 rounded-sm flex m-auto'>Download Resume</button>
            <div className='flex flex-wrap my-2'>
            <button type='button' className='bg-gray-300 m-4 text-white  p-2 rounded-sm flex'>React JS</button>
            <button type='button' className='bg-gray-300 m-4 text-white  p-2 rounded-sm flex'>JavaScript</button>
            <button type='button' className='bg-gray-300 m-4 text-white  p-2 rounded-sm flex'>Next JS</button>
            <button type='button' className='bg-gray-300 m-4 text-white  p-2 rounded-sm flex'>Node JS</button>
            <button type='button' className='bg-gray-300 m-4 text-white  p-2 rounded-sm flex'>Mongodb</button>
            <button type='button' className='bg-gray-300 m-4 text-white  p-2 rounded-sm flex'>Tailwind Css</button>
            <button type='button' className='bg-gray-300 m-4 text-white  p-2 rounded-sm flex'>Bootstrap</button>
            

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default about