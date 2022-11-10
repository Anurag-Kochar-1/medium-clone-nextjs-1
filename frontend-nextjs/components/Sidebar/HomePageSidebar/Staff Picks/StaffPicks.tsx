import React from 'react'
import { GoPrimitiveDot } from 'react-icons/go'
import { Blog } from '../../../../types/typings'
import StaffPicksBlogCard from '../StaffPicksBlogCard'

interface Props {
    blogs: Blog[]
  }

const StaffPicks = ({blogs}:Props) => {
  return (
    <div className='w-full flex justify-start items-center space-x-1 pt-3 pb-2'>

    <div className=' w-full my-1'>
      <div className='flex w-full px-1 space-x-1 justify-start items-center'>
        <GoPrimitiveDot className='w-3 h-3 text-green-600' />
        <p className='text-base font-medium '> Staffs Picks </p>
      </div>

      
      <div className='w-full my-2 px-1'>
        {blogs.map((blog , index) => {
            return blog.staffPicks === true && (
              <div key={blog._id}>
                <StaffPicksBlogCard  blog={blog} /> 
              </div>
            )
        })}
      </div>
      
    </div>
    
</div>
  )
}

export default StaffPicks