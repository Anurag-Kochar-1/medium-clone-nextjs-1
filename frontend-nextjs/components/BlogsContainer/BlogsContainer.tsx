import React from 'react'
import { Blog } from '../../types/typings'
import RecommendedCategoriesHeader from '../RecommendedCategoriesHeader/RecommendedCategoriesHeader'
import BlogCard from './BlogCard/BlogCard'

interface Props {
    blogsData: Blog[]
}

const BlogsContainer = ( {blogsData }:Props ) => {

  return (
    <div className='w-full h-auto flex flex-col items-center justify-start py-20 bg-white'>
        {/* <button onClick={() => console.log(blogsData)}> log blogsData from blogContainer  </button> */}
        <RecommendedCategoriesHeader />
         
        {blogsData && blogsData.map((blog) => {
            return <BlogCard blog={blog} />
        })}
    </div>
  )
}

export default BlogsContainer