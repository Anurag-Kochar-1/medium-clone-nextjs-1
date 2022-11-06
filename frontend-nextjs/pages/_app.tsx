import '../styles/globals.css'
import * as React from 'react'
import {useState} from 'react'
// import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import 'react-quill/dist/quill.snow.css'

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import { profileContext } from "../context/Context"
import { Blog } from '../types/typings'

interface blogDetailsType {
  blogDetails: Blog
  setBlogDetails: React.Dispatch<React.SetStateAction<Blog[]>>
}

export default function App({ Component, pageProps: {session, ...pageProps} }: any) {
  const [blogDetails, setBlogDetails] = useState<blogDetailsType[]>([])
  const [blogs, setBlogs] = useState <Blog[]> ([])

  return (
    
      <profileContext.Provider value={{blogDetails, setBlogDetails , blogs , setBlogs}}>
        <SessionProvider session={session}>
          <Component {...pageProps} />
          <ToastContainer />
        </SessionProvider>
    </profileContext.Provider>
  )
}
