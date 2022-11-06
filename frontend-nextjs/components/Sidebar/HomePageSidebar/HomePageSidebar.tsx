import React from 'react'
import {GoPrimitiveDot} from "react-icons/go"
import { Blog } from '../../../types/typings'
import StaffPicks from './Staff Picks/StaffPicks'

import StaffPicksBlogCard from './StaffPicksBlogCard'
interface Props {
  blogs: Blog[]
}



const HomePageSidebar = ({blogs}:Props) => {
  return (
    <div className='w-[90%] bg-gray-100 px-1'>

       <StaffPicks blogs={blogs} />
       <h3 className='text-xl my-5'> Recommend Lists </h3>
    </div>
  )
}

export default HomePageSidebar