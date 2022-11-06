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


    const { blogId } = req.query

    const data = await sanityClient.
        patch(blogId as string)
        .inc({likeCount: 1})
        .commit()
        .then((updatedBike) => {
            console.log('liked');
            console.log(updatedBike);
        })
        .catch((err) => {
            console.error('Oh no, the like failed: ', err.message)
          })

    


  res.status(200).json({ message: 'Blog Liked' })
}
