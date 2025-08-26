
'use client'
import Head from 'next/head';
import { Calendar, User, Clock, ArrowRight, Share2, BookOpen } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { blogdata } from '@/data/blogdata';

// Reusable Blog Card Component
export const BlogCard = ({ blog }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const estimateReadTime = (content) => {
    const wordsPerMinute = 200;
    const words = content.split(' ').length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };

  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Date Badge */}
        <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
          {formatDate(blog.date)}
        </div>
        
        {/* Category/Tags */}
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 text-primary px-2 py-1 rounded text-xs font-medium">
            {blog.tags[0]}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
          <Link href={`/blog/${blog.slug}`}>
            {blog.title}
          </Link>
        </h2>

        {/* Excerpt */}
        <p className="text-gray-600 mb-4 line-clamp-3">
          {blog.excerpt}
        </p>

        {/* Meta Information */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{estimateReadTime(blog.content)}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <Link
            href={`/blog/${blog.slug}`}
            className="flex items-center gap-2 text-primary font-medium hover:text-green-700 transition-colors group/readmore"
          >
            Read More
            <ArrowRight className="h-4 w-4 transition-transform group-hover/readmore:translate-x-1" />
          </Link>
          
          <button className="p-2 text-gray-400 hover:text-primary transition-colors" aria-label="Share">
            <Share2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </article>
  );
};

// Blog Page Component
export default function BlogPage() {


  return (
    <>
      <Head>
        <title>Car Repair Blog – 24CarServiceDubai</title>
        <meta name="description" content="Expert car repair tips for Dubai drivers. Learn about AC, battery, engine, and more." />
        <meta name="keywords" content="car blog, dubai car service, ac repair, battery replacement" />
        <meta property="og:title" content="24CarServiceDubai Blog – Car Repair Guides" />
        <meta property="og:url" content="https://www.24carservicedubai.com/blog" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
        {/* Header Section */}
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <BookOpen className="h-4 w-4" />
              EXPERT GUIDES
            </div>
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl mb-4 bg-gradient-to-r from-gray-900 to-primary bg-clip-text text-transparent">
              Car Repair <span className="text-primary">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert tips and insights to keep your car running smoothly in Dubai's challenging climate
            </p>
          </div>

          {/* Featured Blog Carousel (Optional) */}
          {/* <div className="mb-16">
            <BlogCarousel />
          </div> */}

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogdata.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>

          {/* Categories Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'AC Repair', count: 12, color: 'bg-blue-100 text-blue-600' },
                { name: 'Battery', count: 8, color: 'bg-amber-100 text-amber-600' },
                { name: 'Engine', count: 15, color: 'bg-red-100 text-red-600' },
                { name: 'Maintenance', count: 20, color: 'bg-green-100 text-green-600' }
              ].map((category, index) => (
                <Link
                  key={index}
                  href={`/blog/category/${category.name.toLowerCase()}`}
                  className="p-4 rounded-xl hover:shadow-md transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mb-3`}>
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.count} articles</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter Subscription */}
          {/* <div className="bg-gradient-to-r from-primary to-green-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Updated with Car Care Tips</h2>
            <p className="text-white/80 mb-6">Get the latest maintenance tips and exclusive offers directly to your inbox</p>
            <div className="flex max-w-md mx-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}