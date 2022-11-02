import React, {useState} from 'react'
import blogCoverImageThumbnail from "../../public/images/blogCoverImageThumbnail.png"
import Link from "next/link"

import { useSession } from "next-auth/react"

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface Props { 
  title: string
  setTitle : React.Dispatch<React.SetStateAction<string>>
  blogContent: string
  setBlogContent: React.Dispatch<React.SetStateAction<string>>
}

const AddFinalBlogDetails = ( {title, blogContent , setTitle , setBlogContent}:Props ) => {

  const {data: session} = useSession()
  

  const [isUploadImageBoxVisible , setIsUploadImageBoxVisible] = useState <boolean> (false)
  const [imageUrlInput, setImageUrlInput] = useState <string> ('')
  const [image, setImage] = useState<string> ('')
  const [previewSubtitle , setPreviewSubtitle] = useState<string>(blogContent)
  const [category, setCategory] = useState<string>('');

  const handleCategoryChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  return (
    <main className='col-span-12 bg-white flex flex-col py-9 items-center justify-start px-3  mt-[8vh] h-[92vh] overflow-y-scroll overflow-x-hidden scrollbar-hide

    lg:bg-white lg:flex-row lg:items-start lg:justify-center lg:space-x-10
    
        '>

        <div className='w-[90%] h-auto bg-white py-2 flex flex-col items-center justify-start
        lg:w-[40%]
        '>
            <p className='text-lg text-left font-medium my-2 mx-1'> Story Preview </p>
            <img src={ image ? image : blogCoverImageThumbnail.src } alt="demo-cover" className='rounded-md' />

            <button 
              onClick={() => setIsUploadImageBoxVisible(!isUploadImageBoxVisible) }
              className='w-52 inline-block py-2 my-3 rounded-full bg-black text-white font-normal hover:cursor-pointer'> { image ? "Change Image Cover" : "Add Cover Image" }
            </button>

            {
              isUploadImageBoxVisible && (
                <div className='w-full  flex flex-col items-center bg-white rounded-md'>
                  <input 
                  type="text" 
                  placeholder='Enter Image URL'
                  onChange={(e) => {
                    const target = e.target as HTMLInputElement;
                    setImageUrlInput(target.value)
                  }}
                  className='w-[90%] px-2 py-2 bg-gray-100 my-3 rounded-lg border-none outline-none'
                  />

                  <div className='w-full flex justify-center items-center mb-3 space-x-2'>
                    <button onClick={() => {
                      setIsUploadImageBoxVisible(false)
                      setImage(imageUrlInput)
                    }} 
                    className='bg-green-600 text-white px-6 py-1 rounded-full'
                    > {image ? "Replace" : "Add"} </button>

                    <button 
                    className='border-green-600 border-2  text-green-600 px-6 py-1 rounded-full'
                    onClick={() => setIsUploadImageBoxVisible(false)} > Close </button>
                  </div>
                </div>
              )
            }

            <div className='w-[90%] h-auto bg-white py-2 flex flex-col items-center justify-start'>
              <input 
                placeholder='Blog Title' 
                type="text" 
                value={title}
                onChange={e => setTitle(e.target.value)}
                className="w-[95%] px-2 py-2 bg-gray-100 text-black rounded-lg outline-none font-medium border-solid border-b-4 border-b-gray-300 "
              />


              <textarea 
                placeholder='Write a preview subtitle' 
                className='w-[95%] h-32 bg-gray-100  outline-none border-solid font-normal border-b-4 border-b-gray-300 my-3 px-2 py-3 text-black ' 
                onChange={(e) => {
                  setPreviewSubtitle(e.target.value)
                }}
              /> 
            </div> 
        </div>


        <div className='w-[90%] h-auto px-3  my-3 bg-white py-2 flex flex-col items-start justify-center
        lg:w-[40%] lg:py-0 lg:my-0
        '>

            <p
            className='text-lg font-normal my-2 '
            > Publishing to: <span className='font-medium'> {session?.user?.name} </span> </p>

            <p
            className='text-sm pt-3 pb-3 '
            > Add categories so readers know what your story is about </p>

            <Box className="w-full my-3">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label"> Category </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category}
                  label="Category"
                  onChange={handleCategoryChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>


            <div className='bg-white w-full flex justify-center items-center space-x-3 px-3 py-8'>
              <button
              className="bg-green-600 text-white px-6 py-1 rounded-full cursor-pointer disabled:bg-green-300 disabled:hover:cursor-not-allowed "
              > Publish </button>

              <Link href={'/'}>
                <button
                className="bg-red-600 text-white px-6 py-1 rounded-full cursor-pointer disabled:bg-red-300 disabled:hover:cursor-not-allowed "
                > Discard </button>
              </Link>

            </div>
        </div>


    </main>
  )
}

export default AddFinalBlogDetails