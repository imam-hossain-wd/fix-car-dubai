'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { blogdata } from '@/data/blogdata';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';


export default function BlogCarousel() {
  return (
    <div className='w-[90%] mx-auto'>

      <div className="mx-auto text-center py-10 mb-10 bg-amber-50">
        <div className="inline-flex items-center justify-center mb-4">
          <div className="w-12 h-0.5 bg-amber-400 mr-4"></div>
          <span className="text-amber-600 font-semibold uppercase tracking-wider text-sm">EXPERT GUIDES</span>
          <div className="w-12 h-0.5 bg-amber-400 ml-4"></div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Car Care Tips for Dubai Drivers</h1>
        <p className="text-md md:text-lg text-gray-600 max-w-2xl mx-auto">
          Expert tips, guides, and insights to keep your car performing at its best in Dubai’s extreme climate.
        </p>
      </div>
      <Swiper

        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={30}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 3 },
        }}
      >
        <div >



          {blogdata.map((blog) => (
            <SwiperSlide key={blog.id}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full mb-3  mx-auto">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>{blog.date}</span>
                    <span className="mx-2">•</span>
                    <span>{blog.author}</span>
                  </div>
                  <h2 className="text-lg font-bold text-gray-800 mb-2 hover:text-primary transition-colors">
                    <a href={`/blog/${blog.slug}`}>{blog.title}</a>
                  </h2>

                  <a
                    href={`/blog/${blog.slug}`}
                    className="inline-block px-4 py-1 text-sm bg-primary text-white rounded-lg hover:bg-primary transition-colors"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>

      <div className="text-center mt-8">
        <Button size="lg" className="rounded-full gap-2 px-4" asChild>
          <Link href="/blog">
            View All Blog Tips
            <ArrowRight className="h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

