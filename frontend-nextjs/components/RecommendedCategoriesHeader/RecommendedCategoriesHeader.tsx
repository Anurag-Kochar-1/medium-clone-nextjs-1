import React, {useEffect , useContext} from 'react'
import { fetchBlogsByTag } from '../../apis/fetchBlogsByTag'
import Link from 'next/link'
import { Categories  } from "../../constants/categories"
import { useRouter } from 'next/router'
import { profileContext } from '../../context/Context'

interface Props {
    fetchBlogsByTagFunction:(tagName: string) => Promise<any>
    searchQuery: string
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>
}

const RecommendedCategoriesHeader = ({fetchBlogsByTagFunction , searchQuery , setSearchQuery}:Props) => {
    const {setBlogs , blogs}:any = useContext(profileContext) 

        // const router = useRouter()
        // const {tag} = router.query
    
    // const fetchBlogsByTagFunction = async () => {
        
        
    //     const BlogsByTag:any = await fetchBlogsByTag( tag  as string   )
    //     console.log(`tagname is :${tag}`);
        
    //     console.log(BlogsByTag);
        
    //     setTimeout(() => {
    //         setBlogs(BlogsByTag)
    //     }, 2000);
    //     return BlogsByTag
    
    
    // }
    
      
    
    //   useEffect(() => {
    //     if(router.isReady) {
            
            
    //     }        
    
    // },[router.isReady])


  return (
    <div className='fixed w-[100%] h-[8vh] top-[10vh] px-5 py-1 flex justify-start items-center space-x-3 bg-red-300 border-b-2 border-b-gray-400 overflow-x-scroll overflow-y-hidden lg:top-0 lg:justify-start lg:pr-20  scrollbar-hide '>
        {
            Categories.map((category) => {
                return (
                    <Link href={`/?tag=${category}`} >
                        <p  onClick={ () => {
                            setSearchQuery(category)
                            console.log(`category is set to : ${category}`);
                            
                            setTimeout(() => {
                                fetchBlogsByTagFunction(category)
                            }, 100);
                        }} className="px-5 py-1 bg-black text-gray-400 rounded-full hover:cursor-pointer"> {category} </p>
                    </Link>
                )
            })
        }

        
    </div>
  )
}

export default RecommendedCategoriesHeader



