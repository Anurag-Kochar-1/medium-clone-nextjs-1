
export const fetchBlogsByTag = async ( searchQuery:string ) => {
        let tagName = 'Books'
        console.log('fetchBlogsByTag function ========= ' + searchQuery);
        
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_PROD}api/getBlogsByTag?tag=${tagName}` , {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
                        Authorization : `Bearer ${process.env.SANITY_API_TOKEN}`
		}
	})

        const  { blogsByTag } : any = await res.json()
        return blogsByTag


}