export interface Blog extends BlogBody {
    _id:  string
    _createdAt: string
    _updatedAt: string
    _rev: string
    _type: 'blog'
}


export type BlogBody = {
    username: unknown
    profileImg: unknown
    userEmail: unknown
    title: string
    coverImage: string
    body: string
    previewSubtitle : string
    category: string
    likeCount: number
}

export interface BlogArray {
    blogs: BlogBody[]
}