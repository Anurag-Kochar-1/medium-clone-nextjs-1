import type { NextApiRequest, NextApiResponse } from 'next'
import {  BlogBody } from "../../types/typings"

type Data = {
  message: string
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

    const data:BlogBody = JSON.parse(req.body)
    const mutations =  {
        mutations: [
            {
                create: {
                    _type: "blog",
                    username: data.username,
                    profileImg: data.profileImg,
                    userEmail : data.userEmail,
                    title: data.title,
                    coverImage: data.coverImage,
                    body: data.body,
                    previewSubtitle : data.previewSubtitle,
                    category: data.category,
                    likeCount: data.likeCount,
                    blockTheBlog: data.blockTheBlog,
                    staffPicks: data.staffPicks
                }
            }
        ]
    }

    const apiEndpoint = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`

    const result = await fetch(apiEndpoint, {
        headers: {
            'Content-Type': 'application/json',
            Authorization : `Bearer ${process.env.SANITY_API_TOKEN}`
        },
        body: JSON.stringify(mutations),
        method: 'POST'
    })

    const json = await result.json()
    

    res.status(200).json({ message: 'Tweet Added' })
}
