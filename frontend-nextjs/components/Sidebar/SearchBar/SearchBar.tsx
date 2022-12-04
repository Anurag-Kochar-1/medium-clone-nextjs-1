import React, {useContext} from 'react'
import {BlogsContext} from "../../../context/Context"
import {AiOutlineSearch} from "react-icons/ai"

const SearchBar = () => {
  const {searchInput , setSearchInput}:any = useContext(BlogsContext)

  const handleSumbit = (e:any) => {
    e.preventDefault()
    setSearchInput('')
  }
  
  return (
    <div className='bg-white w-full flex justify-center items-center my-3'>
        <form className='bg-white border-2 border-gray-300  w-[80%] flex justify-center items-center space-x-1 px-2  rounded-full' onSubmit={handleSumbit}>

            <AiOutlineSearch className='text-gray-500  w-5 h-5' />

            <input 
                type="search"
                placeholder='Search'
                className='w-full outline-none px-1 pl-3 py-2 rounded-full'
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value) }
             />
        </form>
    </div>
    
  )
}

export default SearchBar