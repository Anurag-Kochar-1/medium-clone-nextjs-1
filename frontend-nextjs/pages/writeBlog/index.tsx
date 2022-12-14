import React, {useRef, useState ,  Suspense , useEffect} from 'react'
import Head from "next/head"
// import WriteBlogPageLayout from '../../layouts/WriteBlogPageLayout'
import WriteBlogTopBar from '../../components/Mobile/TopBar/WriteBlogTopBar'
import Navbar from '../../components/Navbar/Navbar'
import AddFinalBlogDetails from './AddFinalBlogDetails'

import { useQuill } from "react-quilljs";
import ReactQuill from 'react-quill'
import "quill/dist/quill.snow.css"

import dynamic from "next/dynamic";


const Index = () => {
  const ReactQuill = dynamic(import('react-quill'), { ssr: false })

  const ReactQuillInput = useRef(null)

  const [hydrated, setHydrated] = useState<boolean>(false);

  useEffect(() => {
    setHydrated(true)
    console.log(`setHydrated is set to true from writeBlog  index.tsx`);
    
    
    
  },[])

  const { quill, quillRef } = useQuill();

  const modules = {
    toolbar: [
        [{header: "1"}, {header: "2"}, {header: [3,4,5,6]}, {font: []}],
        [{size: []}],
        ["bold" , "italic", "underline", "strike", "blockquote"],
        [{list: "ordered"}, {list: "bullet"}],
        ["link", "image", "video"],
        ["clean"],
        ["code-block"],
    ],
}

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
    "video",
    "code-block"
  ]

  const [personName, setPersonName] = useState<string[]>([]);
  const [isPageNumber2, setIsPageNumber2 ] = useState<boolean> (false)  


  const [title, setTitle] =  useState<string>('')
  const [blogContent, setBlogContent] =  useState<string>('')

  const handleBlogContent = (e:any) => {
    console.log(e)
    setBlogContent(e)
    // ReactQuillInput.current.focus();
  }


  if(!hydrated) return null

  return (

    <div className='col-span-12 scrollbar-hide bg-white '>
      <Head>
        <title> Write a Blog </title>
      </Head>

        <WriteBlogTopBar isPageNumber2={isPageNumber2} setIsPageNumber2={setIsPageNumber2} />

        {!isPageNumber2 && <main className='col-span-12 bg-white flex flex-col py-9 items-center justify-start px-3  mt-[8vh] h-[92vh] overflow-y-scroll overflow-x-hidden scrollbar-hide
        md:bg-white md:px-20
        lg:bg-white lg:px-32
        xl:bg-white xl:px-40
        '>
          {/* <button onClick={() => console.log(blogContent)}> log BlogConten </button> */}
            
            <input 
              type="text" 
              placeholder='Title'
              className='rounded-sm border-[1px] border-gray-400 w-[85%] bg-white placeholder:text-gray-900 px-2 py-3 mb-3 placeholder:font-medium font-serif placeholder:text-2xl text-xl text-gray-900'
              value={title}
              onChange={(e) => {
                setTitle(e.target.value)
              }}
             />

            {/* <textarea 
              placeholder='Tell your story' 
              className='outline-none border-none w-[85%] h-[65vh] my-3 bg-white placeholder:text-gray-900 px-2 py-3 placeholder:font-medium font-serif placeholder:text-lg text-lg text-gray-900 ' 
              value={blogContent}
              onChange={(e) => {
                setBlogContent(e.target.value)
              }}
              />  */}
            
            <ReactQuill 
              placeholder='....'
              modules={modules}
              formats={formats}
              onChange={handleBlogContent}
              value={blogContent}
              className='outline-none w-[85%] rounded-lg h-[65vh] my-3 bg-white placeholder:text-gray-900 placeholder:font-medium font-serif placeholder:text-lg text-lg text-gray-900' 
            
            />


        </main>}


        {isPageNumber2 && <> <AddFinalBlogDetails title={title} setTitle={setTitle}  blogContent={blogContent} setBlogContent = {setBlogContent} />  </> }
    </div>
  )
}

export default Index