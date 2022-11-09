import React from 'react'
import RecommendedTopics from '../HomePageSidebar/RecommendedTopics/RecommendedTopics'
import NumberOfStoriesAndWriters from '../NumberOfStoriesAndWriters/NumberOfStoriesAndWriters'
import ReadingListTip from '../Tips/ReadingListTip'

const TopicPageSidebar = () => {
  return (
    <div className='w-[90%] bg-white px-1'>
        
       {/* <h3 className='text-xl my-5'> Recommend Lists </h3> */}
        <NumberOfStoriesAndWriters />
        <RecommendedTopics />
        <ReadingListTip />
    </div>
  )
}

export default TopicPageSidebar