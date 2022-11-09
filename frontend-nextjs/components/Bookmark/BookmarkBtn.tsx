import React, { useEffect, useState  , useContext} from "react";
import { BlogsContext } from "../../context/Context"
import useLocalStorage from "../../hooks/useLocalStorage";
import { BsBookmarkPlus, BsFillBookmarkFill } from "react-icons/bs";
import { Blog } from "../../types/typings";

import { useSession , signIn } from "next-auth/react"
import { sign } from "crypto";

interface Props {
  blogId: string;
  blog: Blog;
}

const BookmarkBtn = ({ blogId, blog }: Props) => {
  console.log('------------BookmarkBtn is running -------------------');
  const {data: session} = useSession()

  const {setAllBookmarkedBlogs} = useContext(BlogsContext)
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);


  const [bookmarkedBlog, setBookmarkedBlog] = useLocalStorage( "bookmarkedBlogs" ,  []);

  const bookmarkTheBlog = () => {
    console.log('bookmarkTheBlog is running');
    
    setBookmarkedBlog([ ...bookmarkedBlog , blog])
    setIsBookmarked(true)
    setAllBookmarkedBlogs(bookmarkedBlog)
  }

  const removeTheBookmarkedBlog = (blodId):string => {
    console.log('removeTheBookmarkedBlog is running');
    // console.log(bookmarkedBlog);
    setBookmarkedBlog(bookmarkedBlog.filter((blog) => blog._id !== blodId))
    setIsBookmarked(false)
    setAllBookmarkedBlogs(bookmarkedBlog)
    // console.log(bookmarkedBlog);
    
  }

  const removingDuplicates = () => {
    const result = bookmarkedBlog.reduce((finalArray , current) => {
        let obj = finalArray.find((item) => item._id === current._id)

        if(obj) {
            return finalArray;
        } else {
            return finalArray.concat([current])
        }
    },[])
    setBookmarkedBlog(result)
  }

  useEffect(() => {
    
    let fresh:any = JSON.parse(localStorage.getItem("bookmarkedBlogs"))
    console.log('fresh');
    console.log(fresh);
    setBookmarkedBlog(fresh)
    removingDuplicates()
    
    bookmarkedBlog.map((blog) => {
      if(blog._id === blogId) {
        setIsBookmarked(true)
      } else {
        setIsBookmarked(false)
      }
    })

    setAllBookmarkedBlogs(bookmarkedBlog)
   },[isBookmarked])


  return (
    <>
        {/* <p onClick={() => removeTheBookmarkedBlog(blog._id )}> log removeTheBookmarkedBlog </p> */}
        {/* <p onClick={() => console.log(bookmarkedBlog)}> log allBookmarkedBlogsState </p> */}
      <div
        className="flex justify-center items-center space-x-3 px-3 rounded-full border-2 border-gray-300 lg:border-0  hover:cursor-pointer"
        // onClick={() => !isBookmarked ?  bookmarkTheBlog() : removeTheBookmarkedBlog(blogId) }
        onClick={() => {
          if(!isBookmarked && session?.user) {
            bookmarkTheBlog()
          } else if ( isBookmarked && session?.user ) {
            removeTheBookmarkedBlog(blogId)
          } else if (!session?.user) {
            signIn()
          }
          
        }}
      >
        
        {!isBookmarked ? (
          <BsBookmarkPlus className="w-4 h-4 text-gray-500 lg:mx-1 lg:my-1 hover:text-black" />
        ) : (
          <BsFillBookmarkFill className="w-4 h-4 text-gray-500 lg:mx-1 lg:my-1 hover:text-black" />
        )}

        <p className="text-gray-500 lg:hidden">
          {!isBookmarked ? "Save" : "Saved!"}
        </p>
      </div>
    </>
  );
};

export default BookmarkBtn;
