import '../styles/globals.css'
import * as React from 'react'
import {useState} from 'react'
// import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import 'react-quill/dist/quill.snow.css'

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

// import { BlogsContext } from "../context/Context"
import { Blog } from '../types/typings'
import { BlogsContext2Wrapper } from '../context/Context'

interface blogDetailsType {
  blogDetails: Blog
  setBlogDetails: React.Dispatch<React.SetStateAction<Blog[]>>
}

export default function App({ Component, pageProps: {session, ...pageProps} }: any) {
  const [blogDetails, setBlogDetails] = useState<blogDetailsType[]>([])
  const [blogs, setBlogs] = useState <Blog[]> ([])

  // Used for sidebar, so that query paramter doesn't affect stack picks
  const [allBlogsStateForSidebar , setAllBlogsStateForSidebar] = useState<Blog[]>([])

  const [topicPageDetails , setTopicPageDetails] = useState<Blog[]>([])

  // BookmarkedBlogs State
  const [allBookmarkedBlogs, setAllBookmarkedBlogs] = useState<Blog[]>([])

  return (
    
    //   <BlogsContext.Provider value={{blogDetails, setBlogDetails , blogs , setBlogs , allBlogsStateForSidebar ,setAllBlogsStateForSidebar , topicPageDetails , setTopicPageDetails , allBookmarkedBlogs , setAllBookmarkedBlogs  }}>
    //     <SessionProvider session={session}>
    //       <Component {...pageProps} />
    //       <ToastContainer />
    //     </SessionProvider>
    // </BlogsContext.Provider>


    <BlogsContext2Wrapper>
        <SessionProvider session={session}>
          <Component {...pageProps} />
          <ToastContainer />
        </SessionProvider>
    </BlogsContext2Wrapper>
  )
}
