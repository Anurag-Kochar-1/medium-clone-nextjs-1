import { useContext } from "react"
import { BlogsContext } from "./../../context/Context"
import { Menu, Transition } from '@headlessui/react'
import { useSession } from 'next-auth/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { BsThreeDots } from "react-icons/bs"
import { toast } from 'react-toastify'
import deleteBlogById  from '../../apis/deleteBlogById'
import refreshFeed from '../../utils/functions/refreshFeed'


interface Props {
    blogId: string
    creatorEmail: string
    source: string
}

export default function Dropdown( {blogId , creatorEmail , source}:Props ) {
  const { setBlogs }:any = useContext(BlogsContext)
    const {data: session } = useSession()    

    const reFetchingBlogs = async () => {
      const refreshingFeed = await refreshFeed()
      const data = await refreshingFeed
      setBlogs(data)
    }

    const showBlogDeletedToast = () => toast('Blog Deleted', { hideProgressBar: true, autoClose: 2000, type: 'success' ,position:'bottom-center'})


    const deteteBlogFunction = async () => {

       try {
        if(session?.user?.email === creatorEmail ) {
            const data = await deleteBlogById(blogId as string)
            reFetchingBlogs()
            showBlogDeletedToast()
         }
       } catch (error) {
        console.log(error);
        
       }
    }

  return (
    <div className={source === "blogPage" ? "w-30 text-right rounded-xl" : "hidden sm:inline-block w-30 text-right rounded-xl"} >
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md  px-2 py-1 text-sm font-medium">
            <BsThreeDots className='w-4 h-4 text-black md:w-5 md:h-5' />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-0 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg shadow-gray-400 ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 flex flex-col text-left">
              <Menu.Item>

                  <button
                    className='px-2 py-1  text-gray-500 hover:cursor-pointer hover:text-black'
                    onClick={() => deteteBlogFunction()}
                  >
                    Delete
                  </button>

              </Menu.Item>
              <Menu.Item>
                  <button
                  className='px-2 py-1 text-gray-500 hover:cursor-pointer hover:text-black'
                  >
                    Edit
                  </button>

              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}


