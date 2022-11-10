import React from 'react'
import RecommendedTopics from '../HomePageSidebar/RecommendedTopics/RecommendedTopics'
import SideBarProfile from './SideBarProfile'



const SingleBlogPageSideBar = ( ) => {
  

  return (
    <div className='w-[90%] flex flex-col items-center justify-center '>
      {/* <SideBarProfile /> */}
      <RecommendedTopics />
    </div>
  )
}

export default SingleBlogPageSideBar