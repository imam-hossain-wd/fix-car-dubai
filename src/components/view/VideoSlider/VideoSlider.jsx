'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import videoData from '../../../data/videoesData.json';

export default function VideoSlider() {
    return (
        <div className=" w-[90%] mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
                Watch Our <span className="text-emerald-500">Services in Action</span>
            </h2>

            <div className="relative">
                <Swiper
                    modules={[Autoplay, Navigation]}
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        nextEl: '.video-swiper-next',
                        prevEl: '.video-swiper-prev',
                    }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="px-4 py-6"
                >
                    {videoData.videos.map((video) => {
                        // Extract YouTube video ID from URL
                        const getVideoId = (url) => {
                            const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
                            const match = url.match(regExp);
                            return (match && match[2].length === 11) ? match[2] : null;
                        };

                        const videoId = getVideoId(video.url);
                        const embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;

                        return (
                            <SwiperSlide key={video.id}>
                                <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
                                    <div className="relative pt-[56.25%]"> {/* 16:9 Aspect Ratio */}
                                        <iframe
                                            src={embedUrl}
                                            className="absolute top-0 left-0 w-full h-full"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            loading="lazy"
                                            title={video.title}
                                        ></iframe>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-bold text-lg">{video.title}</h3>
                                        <p className="text-gray-600 mt-1">{video.description}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>

                {/* Navigation arrows remain the same */}
                <button className="video-swiper-prev absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-white rounded-full w-10 h-10 shadow-lg flex items-center justify-center text-emerald-500 hover:bg-gray-100 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button className="video-swiper-next absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-white rounded-full w-10 h-10 shadow-lg flex items-center justify-center text-emerald-500 hover:bg-gray-100 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    )
}
