import React from 'react'
import { Topics } from "../../../../constants/RecommendedTopicsConstants"

const RecommendedTopics = () => {
  return (
    <div className='w-full flex flex-col  justify-start items-start space-x-1 px-1 pb-2'>
        <p className='font-medium text-lg'> Recommended topics </p>

        <div className='w-full flex flex-wrap justify-start items-center py-4'>
            {Topics.map((topic) => {
                return <p className='bg-gray-100 px-5 py-1 mx-2 my-2 rounded-full text-gray-700 text-base font-normal hover:cursor-pointer hover:text-gray-800'> {topic} </p>
            })}
        </div>
 
    </div>
  )
}

export default RecommendedTopics