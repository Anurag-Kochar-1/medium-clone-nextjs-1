import React, {useRef , useEffect} from 'react'
import {AiOutlineBell} from "react-icons/ai"
import {BsMedium} from "react-icons/bs"

const HomeTopBar = () => {

  return (
    <div className='sticky top-0 left-0 z-20 
    w-screen flex justify-between items-center px-6 h-[8vh] bg-white
    lg:hidden
    '>
        
        <BsMedium className=' w-9 h-9 text-black cursor-pointer' />
        <p className='font-medium text-xl flex-1 px-3'> Home </p>

        <AiOutlineBell className='w-6 h-6 text-gray-700 hover:text-black active:text-black cursor-pointer ' />
    </div>
  )
}

export default HomeTopBar