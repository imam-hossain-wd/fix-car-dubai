
'use client'
import Head from 'next/head';
import { Calendar, User, Clock, ArrowRight, Share2, BookOpen, Snowflake, Battery, Settings, Wrench, 
  Disc, Droplet, Circle, Zap  } from 'lucide-react';

import Link from 'next/link';
import Image from 'next/image';
import { blogdata } from '@/data/blogdata';
import Breadcrumb from '@/components/ui/shared/BreadCrumb/BreadCrumb';
import { CategoryCard } from '@/components/view/Card/CategoryCard';

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

   const categories = [
    {
      name: 'AC Repair',
      slug: 'ac-repair',
      count: 12,
      gradient: 'bg-gradient-to-r from-blue-500 to-cyan-400',
      icon: Snowflake // You'll need to import this icon
    },
    {
      name: 'Battery',
      slug: 'battery',
      count: 8,
      gradient: 'bg-gradient-to-r from-amber-500 to-yellow-400',
      icon: Battery // You'll need to import this icon
    },
    {
      name: 'Engine',
      slug: 'engine',
      count: 15,
      gradient: 'bg-gradient-to-r from-red-500 to-orange-400',
      icon: Settings // You'll need to import this icon
    },
    {
      name: 'Maintenance',
      slug: 'maintenance',
      count: 20,
      gradient: 'bg-gradient-to-r from-green-500 to-emerald-400',
      icon: Wrench // You'll need to import this icon
    },
    {
      name: 'Brakes',
      slug: 'brakes',
      count: 9,
      gradient: 'bg-gradient-to-r from-purple-500 to-fuchsia-400',
      icon: Disc // You'll need to import this icon
    },
    {
      name: 'Oil Change',
      slug: 'oil-change',
      count: 7,
      gradient: 'bg-gradient-to-r from-rose-500 to-pink-400',
      icon: Droplet // You'll need to import this icon
    },
    {
      name: 'Tires',
      slug: 'tires',
      count: 11,
      gradient: 'bg-gradient-to-r from-indigo-500 to-blue-400',
      icon: Circle // You'll need to import this icon
    },
    {
      name: 'Electrical',
      slug: 'electrical',
      count: 6,
      gradient: 'bg-gradient-to-r from-yellow-500 to-amber-400',
      icon: Zap // You'll need to import this icon
    }
  ];



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
          <Link href={`/dubai/blog/${blog.slug}`}>
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
            href={`/dubai/blog/${blog.slug}`}
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



  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' }
  ]


  return (
    <>
      <Head>
        <title>Car Repair Blog – 24CarServiceDubai</title>
        <meta name="description" content="Expert car repair tips for Dubai drivers. Learn about AC, battery, engine, and more." />
        <meta name="keywords" content="car blog, dubai car service, ac repair, battery replacement" />
        <meta property="og:title" content="24CarServiceDubai Blog – Car Repair Guides" />
        <meta property="og:url" content="https://www.24carservicedubai.com/blog" />
      </Head>

      <div className="px-4 mx-auto bg-secondary/90 border-b">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <div className="text-center py-10 mb-10 bg-amber-50">
        <div className="inline-flex items-center justify-center mb-4">
          <div className="w-12 h-0.5 bg-amber-400 mr-4"></div>
          <span className="text-amber-600 font-semibold uppercase tracking-wider text-sm">EXPERT GUIDES</span>
          <div className="w-12 h-0.5 bg-amber-400 ml-4"></div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Fix Car Dubai Blog</h1>
        <p className="text-md md:text-lg text-gray-600 max-w-2xl mx-auto">
          Stay updated with professional car repair tips, maintenance hacks, and expert guidance designed for Dubai drivers.
        </p>
      </div>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">



        <div className="container mx-auto px-4">

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogdata.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary to-green-600 rounded-2xl p-6 sm:p-8 text-white text-center">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              Stay Updated with Car Care Tips
            </h2>
            <p className="text-white/80 mb-5 sm:mb-6 text-sm sm:text-base">
              Get the latest maintenance tips and exclusive offers directly to your inbox
            </p>

            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white text-sm sm:text-base"
              />
              <button className="bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors text-sm sm:text-base">
                Subscribe
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}