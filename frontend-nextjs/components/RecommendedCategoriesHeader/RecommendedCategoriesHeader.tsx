import React, {useEffect , useContext, useState, useRef} from 'react'
import { fetchBlogsByTag } from '../../apis/fetchBlogsByTag'
import Link from 'next/link'
import { Categories  } from "../../constants/categories"
import { useRouter } from 'next/router'
import { BlogsContext } from '../../context/Context'

// import TagCard from './TagCard'
import {GrFormNext , GrFormPrevious} from "react-icons/gr"

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import TagCard from './TagCard'
import refreshFeed from '../../utils/functions/refreshFeed'


interface Props {
    fetchBlogsByTagFunction:(tagName: string) => Promise<any>
}

const RecommendedCategoriesHeader = (  ) => {
    const {setBlogs , blogs}:any = useContext(BlogsContext) 

    const reFetchingBlogs = async () => {
        const refreshingFeed = await refreshFeed()
        const data = await refreshingFeed
        setBlogs(data)
      }

    const router = useRouter()
    const { tag } = router.query
    const [searchQuery, setSearchQuery] = useState("");
  
  
  
  
    const fetchBlogsByTagFunction = async ( searchQuery:string ) => {
        
      console.log(` fetchBlogsByTagFunction is running :  ${searchQuery} `);
    
      // const BlogsByTag:any = await fetchBlogsByTag( searchQuery as string  )        
      
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_PROD}api/getBlogsByTag?tag=${searchQuery}`)
  
      const  { blogsByTag } : any = await res.json()
  
      console.log(blogsByTag);
      
      setBlogs(blogsByTag)
  
      return blogsByTag
      
  }




    const tagsContainerId:any = document.querySelector("#tagsContainer")


    const prevBtnFunc = () => {
        let width = tagsContainerId.clientWidth
        tagsContainerId.scrollLeft = tagsContainerId.scrollLeft - width
        
    }

    const nextBtnFunc = () => {
        let width = tagsContainerId.clientWidth
        tagsContainerId.scrollLeft = tagsContainerId.scrollLeft + width
        
        
    }




  return (
    <div className='fixed w-[100%] lg:w-[60%] h-[8vh] top-[10vh] lg:top-[0vh] px-4  flex justify-start items-center bg-white border-b-2 border-b-gray-300 overflow-x-hidden overflow-y-hidden scrollbar-hide scroll-smooth '>
  
        
        
        <div className='relative overflow-hidden h-[8vh] bg-white'>


            <button className='border-none px-1  outline-none h-[8vh] hover:cursor-pointer absolute top-0'>
                <GrFormPrevious onClick={prevBtnFunc} className='w-5 h-5 text-gray-600  hover:text-black'/>
            </button>

            <button className='border-none px-1  outline-none h-[8vh] hover:cursor-pointer absolute top-0 right-0'>
                <GrFormNext onClick={nextBtnFunc} className='w-5 h-5 text-gray-600 hover:text-black'/>
            </button>

            <div id='tagsContainer' className='overflow-y-hidden overflow-x-scroll scrollbar-hide mx-10 h-[8vh] flex scroll-smooth bg-white'>

            <div onClick={() => alert(1)} className='px-3 mx-1 flex justify-center items-center text-center text-gray-600 hover:text-black hover:cursor-pointer bg-white rounded-lg'>
                <p onClick={reFetchingBlogs} className='text-sm font-semibold hover:cursor-pointer'> All </p>

            </div>
                {Categories.map((category , index) => {
                    return <TagCard key={index} fetchBlogsByTagFunction={fetchBlogsByTagFunction} category={category} />
                })}
            </div>


        </div>
        
    </div>
  )
}

export default RecommendedCategoriesHeader



      {/* {
            Categories.map((category) => {
                return (
                    <Link href={`/?tag=${category}`} >
                        <p  onClick={ () => {
    
                            fetchBlogsByTagFunction(category)
                        }} className="px-5 py-1 bg-black text-gray-400 rounded-full hover:cursor-pointer"> {category} </p>
                    </Link>
                )
            })

           
        } */}