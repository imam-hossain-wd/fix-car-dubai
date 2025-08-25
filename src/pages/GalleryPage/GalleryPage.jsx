'use client'
import { useState } from 'react';
import Head from 'next/head';
import 'swiper/css';
import 'swiper/css/navigation';
import galleryData from '../../data/gallery.json';
import GalleryImage from '@/components/view/Gallery/GalleryImage';

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const categories = ['all', 'ac-service', 'battery', 'diagnostics', 'radiator', 'brakes', 'oil', 'tires', 'electrical'];

  const filteredImages = activeFilter === 'all'
    ? galleryData.gallery
    : galleryData.gallery.filter(item => item.category === activeFilter);

  return (
    <>
      <Head>
        <title>{galleryData.seo.title}</title>
        <meta name="description" content={galleryData.seo.description} />
      </Head>
      <GalleryImage />
    </>
  );
}