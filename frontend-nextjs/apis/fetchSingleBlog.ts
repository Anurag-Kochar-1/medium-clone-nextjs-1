import { Blog } from "../types/typings"

export const fetchSingleBlog = async (blogId:string) => {
    
    console.log(`blogId is from fetchSingleBlog.ts >>>>>>>>>>>> ${blogId}`);
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_DEV}api/getSingleBlog?blogId=${blogId}`)

    const  { singleBlog } : any = await res.json()

    return singleBlog
}