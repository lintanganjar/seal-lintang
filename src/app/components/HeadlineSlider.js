"use client"
import React, { useState, useEffect } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const HeadlineSliderComponent = ({ headline }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', options);
  };

  if (!headline || !headline.data || !headline.data.posts) {
    return <p>Data tidak tersedia</p>;
  }

  const [swiperRef, setSwiperRef] = useState(null);

  useEffect(() => {
    // Ensure Swiper navigation is updated after component mounts
    if (swiperRef) {
      swiperRef.update();
    }
  }, [swiperRef]);

  return (
    <>
      <div className="relative">
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        onSwiper={setSwiperRef}
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
          el: '.swiper-pagination',
        }}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        virtual
      >
        {headline.data.posts.map((post, index) => (
          <SwiperSlide key={index}>
            <div className='flex gap-40 mt-4'>
              <div className='flex-col w-[600px] '>
              <p className="text-gray-600 pb-1">Headline</p>
                <h2 className='font-bold text-4xl mt-4 landing-[48px]'>{post.title}</h2>
                <h2 className='mt-8'>{post.description}</h2> 
                <p className='mt-3'>{formatDate(post.pubDate)}</p>
                <div className='flex mt-4 items-center gap-2 text-blue-500'>
                  <a  href={post.link}>Baca Selengkapnya </a>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                  </svg>
                </div>
               
              </div>
              <div>
                <img src={post.thumbnail} alt={post.title} width={700} height={300} className='rounded-3xl'/>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="custom-navigation-container absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center space-x-2">
        <div className="swiper-button-prev cursor-pointer ">
         
        </div>
        <div className="swiper-pagination w-28 mx-2">
          {/* Pagination fraction will be injected here by Swiper */}
        </div>
        <div className="swiper-button-next cursor-pointer">
        
        </div>
      </div>
    </div>
    </>
   
  );
};

export default HeadlineSliderComponent;
