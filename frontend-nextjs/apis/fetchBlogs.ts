
export const fetchBlogs = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_DEV}/api/getBlogs`)
    const data = await res.json()
    const blogs:any = data.blogs

    console.log("fetchBlogs function is running from fetchBlogs.ts");
    return blogs

}