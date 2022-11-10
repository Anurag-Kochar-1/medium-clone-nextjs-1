// import React, {useContext, useState} from 'react'
// import { BlogsContext } from "../../../context/Context"
// import { Blog } from '../../../types/typings'
// import { RiMailAddLine } from 'react-icons/ri'

// const SideBarProfile = () => {
//     const { blogDetails }:any  = useContext(BlogsContext)
//     const [isFollowed , setIsFollowed] = useState<boolean>(false)
    

//   return (
//     <div key={blogDetails._id} className='w-[90%] px-2 my-4 '>
//         {blogDetails.profileImg  ? <img src={blogDetails.profileImg as string} alt="dp" className='w-20 h-20 rounded-full' /> : <div className='w-20 h-20 bg-gray-300 rounded-full'> </div>}

//         <p className='text-lg font-semibold text-gray-800 mt-4 mv-1'> {blogDetails.username} </p>
//         <p className='text-sm font-normal text-gray-500'> {blogDetails.userEmail} </p>

//         <div className='w-full flex justify-start items-center'>
//             <button className={ !isFollowed ? 'px-5 py-2 my-7 rounded-full bg-green-700 text-white font-medium text-base hover:cursor-pointer hover:bg-green-800' : 'px-5 py-2 my-7 rounded-full bg-white text-green-700 border-green-700 border-2 font-medium text-base hover:cursor-pointer' }
            
//             onClick={()=> setIsFollowed(!isFollowed)}
//             > 
//             {isFollowed ? "Following" : "Follow"}
            
//             </button>

//             <div className='px-3 py-3 mx-2 rounded-full bg-green-700 hover:cursor-pointer hover:bg-green-800'>
//                 <RiMailAddLine className=' text-white font-light' />
//             </div>
//         </div>
//     </div>
//   )
// }

// export default SideBarProfile


import React from 'react'

const SideBarProfile = () => {
  return (
    <div>SideBarProfile</div>
  )
}

export default SideBarProfile