import type { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient } from "../../sanity"
import { Blog } from "../../types/typings"
import { groq } from "next-sanity"

const singleBlogQuery = groq`
*[_type == "blog" && _id == $blogId] 
{
    _id,
    ...
} 
`
 
type Data = {
    singleBlog: Blog
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const { blogId } = req.query;
    const  singleBlog :Blog = await sanityClient.fetch(singleBlogQuery, {
        blogId
    })
    console.log(singleBlog);
    
    res.status(200).json( {singleBlog} )
    // return singleBlog
}
