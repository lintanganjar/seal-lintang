"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import banner from "/public/img.svg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination } from 'swiper/modules';

// Custom CSS for styling
const styles = {
  swiperContainer: {
    paddingBottom: '80px', // Space between the last slide and pagination
  },
  pagination: {
    marginTop: '40px', // Space between the slides and pagination
    textAlign: 'center',
  }
};

export default function Banner() {
  return (
    <div className='mt-32 '>
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper m-8"
        style={styles.swiperContainer}
      >
        <SwiperSlide>
          <Image src={banner} width={1400} height={700} alt="Banner 1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner} width={1400} height={700} alt="Banner 2" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner} width={1400} height={700} alt="Banner 3" />
        </SwiperSlide>
      </Swiper>

      {/* Custom Pagination Styling */}
      <div className="swiper-pagination" style={styles.pagination}>
        {/* Pagination will be injected here by Swiper */}
      </div>
    </div>
  );
}
