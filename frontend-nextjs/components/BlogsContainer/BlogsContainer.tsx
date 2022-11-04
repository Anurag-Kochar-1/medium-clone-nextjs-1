import React from 'react'
import { Blog } from '../../types/typings'
import BlogCard from './BlogCard/BlogCard'

interface Props {
    blogsData: Blog[]
}

const BlogsContainer = ( {blogsData }:Props ) => {

  return (
    <div className='w-full h-auto flex flex-col items-center justify-start py-2 '>
        {/* <button onClick={() => console.log(blogsData)}> log blogsData from blogContainer  </button> */}
        
         
        {blogsData && blogsData.map((blog) => {
            return <BlogCard blog={blog} />
        })}
    </div>
  )
}

export default BlogsContainer