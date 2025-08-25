




'use client'
import Head from 'next/head';
import BlogCarousel from './BlogCarousel';


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

      <div className="min-h-screen bg-gray-50 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Car Repair <span className="text-primary">Blog</span>
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Expert tips to keep your car running smoothly in Dubai’s heat.
            </p>
          </div>

          <div className='w-[90%] mx-auto'>
            <BlogCarousel />
          </div>
        </div>
      </div>
    </>
  );
}

