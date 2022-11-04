import React from 'react'
import Image from 'next/image'
import {BsBookmarkPlus , BsDashCircle , BsThreeDots} from "react-icons/bs"
import { Blog } from '../../../types/typings'

interface Props {
    blog:Blog
}


const BlogCard = ( {blog}:Props ) => {
    const day = blog._createdAt

    
  return (
    <div className='w-full  h-auto flex flex-row justify-center items-start px-2 py-6 my-4 
    border-b-2 border-b-gray-200 hover:cursor-pointer
    lg:w-[80%]
    '>
       
       <div className='w-[60%]   h-auto flex flex-col items-start justify-start'>
            <div className=' w-full flex justify-start items-center space-x-3 py-2     '>
                <img  src={blog.profileImg as string } alt="dp" 
                className='rounded-full w-6 h-6 '/>
                <p className='text-sm font-normal text-black'> {blog.username} </p>
                <p className='text-sm font-normal text-gray-800'> 8 Oct </p>

            </div>

            <div className='mb-5'>
                <h3 className=' pt-4 text-lg text-black font-bold md:text-xl'> {blog?.title} </h3>
                <p className='hidden text-base text-gray-800 font-normal md:inline-block md:text-lg'> {blog?.previewSubtitle.slice(0,150)}... </p>
            </div>

            <div className='flex flex-row justify-between items-center w-full px-4'>
                <p className='px-3 py-1  text-sm rounded-full bg-gray-200'> {blog.category} </p>
                {/* <p className='text-sm bg-red-900'> 7 min read </p> */}
                <div className='bg-gray-100 flex space-x-3'>
                    <BsBookmarkPlus className='w-4 h-4 text-gray-700 hover:cursor-pointer'/>
                    <BsDashCircle className='w-4 h-4 text-gray-700 hover:cursor-pointer'/>
                    <BsThreeDots className='w-4 h-4 text-gray-700 hover:cursor-pointer'/>
                </div>
            </div>
       </div>

       <div className='w-[40%] flex justify-center items-center my-auto'>
        <img src={blog.coverImage} alt="cover-image" className='w-20 h-20 rounded-md md:w-32 md:h-32 lg:w-36 lg:h-36'/>
       </div>
    </div>
  )
}

export default BlogCard