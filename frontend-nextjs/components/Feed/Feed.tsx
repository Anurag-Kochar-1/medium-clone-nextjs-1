import React , {useState} from 'react'
import { GetServerSideProps } from 'next';
import { fetchBlogs } from '../../apis/fetchBlogs';
import { Blog  } from "../../types/typings"
import BlogsContainer from "../BlogsContainer/BlogsContainer"
interface Props {
  blogs: Blog[]
}

const Feed = ( {blogs}:Props ) => {

  const [blogsState, setblogsState] = useState<Blog[]>(blogs)





  return (

    <div className='col-span-12 px-2 h-screen mt-[8vh] mb-[10vh] overflow-y-scroll scrollbar-hide bg-gray-300
    lg:col-span-8 lg:mt-0 
    '>
    {/* <button onClick={() => console.log(blogs)}> LOG blogsState  </button> */}
    
    <BlogsContainer blogsData = {blogs} />
    
    </div>
  )
}


export default Feed