import React from 'react'
import GetUnlimitedAccessButton from './GetUnlimitedAccessButton/GetUnlimitedAccessButton'
import SearchBar from './SearchBar/SearchBar'
import SingleBlogPageSideBar from './SingleBlogPageSideBar/SingleBlogPageSideBar'
import HomePageSidebar from './HomePageSidebar/HomePageSidebar'
import { Blog } from '../../types/typings'
import TopicPageSidebar from './TopicPageSidebar/TopicPageSidebar'


interface Props {
  homePageSidebar?:string
  singleBlogPageSidebar?: string
  topicPageSideBar?: string
  blogsForSidebar?:Blog[] | undefined
  // blog?: Blog 
}

const Sidebar = ( {homePageSidebar , singleBlogPageSidebar , topicPageSideBar , blogsForSidebar }:Props ) => {
  
  

  return (
    <div className='hidden bg-white z-40
    lg:white lg:py-3 lg:inline-flex lg:col-span-3 lg:min-h-screen lg:border-l lg:border-l-gray-200 
    lg:flex-col lg:items-center lg:justify-start 
    '>

    <GetUnlimitedAccessButton />

    <SearchBar />



    {homePageSidebar === 'yes' &&  <HomePageSidebar blogs={blogsForSidebar}  />}

    {singleBlogPageSidebar === 'yes' &&  <SingleBlogPageSideBar  />}

    {topicPageSideBar === 'yes' && <TopicPageSidebar />  }

    </div>
  )
}

export default Sidebar