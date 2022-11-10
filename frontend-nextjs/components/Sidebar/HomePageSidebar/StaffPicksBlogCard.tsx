import React from 'react'
import { Blog } from '../../../types/typings'
import Link from "next/link"

interface Props {
    blog : Blog
    key: string
}

const StaffPicksBlogCard = ( {blog, key}:Props ) => {
  return (
    <Link href={`blog/${blog._id}`}>
        <div key={key} className='w-full flex flex-col items-start justify-start my-2 px-1 hover:cursor-pointer'>
            <div className='w-full flex justify-start items-center space-x-2'>
                <img src={blog.profileImg as string} alt="dp"
                    className='w-5 h-5 rounded-full'
                    />
                <p className='text-xs font-medium text-gray-700'> {blog.username} </p>
            </div>

            <h3 className='text-base font-bold my-1'> {blog.title} </h3>
        </div>
    </Link>
  )
}

export default StaffPicksBlogCard