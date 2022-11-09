import type { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient } from "../../sanity"
import { Blog } from "../../types/typings"
import { groq } from "next-sanity"

const blogsByTopicQuery = groq`
*[_type == "blog" && category == $topicName] 
{
    _id,
    ...
} | order(_createdAt desc)
`
 
type Data = {
    blogsByTopic: Blog
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const { topicName } = req.query;
    const  blogsByTopic :Blog = await sanityClient.fetch(blogsByTopicQuery, {
        topicName
    })

    console.log('getBlogsByTopic is running');
    
    res.status(200).json( {blogsByTopic} )
}
