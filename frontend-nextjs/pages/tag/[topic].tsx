import React, {useEffect , useState , useContext} from 'react'
import { BlogsContext } from "../../context/Context"
import { useRouter } from "next/router"
import { fetchBlogsByTopic } from "../../apis/fetchBlogsByTopic"
import TopicPageLayout from './TopicPageLayout'
import BlogsContainer from '../../components/BlogsContainer/BlogsContainer'
import { Blog } from '../../types/typings'

import {AiFillTag} from "react-icons/ai"
import Link from 'next/link'



const Topic = () => {
    const { setTopicPageDetails  }:any = useContext(BlogsContext)
    const [isFollowed , setIsFollowed] = useState<boolean>(false)
    const [allBlogsByTopic , setAllBlogsByTopic ] = useState<Blog[]>([])
    const router = useRouter()
    const {topic} = router.query

    const fetchBlogsByTopicFunc = async() => {
      const res = await fetchBlogsByTopic(topic as string)
      setAllBlogsByTopic(res)
      setTopicPageDetails(res)
      // console.log(res);
      
    }

    let uniqueWriters = Array.from(new Set(allBlogsByTopic.map(({ username }) => username)));
    

    useEffect(() => {
      if(router.isReady) {
          fetchBlogsByTopicFunc()
      }
      console.log('useEffect is running from [id].tsx');
      
 
      

},[router.isReady, topic])

  return (
    <TopicPageLayout> 

      <main className='col-span-12 lg:col-span-8  max-h-screen overflow-y-scroll overflow-x-hidden scrollbar-hide bg-white mt-[10vh] lg:mt-0'>

      <div className='w-full flex justify-center items-center py-2 lg:pt-5 lg:pb-5'>

        <div className='bg-white w-full lg:w-[80%] min-h-[15vh] lg:-min-h-[25vh] px-5 py-2 flex flex-col items-start justify-start'>
          <span className='flex justify-center items-center py-2'> 
            <AiFillTag className='w-6 h-6 text-gray-700 mr-3' /> 
            <h1 className='text-2xl font-semibold lg:text-4xl lg:font-bold'> {topic} </h1> 
          </span>

          <div className='flex justify-center py-2 items-center space-x-2 lg:hidden'>
          <p className='text-gray-500 text-base'> {allBlogsByTopic.length != 0 ? allBlogsByTopic.length+1 : 0} Stories </p>
          <p className='text-gray-500 text-base'>  {uniqueWriters.length} Writers  </p>
          </div>

          <div className='space-x-3 py-2'>
            <button className={ !isFollowed ? 'px-5 py-2 my-7 rounded-full bg-green-700 text-white font-medium text-base hover:cursor-pointer hover:bg-green-800' : 'px-5 py-2 my-7 rounded-full bg-white text-green-700 border-green-700 border-2 font-medium text-base hover:cursor-pointer' }
              
              onClick={()=> setIsFollowed(!isFollowed)}
              > 
              {isFollowed ? "Following" : "Follow"}
              
            </button>

             <Link href={`/writeBlog`}>
              <button className='px-5 py-1 rounded-full bg-white border border-green-700 hover:cursor-pointer text-green-700'>  Start writing </button>
             </Link> 
          </div>


        </div>

      </div>

      <BlogsContainer blogsData = {allBlogsByTopic} IsRecommendedCategoriesHeader={false} />
      </main>

    </TopicPageLayout>
  )
}

export default Topic