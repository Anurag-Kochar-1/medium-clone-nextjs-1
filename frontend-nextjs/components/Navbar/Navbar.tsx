import React, {useContext} from 'react'
import Link from "next/link"

import {AiOutlineHome , AiOutlineBell, AiOutlineSearch, AiOutlineUser } from "react-icons/ai"
import {BsJournalText , BsBookmarks , BsMedium} from "react-icons/bs"
import {HiOutlinePencilSquare} from "react-icons/hi2"
import {MdOutlineError} from "react-icons/md"

import { useSession , signOut , signIn} from "next-auth/react"
import { profileContext } from '../../context/Context'
import UserProfilePopover from '../Popovers/UserProfilePopover'
import UserProfileDropDown from '../Popovers/UserProfilePopover'

const Navbar = () => {

  const { blogDetails }:any = useContext(profileContext)

  const  {data: session} = useSession()
  let userProfilePicture:any = session?.user?.image  

  return (
    <nav className='fixed z-40 bottom-0 w-full h-[10vh] bg-white flex justify-between items-center px-8 border-t border-t-gray-400
      lg:relative lg:col-span-1 lg:h-screen lg:flex-col lg:justify-center lg:space-y-7 lg:items-center lg:border-t-0 lg:border-r lg:border-r-gray-200
    '>

      <Link href={'/'}>
        <BsMedium className='hidden lg:inline fixed top-10 w-9 h-9 text-black cursor-pointer' /> 
      </Link>

      {/* <UserProfilePopover /> */}

      <Link href={'/'}>
        <AiOutlineHome className='w-6 h-6 text-gray-600 hover:text-black active:text-black cursor-pointer' />
      </Link> 
      <AiOutlineBell className='hidden lg:inline w-6 h-6 text-gray-600 hover:text-black active:text-black cursor-pointer ' />
      <AiOutlineSearch className=' w-6 h-6 lg:hidden text-gray-600 hover:text-black active:text-black cursor-pointer ' />
      <BsBookmarks className='w-6 h-6 text-gray-600 hover:text-black active:text-black cursor-pointer ' />
      {!session && <AiOutlineUser className='w-6 h-6 lg:hidden text-gray-600 hover:text-black active:text-black cursor-pointer' />}
      {session && <img src={ userProfilePicture } alt="dp" className='w-6 h-6 lg:hidden rounded-full  cursor-pointer ' onClick={() => signOut()} />}


     
        <BsJournalText className='hidden lg:inline w-6 h-6 text-gray-600 hover:text-black active:text-black cursor-pointer' />
        <Link href={'/writeBlog'}>
         <HiOutlinePencilSquare className='hidden lg:inline w-6 h-6 text-gray-600 hover:text-black active:text-black cursor-pointer' />
        </Link>

        

        {!session &&  <MdOutlineError onClick={()=> signIn()} className='hidden lg:inline fixed bottom-10 w-9 h-9 text-red-700 cursor-pointer '/>}


        {session &&  <img src={ userProfilePicture } alt="dp" className='hidden lg:inline rounded-full  fixed bottom-10 w-9 h-9 text-red-700 cursor-pointer '
          onClick={() => signOut()}
        /> }


        {/* <img src={ userProfilePicture } alt="dp" className='hidden lg:inline rounded-full  fixed bottom-10 w-9 h-9 text-red-700 cursor-pointer '
          onClick={() => signOut()}
        /> */}

        {/* <UserProfileDropDown userProfilePicture={userProfilePicture} signOut={signOut}  /> */}

    </nav>
  )
}

export default Navbar