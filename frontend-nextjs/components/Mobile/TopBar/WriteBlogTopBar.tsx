import React, {useRef , useState} from 'react'
import {BsMedium} from "react-icons/bs"
import Link from "next/link"
import {AiOutlineClose} from "react-icons/ai"

interface Props {
  isPageNumber2 : boolean
  setIsPageNumber2 : React.Dispatch<React.SetStateAction<boolean>> 
  
}

// title,
// blogContent,
// coverImage
// previewSubtitle
// category
// likeCount
// createdAt

const WriteBlogTopBar = ( { isPageNumber2 , setIsPageNumber2}:Props ) => {

  return (
    <div className='fixed top-0 left-0 z-20 
    w-full flex justify-between items-center px-6 h-[8vh] bg-white
    
    '>
        
        <Link href={'/'}>
            <a> <BsMedium className=' w-9 h-9 text-black cursor-pointer' />    </a>  
        </Link>
        
        {/* <BsMedium className=' w-9 h-9 text-black cursor-pointer' />  */}

        <p  className='font-medium  text-xl flex-1 px-3'> Write  </p>
        
        

        {!isPageNumber2 &&   <button  className="bg-green-600 text-white px-5 py-1 rounded-full cursor-pointer disabled:bg-green-300 disabled:hover:cursor-not-allowed "
          onClick={() => setIsPageNumber2(!isPageNumber2)}
        > Publish </button>}

        {
          isPageNumber2 && (
            <>
              <Link href='/'> 
                <AiOutlineClose className='w-5 h-5 text-gray-500 hover:text-gray-700 hover:cursor-pointer' />
              </Link> 
            </>
          )
        }
        
    </div>
  )
}

export default WriteBlogTopBar