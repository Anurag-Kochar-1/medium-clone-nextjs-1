import React, {useContext} from 'react'
import { BlogsContext } from "../../../context/Context"
import Link from 'next/link'
import {BsBookmarkPlus , BsDashCircle , BsThreeDots} from "react-icons/bs"
import { Blog } from '../../../types/typings'
import Dropdown from '../../Dropdown/Dropdown'
import { useSession } from "next-auth/react"
import BookmarkBtn from '../../Bookmark/BookmarkBtn'
import Image from 'next/image'

interface Props {
    blog:Blog
}


const BlogCard = ( {blog}:Props ) => {
    // console.log(blog);
    
    const {blogDetails , setBlogDetails}:any = useContext(BlogsContext)
    const day = blog._createdAt

    const {data: session} = useSession()


    if(!blog) return <h1 className='text-7xl font-bold'> FETCHING........ </h1>
  return (    
        <div className='rounded-lg w-full bg-white  h-auto flex flex-row justify-center items-start px-2 py-6 my-4 
        border-b-2 border-b-gray-200 
        lg:w-[80%]
        '
        onClick={() => setBlogDetails(blog)}
        >
            <div className='w-[60%]   h-auto flex flex-col items-start justify-start'>
                    <div className=' w-full flex justify-start items-center space-x-3 py-2     '>
                        <img  src={blog.profileImg as string } alt="dp" 
                        className='rounded-full w-6 h-6 '/>
                        {/* <Image src={blog.profileImg as string } alt="dp" height={5} width={5} /> */}
                        
                        <p className='text-sm font-normal text-black'> {blog.username as string} </p>
                        <p className='text-sm font-normal text-gray-800'> 8 Oct </p>

                    </div>

                    <Link href={`/blog/${blog._id}`}>
                    <div className='mb-5 hover:cursor-pointer'>
                        <h3 className=' pt-4 text-lg text-black font-bold md:text-xl'> {blog?.title} </h3>
                        <p className='hidden text-base text-gray-800 font-normal md:inline-block md:text-lg'> {blog?.previewSubtitle.slice(0,150)}... </p>
                    </div>
                    </Link>

                    <div className='flex flex-row justify-between items-center w-full px-4'>
                    <p className='px-3 py-1  text-sm rounded-full bg-gray-200'> {blog.category} </p>
                        {/* <Link href={`/?=${blog.category}`}> 
                            <a>
                                <p className='px-3 py-1  text-sm rounded-full bg-gray-200 hover:cursor-pointer'> {blog.category} </p>
                            </a> 
                        </Link>  */}
                        {/* <p className='text-sm bg-red-900'> 7 min read </p> */}
                        <div className=' flex items-center space-x-3'>
                            {/* <BsBookmarkPlus className='w-4 h-4 text-gray-700 hover:cursor-pointer  md:w-5 md:h-5'/> */}
                            <BookmarkBtn blogId={blog._id} blog={blog} />
                            <BsDashCircle className='w-4 h-4 text-gray-700 hover:cursor-pointer  md:w-5 md:h-5'/>
                            {/* <BsThreeDots className='w-4 h-4 text-gray-700 hover:cursor-pointer'/> */}
                            {session?.user?.email === blog.userEmail &&  <Dropdown blogId={blog._id} creatorEmail={blog.userEmail as string} />}
                        </div>
                    </div>
            </div>


        <Link href={`/blog/${blog._id}`}>
            <div className='w-[40%] flex justify-center items-center my-auto hover:cursor-pointer'>
                <img src={blog.coverImage} alt="cover-image" className='w-20 h-20 rounded-md md:w-32 md:h-32 lg:w-36 lg:h-36'/>
            </div>
        </Link>
        </div>

  )
}

export default BlogCard