// import {useRef, useEffect} from "react"
import React, {useState , useEffect, useContext} from 'react'
import { BlogsContext } from "../context/Context"
import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import Feed from '../components/Feed/Feed'
import HomeTopBar from '../components/Mobile/TopBar/HomeTopBar'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import HomeLayout from "../layouts/HomeLayout"
import { fetchBlogs } from '../apis/fetchBlogs'

import { useSession , signIn } from "next-auth/react"
import { Blog } from '../types/typings'
import RecommendedCategoriesHeader from '../components/RecommendedCategoriesHeader/RecommendedCategoriesHeader'
import { useRouter } from 'next/router'
import { fetchBlogsByTag } from '../apis/fetchBlogsByTag'


interface Props {
  Allblogs: Blog[]
}


export default function Home( {Allblogs}:Props  ) {

  // const [blogs, setBlogs] = useState <Blog[]> (Allblogs)
  const {setBlogs , blogs , allBlogsStateForSidebar , setAllBlogsStateForSidebar}:any = useContext(BlogsContext) 
    
  const  {data: session} = useSession()


  useEffect(() => {
    setBlogs(Allblogs)
    setAllBlogsStateForSidebar(Allblogs)
  },[])

  
  


  // ----------------- RecommendedCatogries ----------------------

  const router = useRouter()
  const { tag } = router.query
  const [searchQuery, setSearchQuery] = useState("");

  const fetchBlogsByTagFunction = async ( searchQuery:string ) => {
    // console.log(` fetchBlogsByTagFunction is running :  ${searchQuery} `);
    // const BlogsByTag:any = await fetchBlogsByTag( searchQuery as string  )        
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_DEV}api/getBlogsByTag?tag=${searchQuery}`)
    const  { blogsByTag } : any = await res.json()
    // console.log(blogsByTag);
    setBlogs(blogsByTag)
    return blogsByTag
}

  
const [hydrated, setHydrated] = useState<boolean>(false);

useEffect(() => {
  setHydrated(true)
  console.log(`setHydrated is set to true from index.tsx`);
  
},[])

if(!hydrated) return null


  return (

    <div className="w-full max-h-screen ">
      <Head>
        <title> Medium Clone </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* {
        !session && (
          <main>
            <button onClick={()=> signIn()}> Sign in with google </button>
          </main>
        )
      } */}


      { true &&  (
        <main className="grid grid-cols-12">          
          <HomeTopBar />
          {/* <RecommendedCategoriesHeader  /> */}
          <Navbar />
          <Feed blogs={blogs}  />
          <Sidebar homePageSidebar={"yes"} singleBlogPageSidebar={"no"} topicPageSideBar={"no"} blogsForSidebar={allBlogsStateForSidebar}  />
        </main>
      )
      
      }

    </div>
  )
}

export const getServerSideProps:GetServerSideProps = async (context) => {
  console.log("getServerSideProps function is running");

  const Allblogs = await fetchBlogs()

    return {
      props: {
        Allblogs
      }
    }
}




// useEffect(()=> {
//     setBlogs(Allblogs)
//   },[Allblogs])  

//   const mainRef = useRef(null)
//   let lastScroll = 0

//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       const currentScroll = window.pageYOffset;
//       if (currentScroll <= 0) {
//         document.body.classList.remove("scroll-up");
//         return;
//       }
    
//       if (currentScroll > lastScroll && !document.body.classList.contains("scroll-down")) {
//         document.body.classList.remove("scroll-up");
//         document.body.classList.add("scroll-down");
//       } else if (
//         currentScroll < lastScroll &&
//         document.body.classList.contains("scroll-down")
//       ) {
//         document.body.classList.remove("scroll-down");
//         document.body.classList.add("scroll-up");
//       }
//       lastScroll = currentScroll;
//     });
    
//   },[])