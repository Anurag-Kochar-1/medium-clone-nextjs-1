import {useRef, useEffect} from "react"
import Head from 'next/head'
import Feed from '../components/Feed/Feed'
import HomeTopBar from '../components/Mobile/TopBar/HomeTopBar'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'

import HomeLayout from "../layouts/HomeLayout"


import { useSession , signIn } from "next-auth/react"

// import "../styles/stylesScroll.css"

export default function Home() {

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
          <Feed />
          <Sidebar />
        </main>
      )
      
      }

    </div>
  )
}
