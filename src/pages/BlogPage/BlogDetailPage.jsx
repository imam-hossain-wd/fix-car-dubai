
'use client'


import React from 'react';
import { Calendar, User, Clock, Share2, ArrowLeft, Tag, ChevronRight, Bookmark, Eye, ThumbsUp, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export default function BlogDetailPage({ blog }) {
  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog Not Found</h1>
          <Link href="/blog">
            <Button className="rounded-full">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blogs
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Calculate reading time (approx 200 words per minute)
  const readingTime = Math.ceil(blog.content.split(' ').length / 200);

  const shareBlog = async () => {
    const shareData = {
      title: blog.title,
      text: blog.excerpt,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Blog link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/dubai/blog"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Back to Blogs
            </Link>
            
            <div className="flex items-center gap-4">
              <button
                onClick={shareBlog}
                className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
              >
                <Share2 className="w-5 h-5" />
                Share
              </button>
              <button className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
                <Bookmark className="w-5 h-5" />
                Save
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Blog Header */}
      <article className="container mx-auto px-4 max-w-4xl py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/dubai/blog" className="hover:text-primary transition-colors">Blog</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-primary font-medium">{blog.title}</span>
        </div>

        {/* Featured Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-8 group">
          <Image
            src={blog.image}
            alt={blog.title}
            width={1200}
            height={600}
            className="w-full h-64 md:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          
          {/* Floating Badges */}
          <div className="absolute top-6 left-6">
            <Badge className="bg-primary text-white px-3 py-1 rounded-full text-sm">
              Featured
            </Badge>
          </div>
        </div>

        {/* Blog Meta Information */}
        <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            <span>{new Date(blog.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-primary" />
            <span>{blog.author}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" />
            <span>{readingTime} min read</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Eye className="w-5 h-5 text-primary" />
            <span>1.2k views</span>
          </div>
        </div>

        {/* Blog Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
          {blog.title}
        </h1>

        {/* Excerpt */}
        <p className="text-xl text-gray-600 leading-relaxed mb-8 border-l-4 border-primary pl-6 py-2 bg-primary/5 rounded-r-lg">
          {blog.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mb-8">
          {blog.tags.map((tag, index) => (
            <Badge 
              key={index} 
              variant="outline" 
              className="flex items-center gap-2 px-3 py-1 rounded-full border-primary/20 text-primary hover:bg-primary/10 transition-colors cursor-pointer"
            >
              <Tag className="w-3 h-3" />
              {tag}
            </Badge>
          ))}
        </div>

        <Separator className="my-8" />

        {/* Blog Content */}
        <div className="prose prose-lg max-w-none">
          <div 
            className="text-gray-700 leading-relaxed text-lg"
            dangerouslySetInnerHTML={{ 
              __html: blog.content.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900 font-semibold">$1</strong>') 
            }} 
          />
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-primary to-green-600 rounded-2xl p-8 text-white my-12 shadow-2xl">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Need Professional Car Service in Dubai?
            </h3>
            <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
              Our expert mechanics are ready to help you with all your car service needs. 
              Book now and get 10% off your first service!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-8 font-semibold text-lg"
                asChild
              >
                <Link href="tel:+971568703512">
                  Call Now: +971 56 870 3512
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-gray-900 rounded-full px-8 font-semibold text-lg"
                asChild
              >
                <Link href="/services">
                  View Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Blog Actions */}
        <div className="flex flex-wrap justify-between items-center gap-4 py-6 border-t border-gray-200">
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
              <ThumbsUp className="w-5 h-5" />
              <span>Like (42)</span>
            </button>
            <button className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
              <MessageCircle className="w-5 h-5" />
              <span>Comment (8)</span>
            </button>
          </div>
          
          <div className="flex items-center gap-4">
            <button
              onClick={shareBlog}
              className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
            >
              <Share2 className="w-5 h-5" />
              Share Article
            </button>
          </div>
        </div>

        {/* Author Bio */}
        <div className="bg-gray-50 rounded-2xl p-6 my-8 border border-gray-200">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
              {blog.author.charAt(0)}
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{blog.author}</h4>
              <p className="text-gray-600 mb-3">
                Certified Automotive Expert with over 10 years of experience in car repair and maintenance. 
                Passionate about helping Dubai residents keep their vehicles in perfect condition.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>15+ Articles</span>
                <span>•</span>
                <span>Auto Service Expert</span>
                <span>•</span>
                <span>Dubai, UAE</span>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Blogs Section */}
      <section className="border-t border-gray-200 bg-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              You Might Also Like
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover more helpful articles about car maintenance and repair in Dubai
            </p>
          </div>

          {/* Related blogs grid would go here */}
          <div className="text-center">
            <Link href="/blog">
              <Button size="lg" className="rounded-full px-8">
                View All Blog Posts
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .prose strong {
          color: #1f2937;
          font-weight: 600;
        }
        
        .prose p {
          margin-bottom: 1.5em;
          line-height: 1.8;
        }
        
        .prose ul, .prose ol {
          margin-bottom: 1.5em;
          padding-left: 1.5em;
        }
        
        .prose li {
          margin-bottom: 0.5em;
          line-height: 1.7;
        }
      `}</style>
    </div>
  );
}