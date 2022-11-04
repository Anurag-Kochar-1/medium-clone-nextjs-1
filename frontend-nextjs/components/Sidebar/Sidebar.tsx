import React from 'react'
import GetUnlimitedAccessButton from './GetUnlimitedAccessButton/GetUnlimitedAccessButton'
import SearchBar from './SearchBar/SearchBar'
import SingleBlogPageSideBar from './SingleBlogPageSideBar/SingleBlogPageSideBar'
import HomePageSidebar from './HomePageSidebar/HomePageSidebar'


interface Props {
  homePageSidebar?:string
  singleBlogPageSidebar?: string
}

const Sidebar = ( {homePageSidebar , singleBlogPageSidebar}:Props ) => {
  
  

  return (
    <div className='hidden 
    lg:white lg:py-3 lg:inline-flex lg:col-span-3 lg:min-h-screen lg:border-l lg:border-l-gray-200 
    lg:flex-col lg:items-center lg:justify-start bg-red-100
    '>

    <GetUnlimitedAccessButton />

    <SearchBar />

    {homePageSidebar === 'yes' ? (
      <>
        <HomePageSidebar />
      </>
    ) : (
      <> 
        <SingleBlogPageSideBar />
      </>
    )}

    </div>
  )
}

export default Sidebar