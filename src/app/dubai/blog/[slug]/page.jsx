

import { blogdata } from '@/data/blogdata';
import BlogDetailPage from '@/pages/BlogPage/BlogDetailPage'

export default async function blogDetail({ params }) {

    const { slug } = await params;
    if (!slug) {
        return notFound()
    }
    const blog = blogdata.find(
        (s) => s.slug === slug
    )

    if (!blog) {
        return notFound()
    }
    return <BlogDetailPage blog={blog} />
}


