import React from 'react'
import { Blog } from '../../types/typings'
import RecommendedCategoriesHeader from '../RecommendedCategoriesHeader/RecommendedCategoriesHeader'
import BlogCard from './BlogCard/BlogCard'

interface Props {
    blogsData: Blog[]
    IsRecommendedCategoriesHeader: boolean
}

const BlogsContainer = ( {blogsData , IsRecommendedCategoriesHeader }:Props ) => {
  // console.log(`blogsData`);
  // console.log(blogsData);
  
  return (
    
    <div className={ IsRecommendedCategoriesHeader ? 'w-full h-auto flex flex-col items-center justify-start py-20 px-5 bg-white' : 'w-full h-auto flex flex-col items-center justify-start py-5 px-5 bg-whtie' }>
        {/* <button onClick={() => console.log(blogsData)}> log blogsData from blogContainer  </button> */}
       {IsRecommendedCategoriesHeader && <RecommendedCategoriesHeader />}
         
        {blogsData && blogsData.map((blog) => {
            return <BlogCard key={blog._id} blog={blog} />
        })}
    </div>
  )
}

export default BlogsContainer