import React, { useContext, useEffect } from 'react'
import { Blog } from '../../types/typings'
import {BsBookmarkPlus} from "react-icons/bs"
import Head from 'next/head'
import OptionsBottomBar from '../BlogPageOptionsBottomBar/OptionsBottomBar'

import Dropdown from "../Dropdown/Dropdown"
import BookmarkBtn from '../Bookmark/BookmarkBtn'
import Sidebar from '../Sidebar/Sidebar'
import { profileContext } from '../../context/Context'


interface Props {
    blog: Blog
}

const SingleBlogPage = ({blog}:Props) => {
    const { setBlogDetails }:any = useContext(profileContext) 
    
    
    useEffect(()=> {
        setBlogDetails(blog)
    },[])
    
  return (
    
    <div className='w-full bg-white flex flex-col just items-center px-2 md:w-[80%] lg:w-[70%] scrollbar-hide'>

    
        <Head>
            <title> {blog.title} </title>
        </Head>

        <div className='w-full flex flex-col justify-start items-center md:flex-row md:justify-between md:items-center lg:mt-10 '>
            <div className='w-full   flex justify-start py-4 items-center'>
                <img src={blog.profileImg as string} alt="dp"
                className='rounded-full w-10 h-10 mr-2'
                />
                <p className='text-base font-medium text-gray-800'> {blog.username} </p>
            </div>

            <div className='w-full 0  flex justify-start items-center py-2 md:justify-end '>

                <BookmarkBtn blogId={blog._id} blog={blog} />

                <Dropdown blogId={blog._id} creatorEmail={blog.userEmail as string} />


            
            </div>
        </div>

        <div className='w-full flex flex-col justify-center items-center'>
            <h1 className='text-3xl font-bold text-black mt-5 mb-1 lg:text-4xl'> {blog.title} </h1>
            <h3 className='text-lg font-medium text-gray-700 mb-3 md:my-7'> {blog.previewSubtitle} </h3>
        </div>
        <img src={blog.coverImage} alt="cover-image" className='w-[90%] object-contain rounded-md' />

        <OptionsBottomBar likeCount={blog.likeCount} blogId={blog._id} />
        <p className='my-9 text-gray-800 text-base md:text-lg md:font-normal'> {blog.body} </p>

                
        
    </div>

  )
}

export default SingleBlogPage