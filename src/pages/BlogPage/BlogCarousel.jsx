'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import blogData from '../../data/blogData'

export default function BlogCarousel (){
  return (
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
      {blogData.blogs.map((blog) => (
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
    </Swiper>
  );
}

