import React from 'react'
import {BsBookmarkPlus} from "react-icons/bs"

const ReadingListTip = () => {
  return (
    <div className=' w-full flex flex-col items-start justify-start  my-2 px-1'>
        <p className='text-black my-2 font-medium text-lg'> Reading List </p>

        <p className='text-gray-600 text-sm mb-4 inline'> Click the<BsBookmarkPlus className='inline w-4 h-4 mx-1 text-gray-600 text-sm' />  on any story to easily add it to your reading list or a custom list that you can share. </p>
    </div>
  )
}

export default ReadingListTip