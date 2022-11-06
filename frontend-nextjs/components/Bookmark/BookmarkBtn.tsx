import React, {useEffect, useState} from 'react'
import { BsBookmarkPlus , BsFillBookmarkFill} from 'react-icons/bs'
import { Blog } from '../../types/typings'

interface Props {
    blogId: string
    blog: Blog
}


const BookmarkBtn = ( {blogId , blog}:Props ) => {

    const [localStorageState, setLocalStorageState] = useState<any[]>([])

    const [isBookmarked, setIsBookmarked] = useState<boolean>(false)

    const [allBookmarkedBlogsState, setAllBookmarkedBlogsState] = useState<unknown>([])

    let allBookmarkedBlogs:Blog[] = JSON.parse(localStorage.getItem("blogs") || "[]")
    

    const bookmarkBlog = () => {
        setAllBookmarkedBlogsState([ ...allBookmarkedBlogs , blog ] )
        // allBookmarkedBlogs.push(blog)
        console.log('bookmarkBlog function is running');
        // localStorage.setItem('blogs', JSON.stringify(allBookmarkedBlogs))
        localStorage.setItem('blogs', JSON.stringify(allBookmarkedBlogsState))
    }

    const removeBookmarkedBlog = (blogId:string) => {
        console.log('removeBookmarkedBlog is running');
        
        allBookmarkedBlogs.filter((blog) => {
            return blog._id != blogId
        })

    }

    // const checkingBookmarkedOrNot = (blogId:string) => {
    //     allBookmarkedBlogs.map((blog) => {
    //         if( blog._id === blogId ) {
    //             setIsBookmarked(true)
    //             return blog
    //         } else {
    //             return blog
    //         }
    //     })
    // }





  return (
    <>
    <div className='flex justify-center items-center space-x-3 px-3 rounded-full border-2 border-gray-300 lg:border-0  hover:cursor-pointer'
    onClick={() => alert('under construction') }
    >
            {!isBookmarked ? <BsBookmarkPlus className='w-4 h-4 text-gray-500 lg:mx-1 lg:my-1 hover:text-black'/> : <BsFillBookmarkFill className='w-4 h-4 text-gray-500 lg:mx-1 lg:my-1 hover:text-black'/> }
                
                
                
            <p className='text-gray-500 lg:hidden'> {!isBookmarked  ? "Save" : "Saved!"  } </p>



    </div>
            {/* <button className='bg-red-400' onClick={() => console.log(JSON.parse(window.localStorage.getItem('blogs'))) }> log bookmarkedBlogsState  </button> */}
            {/* <button className='bg-red-400' onClick={() => {
                // localStorageState.map((item:any) => {
                //     console.log( item)
                // })
                console.log(1);
                
                
            }}> log bookmarkedBlogsState  </button> */}
        </>
    
           
  )
}

export default BookmarkBtn