import { Blog } from "../types/typings"

export const fetchBlogsByTopic = async (topic:string) => {
    console.log('fetchBlogsByTopic is running');
    
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_DEV}api/getBlogsByTopic?topicName=${topic}`)

    const  { blogsByTopic } : any = await res.json()

    return blogsByTopic
}