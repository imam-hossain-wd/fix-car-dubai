

// import { blogdata } from '@/data/blogdata';
// import BlogDetailPage from '@/pages/BlogPage/BlogDetailPage'

// export default async function blogDetail({ params }) {

//     const { slug } = await params;
//     if (!slug) {
//         return notFound()
//     }
//     const blog = blogdata.find(
//         (s) => s.slug === slug
//     )

//     if (!blog) {
//         return notFound()
//     }
//     return <BlogDetailPage blog={blog} />
// }



import { blogdata } from '@/data/blogdata'
import BlogDetailPage from '@/pages/BlogPage/BlogDetailPage'
import { notFound } from 'next/navigation'

// ✅ Generate metadata dynamically
export async function generateMetadata({ params }) {
    const { slug } = await params
    const blog = blogdata.find((s) => s.slug === slug)

    if (!blog) {
        return {
            title: "Blog Not Found | 24CarServiceDubai",
            description: "The blog you are looking for does not exist.",
        }
    }

    return {
        title: blog.meta_title || blog.title,
        description: blog.meta_description || blog.excerpt,
        alternates: {
            canonical: `https://fixcardubai.com/dubai/blog/${blog.slug}`,
        },
        openGraph: {
            title: blog.meta_title || blog.title,
            description: blog.meta_description || blog.excerpt,
            url: `https://fixcardubai.com/dubai/blog/${blog.slug}`,
            type: "article",
            publishedTime: blog.date,
            authors: [blog.author],
            images: [
                {
                    url: blog.image,
                    width: 1200,
                    height: 630,
                    alt: blog.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: blog.meta_title || blog.title,
            description: blog.meta_description || blog.excerpt,
            images: [blog.image],
        },
    }
}

// ✅ Page component
export default async function BlogDetail({ params }) {
    const { slug } = await params
    const blog = blogdata.find((s) => s.slug === slug)

    if (!blog) {
        return notFound()
    }

    return <BlogDetailPage blog={blog} />
}

