import Link from 'next/link'
import React from 'react'
import { Categories  } from "../../constants/categories"

const RecommendedCategoriesHeader = () => {
  return (
    <div className='fixed w-[100%] h-[8vh] top-[10vh] px-5 py-1 flex justify-start items-center space-x-3 bg-red-300 border-b-2 border-b-gray-400 overflow-x-scroll overflow-y-hidden lg:top-0 lg:justify-center  scrollbar-hide '>

        {
            Categories.map((category) => {
                return (
                    <p className="hover:cursor-pointer"> {category} </p>
                )
            })
        }

        
    </div>
  )
}

export default RecommendedCategoriesHeader



