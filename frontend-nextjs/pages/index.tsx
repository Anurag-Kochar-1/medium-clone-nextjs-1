// import {useRef, useEffect} from "react"
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

// import "../styles/stylesScroll.css"

interface Props {
  blogs: Blog[]
}


export default function Home( {blogs}:Props  ) {
  console.log(blogs)
  

  // const mainRef = useRef(null)
  // let lastScroll = 0

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     const currentScroll = window.pageYOffset;
  //     if (currentScroll <= 0) {
  //       document.body.classList.remove("scroll-up");
  //       return;
  //     }
    
  //     if (currentScroll > lastScroll && !document.body.classList.contains("scroll-down")) {
  //       document.body.classList.remove("scroll-up");
  //       document.body.classList.add("scroll-down");
  //     } else if (
  //       currentScroll < lastScroll &&
  //       document.body.classList.contains("scroll-down")
  //     ) {
  //       document.body.classList.remove("scroll-down");
  //       document.body.classList.add("scroll-up");
  //     }
  //     lastScroll = currentScroll;
  //   });
    
  // },[])
  
  const  {data: session} = useSession()
  


  return (

    <div className="w-full max-h-screen ">
      <Head>
        <title> Medium Clone </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {
        !session && (
          <main>
            <button onClick={()=> signIn()}> Sign in with google </button>
          </main>
        )
      }


      { session &&  (
        <main className="grid grid-cols-12">
          <HomeTopBar />
          <Navbar />
          <Feed blogs={blogs}  />
          <Sidebar homePageSidebar={"yes"} singleBlogPageSidebar={"no"} blogs={blogs} />
        </main>
      )
      
      }

    </div>
  )
}

export const getServerSideProps:GetServerSideProps = async (context) => {
  console.log("getServerSideProps function is running");

  const blogs = await fetchBlogs()

    return {
      props: {
        blogs
      }
    }
}


