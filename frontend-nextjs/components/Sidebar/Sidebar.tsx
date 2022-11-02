import React from 'react'
import GetUnlimitedAccessButton from './GetUnlimitedAccessButton/GetUnlimitedAccessButton'
import SearchBar from './SearchBar/SearchBar'

const Sidebar = () => {
  

  return (
    <div className='hidden 
    lg:white lg:py-3 lg:inline-block lg:col-span-3 lg:min-h-screen lg:border-l lg:border-l-gray-200 
    '>

    <GetUnlimitedAccessButton />

    <SearchBar />

    </div>
  )
}

export default Sidebar