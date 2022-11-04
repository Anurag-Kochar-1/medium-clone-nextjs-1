import React from 'react'
import {BsBookmarkPlus , BsDashCircle , BsThreeDots} from "react-icons/bs"
import { Blog } from '../../../types/typings'

interface Props {
    blog:Blog
}


const BlogCard = ( {blog}:Props ) => {
    const day = blog._createdAt

    console.log(blog.body.length);
    // let minutesRequreToReadBlog;    
    
  return (
    <div className='w-full h-auto flex flex-row justify-center items-start bg-gray-400 px-2  py-6 my-4  '>
       
       <div className='w-[60%]  h-auto flex flex-col items-start justify-start'>
            <div className='bg-red-400 w-full flex justify-start items-center space-x-3 '>
                <img  src={blog.profileImg as string } alt="dp" 
                className='rounded-full w-6 h-6 '/>
                
                <p className='text-sm font-normal text-black'> {blog.username} </p>
                {/* <p> {blog._createdAt} </p> */}
                <p className='text-sm font-normal text-gray-800'> 8 Oct </p>

            </div>

            <h3 className=' py-4 text-lg text-black font-medium'> {blog?.title} </h3>

            <div className='bg-red-400 flex flex-row items-center space-x-3'>
                <p className='px-3 py-1 text-sm rounded-full bg-gray-200'> {blog.category} </p>
                <p className='text-sm'> 7 min read </p>
                <BsBookmarkPlus />
                <BsDashCircle />
                <BsThreeDots />
            </div>
       </div>

       <div className='w-[40%] bg-red-400'>
        <img src={blog.coverImage} alt="cover-image" className='w-20 h-20' />
       </div>
    </div>
  )
}

export default BlogCard