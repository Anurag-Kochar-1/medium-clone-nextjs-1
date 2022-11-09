import React, {useState, useEffect} from 'react'
import {AiOutlineLike , AiFillLike} from 'react-icons/ai'
import {FaRegComment} from 'react-icons/fa'
import {BsThreeDots} from 'react-icons/bs'
import { signIn, useSession } from 'next-auth/react'
import likeBlogById from '../../apis/likeBlogById'

interface Props {
  blogId: string
  likeCount: number
}

const OptionsBottomBar = ( {blogId , likeCount}:Props ) => {
  const [likeCountState, setLikeCountState] = useState<number> (likeCount)
  const {data: session } = useSession() 

  const likeBlogFunction = async () => {
    try {
      if(session?.user ) {
        const data = await likeBlogById(blogId as string)
        console.log(`likeBlogFunction is running---------`);
     } else if (!session?.user) {
        signIn()
     }
    } catch (error) {
      console.log(error);
      
    }
  }


  return (
    <div className='fixed bottom-[12vh] flex justify-around items-center w-52 h-10 bg-gray-100 rounded-full shadow-sm shadow-gray-400
    lg:bottom-[3vh]
    '>

        <div className=' w-[33%] flex justify-center items-center space-x-2 border-r-2 border-r-gray-300'>
          <AiOutlineLike 
            className='w-5 h-5 text-gray-500 hover:cursor-pointer hover:text-black
            active:scale-125 active:font-bold
            ' 
            onClick={() => {
              likeBlogFunction()
              setLikeCountState(likeCountState + 1)
            }}
          />
          <p className='text-gray-500'> {likeCountState} </p>
        </div>

        <div className='w-[33%] flex space-x-2 justify-center items-center  border-r-2 border-r-gray-300'>
          <FaRegComment className='w-5 h-5 text-gray-500 hover:cursor-pointer hover:text-black'/>
          <p className='text-gray-500'> 0 </p>
        </div>

        <div className=' w-[33%] flex justify-center items-center '>
          <BsThreeDots className='w-5 h-5 text-gray-500 hover:cursor-pointer hover:text-black'/>
          {/* <p> {likeCountState} </p> */}
        </div>


    </div>
  )
}

export default OptionsBottomBar