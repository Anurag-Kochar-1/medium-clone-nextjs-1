// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient } from '../../sanity'
import { Blog, BlogBody } from '../../types/typings'

type Data = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

    // const blogId = JSON.parse(req.blogId)
    // const { blogId } = req.query
    // const mutations =  {
    //     mutations: [
    //         {
    //             delete: {
    //                 id: blogId
    //             }
    //         }
    //     ]
    // }

    // const apiEndpoint = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`

    // const result = await fetch(apiEndpoint, {
    //     headers: {
    //         'Content-Type': 'application/json',
    //         Authorization : `Bearer ${process.env.SANITY_API_TOKEN}`
    //     },
    //     body: JSON.stringify(mutations),
    //     method: 'DELETE'
    // })
    const { blogId } = req.query
    const  DATA  = await sanityClient.delete(blogId as string)
    .then(() => {
      console.log('Blog deleted')
    })
    .catch((err) => {
      console.error('Delete failed: ', err.message)
    })


  res.status(200).json({ message: 'Blog Deleted' })
}
