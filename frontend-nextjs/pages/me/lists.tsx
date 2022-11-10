import React, {useState, useContext , useEffect} from 'react'
import { BlogsContext } from "../../context/Context"
import BlogsContainer from '../../components/BlogsContainer/BlogsContainer'
import ListsPageLayout from './ListsPageLayout'

const Lists = () => {
    const {allBookmarkedBlogs , setAllBookmarkedBlogs}:any = useContext(BlogsContext)

    useEffect(() => {
        let firstGetter:any = localStorage.getItem("bookmarkedBlogs")
        let fresh:any = JSON.parse(firstGetter)
        setAllBookmarkedBlogs(fresh)
    },[])

    

  return (
    <ListsPageLayout>
        <main className='col-span-12 lg:col-span-8   max-h-screen overflow-y-scroll overflow-x-hidden scrollbar-hide pb-20 mb-[10vh] mt-[10vh] lg:mt-0 lg:mb-0 '>
            
        <div className='w-full flex justify-center items-center py-2 lg:pt-5 lg:pb-5'>
            <div className='bg-white w-full lg:w-[80%] min-h-[15vh] lg:-min-h-[25vh] px-5 py-2 flex flex-col items-start justify-center'>
                <h2 className='font-bold text-3xl lg:text-5xl'> Your Lists </h2>
            </div>
        </div>
            

            {allBookmarkedBlogs.length != 0 ? <BlogsContainer blogsData={allBookmarkedBlogs} IsRecommendedCategoriesHeader={false} /> : (
                // <div className='bg-red-400 w-full  min-h-[15vh] lg:-min-h-[25vh] flex justify-center items-center'>
                //     <h1 className='text-left my-auto font-semibold text-2xl'> No Bookmarked Blogs Found! </h1>
                // </div>

                <div className='w-full flex justify-center items-center py-2 lg:pt-5 lg:pb-5'>
                    <div className='bg-white w-full lg:w-[80%] min-h-[15vh] lg:-min-h-[25vh] px-5 py-2 flex flex-col items-start justify-center'>
                        <p className='font-semibold text-xl'> No Bookmarked Blogs Found! </p>
                    </div>
                </div>
            )}
        </main>
    </ListsPageLayout>
  )
}

export default Lists