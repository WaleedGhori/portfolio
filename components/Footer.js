import React from 'react'
import Link from 'next/link'
import {FaLinkedin, FaGithub} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className ='bg-black border-t-[1px] border-cyan-700'>
      <footer className='container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col'>
        <div className=''>
          <h1 className='text-cyan-600 ml-3 text-xl font-bold'>Waleed Ghori</h1>
        </div>
        <div className=''><p className='text-cyan-500 text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4'>© 2023 —WaleedGhori</p></div>
        <div className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
          <Link href={'https://www.linkedin.com/in/waleed-ghori-810099216/'} className='m-2' target={'_blank'}><span className='m-2'><FaLinkedin className='text-cyan-500 '/></span></Link>
          <Link href={'https://github.com/WaleedGhori'} className='m-2' target={'_blank'}><span className='m-2'><FaGithub className='text-cyan-500'/></span></Link>
        </div>
      </footer>
    </div>
  )
}

export default Footer