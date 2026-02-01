"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight, FaEye } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";

function Gallery() {
  return (
    <section className="bg-gray-50 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-16">
          {/* <p className="text-[#0f604d] font-bold text-sm tracking-widest uppercase mb-3">
        
          </p> */}
          <h2 className="text-3xl md:text-4xl font-bold">
            School <span className="text-[#0f604d]">Life</span>
          </h2>
        </div>

        {/* 🔥 BIG SLIDER */}
        <div className="relative">

          {/* Custom arrows */}
          <button className="gallery-prev absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-4 rounded-full shadow-lg hover:bg-[#0f604d] hover:text-white transition">
            <FaChevronLeft />
          </button>

          <button className="gallery-next absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-4 rounded-full shadow-lg hover:bg-[#0f604d] hover:text-white transition">
            <FaChevronRight />
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: ".gallery-next",
              prevEl: ".gallery-prev",
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop
            slidesPerView={1}   // ✅ ONE BIG IMAGE ONLY
            className="rounded-3xl overflow-hidden"
          >
            {[
            //   "/images/playing.png",
              "/images/tamil.png",
              "/images/study_material.png",
              "/images/students_gr1.png",
            ].map((img, i) => (
              <SwiperSlide key={i}>
                <div className="relative h-[300px] md:h-[500px] w-full group">

                  <img
                    src={img}
                    alt="School gallery"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#0f604d]/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <FaEye className="text-white text-4xl" />
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>
    </section>
  );
}

export default Gallery;
