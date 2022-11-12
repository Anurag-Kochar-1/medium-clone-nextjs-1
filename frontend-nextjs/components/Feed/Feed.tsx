import React , {useState} from 'react'
import { GetServerSideProps } from 'next';
import { fetchBlogs } from '../../apis/fetchBlogs';
import { Blog  } from "../../types/typings"
import BlogsContainer from "../BlogsContainer/BlogsContainer"
import RecommendedCategoriesHeader from '../RecommendedCategoriesHeader/RecommendedCategoriesHeader';
import UserProfilePopover from '../Popovers/UserProfilePopover';
import NotificationsModal from '../Modals/NotificationsModal';
interface Props {
  blogs: Blog[]
}

const Feed = ( {blogs}:Props ) => {

  const [blogsState, setblogsState] = useState<Blog[]>(blogs)





  return (

    <div className='col-span-12 px-1 pb-10 max-h-screen mt-[16vh] mb-[10vh] overflow-y-scroll scrollbar-hide
    lg:col-span-8 lg:mt-[0vh] lg:mb-0 
    '>
      
    {/* <button onClick={() => console.log(blogs)}> LOG blogsState  </button> */}
    <BlogsContainer blogsData = {blogs}  IsRecommendedCategoriesHeader={true} />
    
    </div>
  )
}


export default Feed