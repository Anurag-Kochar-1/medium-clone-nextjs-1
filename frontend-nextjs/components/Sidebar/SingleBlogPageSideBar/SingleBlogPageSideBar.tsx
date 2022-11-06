import { useSession } from 'next-auth/react'
import React from 'react'
import StaffPicks from '../HomePageSidebar/Staff Picks/StaffPicks'
import SideBarProfile from './SideBarProfile'



const SingleBlogPageSideBar = ( ) => {
  
  

  return (
    // <div className=' hidden lg:col-span-3 h-screen'>
    <div className='w-full flex flex-col items-center justify-center'>
      <SideBarProfile />
    </div>
  )
}

export default SingleBlogPageSideBar