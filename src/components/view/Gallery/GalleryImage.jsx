'use client'
import { useState } from 'react';
import Head from 'next/head';
import 'swiper/css';
import 'swiper/css/navigation';
// import galleryData from '../../data/gallery.json';
// import VideoSlider from '@/components/view/VideoSlider/VideoSlider';
import galleryData from '../../../data/gallery.json';

export default function GalleryImage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const categories = ['all', 'ac-service', 'battery', 'diagnostics', 'radiator', 'brakes', 'oil', 'tires', 'electrical'];

  const filteredImages = activeFilter === 'all'
    ? galleryData.gallery
    : galleryData.gallery.filter(item => item.category === activeFilter);

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Image Gallery Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
              Our <span className="text-emerald-500">Service Gallery</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by 1000+ customers in Dubai.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-5 px-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === category
                  ? 'bg-emerald-500 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'}`}
              >
                {category === 'all' ? 'All Services' : category.split('-').join(' ')}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {filteredImages.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="mt-1 text-gray-200">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}