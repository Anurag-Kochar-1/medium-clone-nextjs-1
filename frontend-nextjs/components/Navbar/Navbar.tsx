import React, {useContext , useState, useEffect, useRef} from 'react'
import Link from "next/link"

import {AiOutlineHome , AiOutlineBell, AiOutlineSearch, AiOutlineUser } from "react-icons/ai"
import {BsJournalText , BsBookmarks , BsMedium} from "react-icons/bs"
import {HiOutlinePencilSquare} from "react-icons/hi2"
import {MdOutlineError} from "react-icons/md"

import { useSession , signOut , signIn} from "next-auth/react"
import { BlogsContext } from '../../context/Context'

import UserProfilePopover from '../Popovers/UserProfilePopover'
import UserProfileDropDown from '../Popovers/UserProfilePopover'
import ProfileDropdown from '../Dropdown/ProfileDropdown'

import useClickOutside from '../../helpers/clickOutside'
import NotificationsModal from '../Modals/NotificationsModal'


const Navbar = () => {
  const  {data: session} = useSession()
  const [hydrated, setHydrated] = useState<boolean>(false);

  useEffect(() => {
    setHydrated(true)
    console.log(`setHydrated is set to true from navbar.tsx`);
    
    
    
  },[])
  
  const dropdownRef:React.RefObject<HTMLDivElement> = useRef(null) 
  const [isProfileDropdownOpen , setIsProfileDropdownOpen] = useState<boolean>(false)
  
  const settingDropdownStateToFlase = () => { 
    setIsProfileDropdownOpen(false)
    console.log('close');
  }
  
  useClickOutside(dropdownRef, settingDropdownStateToFlase)


  const { blogDetails }:any = useContext(BlogsContext)

  
  let userProfilePicture:any = session?.user?.image  




  if(!hydrated) return null


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

      <div className='hidden lg:inline' >
        <NotificationsModal > 
          <AiOutlineBell onClick={() => !session?.user && signIn()}  className='hidden lg:inline w-6 h-6 text-gray-600 hover:text-black active:text-black cursor-pointer ' />
        </NotificationsModal>
      </div>
      


      <AiOutlineSearch className=' w-6 h-6 lg:hidden text-gray-600 hover:text-black active:text-black cursor-pointer ' />

      {session?.user ? (
        <Link href={`/me/lists`}>
          <BsBookmarks className='w-6 h-6 text-gray-600 hover:text-black active:text-black cursor-pointer ' />
        </Link>
      ) : (
        <BsBookmarks onClick={() => signIn()} className='w-6 h-6 text-gray-600 hover:text-black active:text-black cursor-pointer ' />
      )}

        {!session && <AiOutlineUser onClick={()=> setIsProfileDropdownOpen(!isProfileDropdownOpen)} className='w-6 h-6 lg:hidden text-gray-600 hover:text-black active:text-black cursor-pointer' />}
        {session && <img  src={ userProfilePicture } alt="dp" className='w-6 h-6 lg:hidden rounded-full  cursor-pointer ' onClick={()=> setIsProfileDropdownOpen(!isProfileDropdownOpen)} />}

     
        <BsJournalText className='hidden lg:inline w-6 h-6 text-gray-600 hover:text-black active:text-black cursor-pointer' />

        {session?.user ? (
           <Link href={'/writeBlog'}>
            <HiOutlinePencilSquare className='hidden lg:inline w-6 h-6 text-gray-600 hover:text-black active:text-black cursor-pointer' />
          </Link>
        ): (
          <HiOutlinePencilSquare onClick={() => signIn()} className='hidden lg:inline w-6 h-6 text-gray-600 hover:text-black active:text-black cursor-pointer' />
        )}





        
        {/* ---------  Profile Dropdown --------- */}
          {isProfileDropdownOpen &&
            <div
                ref={dropdownRef} 
                className={'w-40 h-80 rounded-lg fixed right-1 lg:left-1 bottom-[12vh] flex flex-col items-center justify-center bg-gray-100 shadow-md shadow-gray-400'}>
                    <p className='text-base font-medium text-gray-700 hover:cursor-pointer hover:text-black hover:scale-125' onClick={() => { session ? signOut() : signIn() }}> {session ? "Sign out" : "Sign in"}  </p>
             </div>}
        

            
            {!session &&  <MdOutlineError onClick={()=> setIsProfileDropdownOpen(!isProfileDropdownOpen)} className='hidden lg:inline fixed bottom-10 w-9 h-9 text-red-700 cursor-pointer '/>}


            {session &&  <img src={ userProfilePicture }  alt="dp" className='hidden lg:inline rounded-full  fixed bottom-10 w-9 h-9 text-red-700 cursor-pointer '
                        onClick={()=> setIsProfileDropdownOpen(!isProfileDropdownOpen)}
            /> }
          


        {/* <img src={ userProfilePicture } alt="dp" className='hidden lg:inline rounded-full  fixed bottom-10 w-9 h-9 text-red-700 cursor-pointer '
          onClick={() => signOut()}
        /> */}

        {/* <UserProfileDropDown userProfilePicture={userProfilePicture} signOut={signOut}  /> */}

    </nav>
  )
}

export default Navbar