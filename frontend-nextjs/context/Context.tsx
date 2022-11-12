
import React, {createContext, Provider, useState} from 'react'
// import { BlogsContext } from "../context/Context"
import { Blog } from '../types/typings'

interface blogDetailsType {
  blogDetails: Blog
  setBlogDetails: React.Dispatch<React.SetStateAction<Blog[]>>
}




// ---------------- first BlogContext (values were at _app.tsx)------------------------- 
// export const BlogsContext = createContext({})






interface Props {
    children: React.ReactNode
}


export const BlogsContext = createContext({})

export function BlogsContext2Wrapper ({children}:Props) {
    
    const [blogDetails, setBlogDetails] = useState<blogDetailsType[]>([])
    const [blogs, setBlogs] = useState <Blog[]> ([])

    // Used for sidebar, so that query paramter doesn't affect stack picks
    const [allBlogsStateForSidebar , setAllBlogsStateForSidebar] = useState<Blog[]>([])

    const [topicPageDetails , setTopicPageDetails] = useState<Blog[]>([])

    // BookmarkedBlogs State
    const [allBookmarkedBlogs, setAllBookmarkedBlogs] = useState<Blog[]>([])


    return (
        <BlogsContext.Provider  value={{blogDetails, setBlogDetails , blogs , setBlogs , allBlogsStateForSidebar ,setAllBlogsStateForSidebar , topicPageDetails , setTopicPageDetails , allBookmarkedBlogs , setAllBookmarkedBlogs   }}> 
            {children}
        </BlogsContext.Provider> 
    )


}
