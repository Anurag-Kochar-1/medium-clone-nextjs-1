import type { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient } from "../../sanity"
import { Blog } from "../../types/typings"
import { groq } from "next-sanity"

const blogQuery = groq`
*[_type == "blog" && blockTheBlog == false] {
    _id,
    ...
} | order(_createdAt desc)
`
 
type Data = {
    blogs: Blog[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

    const blogs:Blog[] = await sanityClient.fetch(blogQuery)

  res.status(200).json({ blogs })
}
