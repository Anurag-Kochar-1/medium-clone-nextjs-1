import React from 'react'
import {GoPrimitiveDot} from "react-icons/go"

const HomePageSidebar = () => {
  return (
    <div className='w-[90%] bg-gray-100 px-1'>

        <div className='w-full flex justify-start items-center space-x-1'>
            <GoPrimitiveDot className='w-3 h-3 text-green-600' />
            <p className='text-base font-medium '> Staffs Picks </p>
        </div>
    </div>
  )
}

export default HomePageSidebar