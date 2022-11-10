import React , {useEffect, useState} from 'react'
import {useRouter} from "next/router"
import { fetchSingleBlog } from '../../apis/fetchSingleBlog'
import { Blog } from "../../types/typings"
import BlogPagelayout from "./layout"
import SingleBlogPage from '../../components/full pages/SingleBlogPage'
import SingleBlogPageSideBar from '../../components/Sidebar/SingleBlogPageSideBar/SingleBlogPageSideBar'
import Sidebar from '../../components/Sidebar/Sidebar'

interface Props {
    blogs: Blog
}

const BlogPage  = (  ) => {
    console.log(`blogPage is runnning`);
    
    const [singleBlogData, setSingleBlogData] = useState<Blog[]>([])
    
    const router = useRouter()
    const {_id} = router.query

    
    const fetchSingleBlogFromClient = async () => {
        const singleBlog:any = await fetchSingleBlog( _id as string  )

        setSingleBlogData(singleBlog)
        return singleBlog


    }

    useEffect(() => {
            if(router.isReady) {
                fetchSingleBlogFromClient()
            }
            console.log('useEffect is running from [id].tsx');
       
            

    },[router.isReady])

    

  return (
    <BlogPagelayout>
    
    <main className='bg-white col-span-12 flex flex-col justify-start items-center px-3 max-h-screen mt-[8vh] mb-[10vh] overflow-y-scroll scrollbar-hide 
      lg:col-span-8 lg:mt-0 lg:mb-0 '>
       
      
        {/* <button onClick={() => console.log(singleBlogData.slice(0,1))}> singleBlogData </button> */}
            
              {singleBlogData && singleBlogData.slice(0,1)?.map((blog) => {
                return <SingleBlogPage  key={blog._id} blog={blog} />
                    
              })}


      </main>

    </BlogPagelayout>
  )
}

export default BlogPage
