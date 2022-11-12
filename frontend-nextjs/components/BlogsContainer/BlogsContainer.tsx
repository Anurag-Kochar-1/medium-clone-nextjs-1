import React, {useContext} from 'react'
import {BlogsContext} from "../../context/Context"
import { Blog } from '../../types/typings'
import RecommendedCategoriesHeader from '../RecommendedCategoriesHeader/RecommendedCategoriesHeader'
import BlogCard from './BlogCard/BlogCard'

interface Props {
    blogsData: Blog[]
    IsRecommendedCategoriesHeader: boolean
}

const BlogsContainer = ( {blogsData , IsRecommendedCategoriesHeader }:Props ) => {
  
  const {searchInput , setSearchInput}:any = useContext(BlogsContext)
  
  return (
    
    <div className={ IsRecommendedCategoriesHeader ? 'w-full h-auto flex flex-col items-center justify-start py-20 px-2' : 'w-full h-auto flex flex-col items-center justify-start py-5 px-2 bg-whtie' }>
        {/* <button onClick={() => console.log(blogsData)}> log blogsData from blogContainer  </button> */}
       {IsRecommendedCategoriesHeader && <RecommendedCategoriesHeader />}
         
        {/* {blogsData && blogsData.map((blog) => {
            return <BlogCard key={blog._id} blog={blog} />
        })} */}

      {blogsData && blogsData.filter((blog) => {
        // console.log('filter is running');
        
        if(!searchInput) {
          return blog
        } else if (blog.title.toLowerCase().includes(searchInput.toLowerCase())) {
          return blog
        }
      }).map((blog) => {
            return <BlogCard key={blog._id} blog={blog} />
        })}
    </div>
  )
}

export default BlogsContainer