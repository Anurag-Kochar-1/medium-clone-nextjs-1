import React, {useContext} from 'react'
import { BlogsContext } from '../../../context/Context'
import { Blog } from '../../../types/typings'

const NumberOfStoriesAndWriters = () => {
  const { topicPageDetails } = useContext(BlogsContext)

  let uniqueWriters = Array.from(new Set(topicPageDetails.map(({ username  }) => username)));

  return (
    <div className='w-full flex flex-row justify-start items-center px-1 py-5 bg-white'>
      
      <div className='w-[50%]  flex flex-col items-center justify-center py-2'>
          <p className='text-2xl font-semibold'> {topicPageDetails.length != 0 ? topicPageDetails.length+1 : 0} </p>
          <p className='text-gray-600 text-base'> Stories </p>
      </div>

      <div className='w-[50%] flex flex-col items-center justify-center py-2'>
          <p className='text-2xl font-semibold'> {uniqueWriters.length}  </p>
          <p className='text-gray-600 text-base'> Writers </p>
      </div>
    </div>
  )
}

export default NumberOfStoriesAndWriters