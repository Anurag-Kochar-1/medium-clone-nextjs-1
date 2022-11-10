

export const deleteBlogById = async (blogId:string) => {
    // console.log(`deleteBlog.ts is funning`);
    
    // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_DEV}api/deleteBlog?blogId=${blogId}` , {
    //         method: "DELETE",
    //         headers: {
    //             'Content-type': 'application/json'
    //         }
    // } )

        
    // return res
    console.log('------------------------------- LOGGING FROM deleteBlogById Function');
    

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_PROD}api/deleteBlog?blogId=${blogId}`)

}

export default deleteBlogById