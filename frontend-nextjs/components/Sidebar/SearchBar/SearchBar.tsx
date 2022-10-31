import React from 'react'
import {AiOutlineSearch} from "react-icons/ai"

const SearchBar = () => {
  return (
    <div className='bg-white flex justify-center items-center my-6'>
        <form className='bg-white border-2 border-gray-300  w-[80%] flex justify-center items-center space-x-1 px-2  rounded-full'>

            <AiOutlineSearch className='text-gray-500  w-5 h-5' />

            <input 
                type="search"
                placeholder='Search'
                className='w-full outline-none px-1 pl-3 py-2 rounded-full '
             />
        </form>
    </div>
    
  )
}

export default SearchBar