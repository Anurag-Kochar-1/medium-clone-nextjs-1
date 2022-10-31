import React from 'react'

import {AiOutlineHome , AiOutlineBell, AiOutlineSearch, AiOutlineUser } from "react-icons/ai"
import {BsJournalText , BsBookmarks , BsMedium} from "react-icons/bs"
import {HiOutlinePencilSquare} from "react-icons/hi2"
import {MdOutlineError} from "react-icons/md"

const Navbar = () => {
  return (
    <div className='fixed bottom-0 w-full h-[10vh] bg-white flex justify-between items-center px-8 
      lg:relative lg:col-span-1 lg:h-screen lg:flex-col lg:justify-center lg:space-y-7 lg:items-center
    '>

      <BsMedium className='hidden lg:inline fixed top-10 w-9 h-9 text-black cursor-pointer' />

      <AiOutlineHome className='w-6 h-6 text-gray-700 hover:text-black active:text-black cursor-pointer' />
      <AiOutlineBell className='hidden lg:inline w-6 h-6 text-gray-700 hover:text-black active:text-black cursor-pointer ' />
      <AiOutlineSearch className=' w-6 h-6 lg:hidden text-gray-700 hover:text-black active:text-black cursor-pointer ' />
      <BsBookmarks className='w-6 h-6 text-gray-700 hover:text-black active:text-black cursor-pointer ' />
      <AiOutlineUser className='w-6 h-6 lg:hidden text-gray-700 hover:text-black active:text-black cursor-pointer' />


     
        <BsJournalText className='hidden lg:inline w-6 h-6 text-gray-700 hover:text-black active:text-black cursor-pointer' />
        <HiOutlinePencilSquare className='hidden lg:inline w-6 h-6  text-gray-700 hover:text-black active:text-black cursor-pointer' />


        <MdOutlineError className='hidden lg:inline fixed bottom-10 w-9 h-9 text-red-700 cursor-pointer '/>
    </div>
  )
}

export default Navbar