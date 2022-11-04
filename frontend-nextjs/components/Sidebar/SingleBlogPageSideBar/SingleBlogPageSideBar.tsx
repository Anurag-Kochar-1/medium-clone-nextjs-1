import { useSession } from 'next-auth/react'
import React from 'react'



const SingleBlogPageSideBar = () => {
    const {data: session } = useSession()
  return (
    <div className='bg-red-200 w-full'>
        <img src={''} alt="" />
    </div>
  )
}

export default SingleBlogPageSideBar