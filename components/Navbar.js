import React from 'react'
import Link from 'next/link'
const Navbar = () => {
    return (
        <div>
          <header className='bg-black shadow-md border-b-[1px] border-cyan-700'>
             <div className='flex flex-row'>
                <div className='flex py-4 p-6 font-sans font-bold text-3xl text-cyan-500 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-150' >
                    <Link href={'/home'}><span>Waleed Ghori</span></Link>
                </div>
                <nav className='md:ml-auto space-x-6 flex flex-row font-sans text-xl text-cyan-500 items-center justify-center mr-56 font-semibold'>
                    <Link href={'/home'} className='mr-4 p-2 hover:bg-cyan-500 hover:text-black rounded-md'><li className='list-none'>Home</li></Link>
                    <Link href={'/about'} className='mr-4 p-2 hover:bg-cyan-500 rounded-md hover:text-black'><li className='list-none'>About</li></Link>
                    <Link href={'/contact'} className='mr-4 p-2 hover:bg-cyan-500 rounded-md hover:text-black'><li className='list-none'>Contact</li></Link>
                    <Link href={'/portfolio'} className='mr-4 p-2 hover:bg-cyan-500 rounded-md hover:text-black'><li className='list-none'>Portfolio</li></Link>
                </nav>
             </div>
          </header>
        </div>
    )
}

export default Navbar