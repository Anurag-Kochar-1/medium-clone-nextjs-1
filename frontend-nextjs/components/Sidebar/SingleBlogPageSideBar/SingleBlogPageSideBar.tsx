import React, { useContext } from 'react'
import { BlogsContext } from "../../../context/Context"
import { useSession } from 'next-auth/react'
import RecommendedTopics from '../HomePageSidebar/RecommendedTopics/RecommendedTopics'
import StaffPicks from '../HomePageSidebar/Staff Picks/StaffPicks'
import SideBarProfile from './SideBarProfile'



const SingleBlogPageSideBar = ( ) => {
  

  return (
    // <div className=' hidden lg:col-span-3 h-screen'>
    <div className='w-[90%] flex flex-col items-center justify-center '>
      <SideBarProfile />
      <RecommendedTopics />
    </div>
  )
}

export default SingleBlogPageSideBar