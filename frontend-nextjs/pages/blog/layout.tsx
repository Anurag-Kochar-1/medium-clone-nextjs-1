import React from 'react'
import HomeTopBar from '../../components/Mobile/TopBar/HomeTopBar'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'

interface LayoutProps {
    children: React.ReactNode
}

const BlogPagelayout = ( {children}:LayoutProps ) => {
  return (
    <div className='grid grid-cols-12'>
            <HomeTopBar />
            <Navbar />
            {children} 
            <Sidebar homePageSidebar={"no"} singleBlogPageSidebar={"yes"} />
    </div>
  )
}

export default BlogPagelayout