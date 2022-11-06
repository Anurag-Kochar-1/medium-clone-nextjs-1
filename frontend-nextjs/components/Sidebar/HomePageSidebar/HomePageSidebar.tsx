import React from 'react'
import {GoPrimitiveDot} from "react-icons/go"
import { Blog } from '../../../types/typings'
import ReadingListTip from '../Tips/ReadingListTip'
import StaffPicks from './Staff Picks/StaffPicks'

import StaffPicksBlogCard from './StaffPicksBlogCard'
interface Props {
  blogs: Blog[]
}



const HomePageSidebar = ({blogs}:Props) => {
  return (
    <div className='w-[90%] bg-white px-1'>

       <StaffPicks blogs={blogs} />
       {/* <h3 className='text-xl my-5'> Recommend Lists </h3> */}
       <ReadingListTip />
    </div>
  )
}

export default HomePageSidebar