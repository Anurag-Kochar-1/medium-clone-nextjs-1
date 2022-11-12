// import React, {useRef , useEffect} from 'react'
import {AiOutlineBell} from "react-icons/ai"
import {HiOutlinePencilSquare} from "react-icons/hi2"
import {BsMedium} from "react-icons/bs"
import Link from "next/link"
import NotificationsModal from "../../Modals/NotificationsModal"
import { signIn, useSession } from "next-auth/react"

const HomeTopBar = () => {
  const {data: session} = useSession()
  
  return (
    <div className='fixed top-0 left-0 z-20 
    w-screen flex justify-between items-center px-6 h-[8vh] bg-white
    lg:hidden
    '>
        
        <BsMedium className=' w-9 h-9 text-black cursor-pointer ' />
        <p className='font-medium text-xl flex-1 px-3'> Home </p>


        <Link href={'/writeBlog'}>
         <HiOutlinePencilSquare className='w-6 h-6 mx-2 text-gray-600 hover:text-black active:text-black cursor-pointer' />
        </Link>

        {session?.user ? (
          <NotificationsModal > 
          <AiOutlineBell className='w-6 h-6 text-gray-600 hover:text-black active:text-black cursor-pointer ' />
          </NotificationsModal>
        ): (
          <AiOutlineBell onClick={() => signIn()} className='w-6 h-6 text-gray-600 hover:text-black active:text-black cursor-pointer ' />
        )}
        
    </div>
  )
}

export default HomeTopBar