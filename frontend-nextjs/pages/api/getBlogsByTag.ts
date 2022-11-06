import type { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient } from "../../sanity"
import { Blog } from "../../types/typings"
import { groq } from "next-sanity"

const blogQuery = groq`
*[_type == "blog" && blockTheBlog == false && category == $tag] {
    _id,
    ...
} | order(_createdAt desc)
`
 
type Data = {
    blogsByTag: Blog[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const query = req.query;
    const {  tag } = query;
    console.log(` logging from getBlogsByTags , tag: ${tag}` );
    

    const blogsByTag:Blog[] = await sanityClient.fetch(blogQuery, {tag})

  res.status(200).json({ blogsByTag })
}
