export const likeBlogById = async (blogId:string) => {

        

    console.log('------------------------------- LOGGING FROM likeBlogById Function');
    

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_PROD}api/likeBlog?blogId=${blogId}`)

}

export default likeBlogById