import React, {useState} from 'react'
import {useSession , signIn , signOut} from "next-auth/react"

const ProfileDropdown = () => {

    const {data: session} = useSession()

    const [isProfileDropdownOpen , setIsProfileDropdownOpen] = useState<boolean>(false)

  return (
    <div className='w-40 h-40 rounded-lg fixed left-1 bottom-[12vh] flex flex-col items-center justify-center bg-gray-400'>

        <p> {session ? "Sign out" : "Sign in"}  </p>
    </div>
  )
}

export default ProfileDropdown