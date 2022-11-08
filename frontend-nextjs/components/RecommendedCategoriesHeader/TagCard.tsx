import React from 'react'
import Link from 'next/link'

interface Props {
  category:string
  fetchBlogsByTagFunction: (searchQuery: string) => Promise<any>
}

const TagCard = ({category , fetchBlogsByTagFunction}:Props) => {

  
  return (

    <Link href={`/?=${category}`}>
    <div onClick={() => fetchBlogsByTagFunction(category)} className='px-3 mx-1 flex justify-center items-center text-center text-gray-600 hover:text-black hover:cursor-pointer bg-white rounded-lg'>
        <p className='text-sm font-medium'> {category} </p>

    </div>
    </Link>
  )
}

export default TagCard