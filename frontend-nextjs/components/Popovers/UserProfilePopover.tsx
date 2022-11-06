import { Menu, Transition } from '@headlessui/react'
import { SignOutParams, SignOutResponse, useSession } from 'next-auth/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { BsThreeDots } from "react-icons/bs"
import { toast } from 'react-toastify'
import deleteBlogById  from '../../apis/deleteBlogById'


interface Props {
    userProfilePicture: string
    signOut: <R extends boolean = true>(options?: SignOutParams<R> | undefined) => Promise<R extends true ? undefined : SignOutResponse>
}

export default function UserProfileDropDown ( {userProfilePicture , signOut}:Props ) {
    const {data: session } = useSession()    



    

  return (
    <div className="w-30 text-right rounded-xl">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-32 justify-center rounded-md  px-2 py-1 text-sm font-medium">
          <img src={ userProfilePicture } alt="dp" className='hidden lg:inline rounded-full  fixed bottom-10 w-9 h-9 text-red-700 cursor-pointer '
          
        />
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
                    // onClick={() => signOut()}
                  >
                    Sign Out
                  </button>

              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}


