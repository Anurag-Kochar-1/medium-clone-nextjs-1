import React, {useRef, useState ,  Suspense} from 'react'
import Head from "next/head"
// import WriteBlogPageLayout from '../../layouts/WriteBlogPageLayout'
import WriteBlogTopBar from '../../components/Mobile/TopBar/WriteBlogTopBar'
import Navbar from '../../components/Navbar/Navbar'
import 'react-quill/dist/quill.snow.css'
import AddFinalBlogDetails from './AddFinalBlogDetails'


const index = () => {

  const [personName, setPersonName] = useState<string[]>([]);
  const [isPageNumber2, setIsPageNumber2 ] = useState<boolean> (false)  


  const [title, setTitle] =  useState<string>('')
  const [blogContent, setBlogContent] =  useState<string>('')

  return (

    
    <div className='col-span-12 scrollbar-hide bg-white '>
      <Head>
        <title> Write a Blog </title>
      </Head>

        <WriteBlogTopBar isPageNumber2={isPageNumber2} setIsPageNumber2={setIsPageNumber2} />

        {!isPageNumber2 && <main className='col-span-12 bg-red-300 flex flex-col py-9 items-center justify-start px-3  mt-[8vh] h-[92vh] overflow-y-scroll overflow-x-hidden scrollbar-hide
        md:bg-indigo-200 md:px-20
        lg:bg-green-400 lg:px-32
        xl:bg-red-300 xl:px-40
        '>
            
            <input 
              type="text" 
              placeholder='Title'
              className='outline-none border-none w-[85%] bg-white placeholder:text-gray-900 px-2 py-3 mb-3 placeholder:font-medium font-serif placeholder:text-2xl text-xl text-gray-900'
              value={title}
              onChange={(e) => {
                setTitle(e.target.value)
              }}
             />

            <textarea 
              placeholder='Tell your story' 
              className='outline-none border-none w-[85%] h-[65vh] my-3 bg-white placeholder:text-gray-900 px-2 py-3 placeholder:font-medium font-serif placeholder:text-lg text-lg text-gray-900 ' 
              value={blogContent}
              onChange={(e) => {
                setBlogContent(e.target.value)
              }}
              /> 
            
            

            {/* <QuillNoSSRWrapper  theme="snow" className='h-[50vh] ' /> */}
             



        </main>}


        {isPageNumber2 && <> <AddFinalBlogDetails title={title} setTitle={setTitle}  blogContent={blogContent} setBlogContent = {setBlogContent} />  </> }
    </div>
  )
}

export default index