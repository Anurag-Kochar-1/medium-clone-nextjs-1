import { fetchBlogs } from "../../apis/fetchBlogs";
import { useContext } from "react";
import { BlogsContext } from "../../context/Context"


const refreshFeed = async () => {
    // const { setBlogs } = useContext(BlogsContext) 
    console.log(`refreshFeed.ts is running`);
    
    const refreshingFeed = await fetchBlogs()
    // setBlogs(refreshingFeed)

    console.log('updated --> refreshFeed.ts is running ');
    return refreshingFeed
    
}




export default refreshFeed