import React, { useContext } from 'react'
import HomeTopBar from '../../components/Mobile/TopBar/HomeTopBar'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import { BlogsContext } from '../../context/Context'

interface LayoutProps {
    children: React.ReactNode
}

const ListsPageLayout = ({children}:LayoutProps) => {
  const { allBlogsStateForSidebar , blogs } = useContext(BlogsContext)
  return (
    <div className='grid grid-cols-12'>
            <HomeTopBar />
            <Navbar />
            {children} 
            <Sidebar homePageSidebar={"yes"} singleBlogPageSidebar={"no"} topicPageSideBar={"no"} blogs={allBlogsStateForSidebar} blogs={blogs}   />
    </div>
  )
}

export default ListsPageLayout