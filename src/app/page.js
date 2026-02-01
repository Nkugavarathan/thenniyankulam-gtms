
"use client";

import React from 'react';
import Link from 'next/link';
// Premium Icons from Font Awesome 6 and Material Design
import { 
  FaGraduationCap, 
  FaArrowRight, 
  FaQuoteLeft, 
  FaBookReader, 
  FaChalkboardTeacher, 
  FaChild,
  FaRegCalendarAlt
} from 'react-icons/fa';
import { MdOutlineExplore, MdAssignment } from 'react-icons/md';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { TypewriterText } from '@/components/TypeWritter';
import Image from 'next/image';
import { Counter } from '@/components/Counter';
import PrincipalMessage from '@/components/PrincipalMessage';
export default function HomePage() {
  return (
    <main className="bg-white text-gray-800">
      
      {/* --- HERO SECTION: THE MAJESTIC ENTRANCE --- */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center scale-105 animate-slow-zoom"
          style={{ backgroundImage: "url('/school-campus.jpg')" }} // Replace with actual school image
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f604d]/80 via-[#0f604d]/60 to-[#0f604d]/90" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-8 animate-fade-in-down">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            <span className="text-xs font-bold tracking-[0.2em] uppercase">Established Excellence</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8 leading-[1.1]">
            Mu/Thenniyankulam <br />
            <span className="text-emerald-400">Govt Tamil Mixed School</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-emerald-50/90 max-w-3xl mx-auto font-light leading-relaxed mb-12">
            Nurturing young minds, shaping every character, and empowering 
            future leaders in the heart of Thunukkai, Northern Province.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/about" className="group bg-white text-[#0f604d] px-10 py-5 rounded-2xl font-bold text-lg flex items-center gap-3 hover:bg-emerald-50 transition-all shadow-xl hover:shadow-emerald-900/40">
              Discover Our Story 
              <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link href="/contact" className="px-10 py-5 rounded-2xl font-bold text-lg border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all backdrop-blur-sm">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* --- WELCOME SECTION: THE QUOTE --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-emerald-50 rounded-full -z-10" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Welcome to Our <br />
              <span className="text-[#0f604d]">Learning Community</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              For decades, Mu/Thenniyankulam GTMS has been a beacon of educational 
              excellence in the Northern Province. We provide a nurturing environment 
              where tradition meets modern pedagogy.
            </p>
            {/* <div className="bg-emerald-50/50 p-8 rounded-[2.5rem] border-l-8 border-[#0f604d] relative">
              <FaQuoteLeft className="text-[#0f604d]/20 text-5xl absolute top-6 right-8" />
              <p className="text-xl font-medium text-gray-800 italic relative z-10">
                "Education is the most powerful weapon which you can use to change the world."
              </p>
              <p className="mt-4 font-bold text-[#0f604d]">— Nelson Mandela</p>
            </div> */}
            {/* <div className="bg-emerald-50/50 p-8 rounded-[2.5rem] border-l-8 border-[#0f604d] relative">
  <FaQuoteLeft className="text-[#0f604d]/20 text-5xl absolute top-6 right-8" />

  <TypewriterText
    text={`"Education is the most powerful weapon which you can use to change the world."`}
    className="text-xl font-medium text-gray-800 italic relative z-10 min-h-[80px]"
  />

  <p className="mt-4 font-bold text-[#0f604d]">
    — Nelson Mandela
  </p>
</div> */}


<div className="bg-emerald-50/50 p-8 rounded-[2.5rem] border-l-8 border-[#0f604d] relative">

  <FaQuoteLeft className="text-[#0f604d]/20 text-5xl absolute top-6 right-8" />

  <div className="flex items-center gap-6">

    {/* Circle Image */}
    <div className="relative w-24 h-24 shrink-0">
      <Image
        src="/images/mandela.webp"   
        alt="Nelson Mandela"
        fill
        className="rounded-full object-cover border-4 border-white shadow-lg"
      />
    </div>

    {/* Quote text */}
    <div className="flex-1">
      <TypewriterText
        text={`"Education is the most powerful weapon which you can use to change the world."`}
        className="text-xl font-medium text-gray-800 italic min-h-[80px]"
      />

      <p className="mt-4 font-bold text-[#0f604d]">
        — Nelson Mandela
      </p>
    </div>

  </div>
</div>

          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <div className="h-64 bg-gray-200 rounded-3xl overflow-hidden shadow-lg">
                <div className="w-full h-full bg-[#0f604d]/10 flex items-center justify-center"><FaChild size={40} className="text-[#0f604d]"/></div>
              </div>
              <div className="h-80 bg-gray-200 rounded-3xl overflow-hidden shadow-lg">
                 <div className="w-full h-full bg-[#0f604d]/10 flex items-center justify-center"><FaBookReader size={40} className="text-[#0f604d]"/></div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="h-80 bg-gray-200 rounded-3xl overflow-hidden shadow-lg">
                <div className="w-full h-full bg-[#0f604d]/10 flex items-center justify-center"><FaGraduationCap size={40} className="text-[#0f604d]"/></div>
              </div>
              <div className="h-64 bg-gray-200 rounded-3xl overflow-hidden shadow-lg">
                <div className="w-full h-full bg-[#0f604d]/10 flex items-center justify-center"><FaChalkboardTeacher size={40} className="text-[#0f604d]"/></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- STATS SECTION: AT A GLANCE --- */}
      {/* <section className="bg-[#0f604d] py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-emerald-400 font-bold tracking-[0.3em] uppercase text-sm">Our Impact</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-4">School at a Glance</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <FaChalkboardTeacher size={32} />, val: "45+", label: "Expert Teachers" },
              { icon: <FaChild size={32} />, val: "800+", label: "Students" },
              { icon: <HiOutlineLightBulb size={32} />, val: "1-13", label: "Grades Covered" },
              { icon: <MdOutlineExplore size={32} />, val: "20+", label: "Extracurriculars" },
            ].map((stat, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-xl p-10 rounded-[2rem] border border-white/10 text-center group hover:bg-white hover:scale-105 transition-all duration-500">
                <div className="text-emerald-400 group-hover:text-[#0f604d] mb-6 flex justify-center transition-colors">
                  {stat.icon}
                </div>
                <h3 className="text-5xl font-black text-white group-hover:text-[#0f604d] mb-2 transition-colors">{stat.val}</h3>
                <p className="text-emerald-100/60 group-hover:text-gray-500 font-bold uppercase tracking-widest text-xs transition-colors">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
<section className="bg-[#0f604d] py-24 relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 relative z-10">

    <div className="text-center mb-16">
      <span className="text-emerald-400 font-bold tracking-[0.3em] uppercase text-sm">
        Our Impact
      </span>
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-4">
        School at a Glance
      </h2>
    </div>

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          icon: <FaChalkboardTeacher size={32} />,
          value: 45,
          suffix: "+",
          label: " Teachers",
        },
        {
          icon: <FaChild size={32} />,
          value: 800,
          suffix: "+",
          label: "Students",
        },
        {
          icon: <HiOutlineLightBulb size={32} />,
          value: 11,
          suffix: "",
          label: "Grades Covered",
        },
        {
          icon: <MdOutlineExplore size={32} />,
          value: 20,
          suffix: "+",
          label: "Years of Service",
        },
      ].map((stat, i) => (
        <div
          key={i}
          className="bg-white/10 backdrop-blur-xl p-10 rounded-[2rem] border border-white/10 text-center group hover:bg-white hover:scale-105 transition-all duration-500"
        >
          {/* Icon */}
          <div className="text-emerald-400 group-hover:text-[#0f604d] mb-6 flex justify-center transition-colors">
            {stat.icon}
          </div>

          {/* 🔥 Animated Counter */}
          <h3 className="text-5xl font-black text-white group-hover:text-[#0f604d] mb-2 transition-colors">
            <Counter value={stat.value} suffix={stat.suffix} duration={2} />
          </h3>

          <p className="text-emerald-100/60 group-hover:text-gray-500 font-bold uppercase tracking-widest text-xs transition-colors">
            {stat.label}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>

<PrincipalMessage/>

      {/* --- ANNOUNCEMENTS: LATEST NEWS --- */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-[#0f604d] font-bold tracking-widest uppercase text-sm">Stay Updated</span>
              <h2 className="text-4xl font-extrabold text-gray-900 mt-4">Latest Announcements</h2>
            </div>
            <button className="flex items-center gap-2 text-[#0f604d] font-bold hover:underline">
              View All Updates <FaArrowRight size={14} />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Tamil New Year Celebrations", date: "April 14, 2026", type: "Cultural" },
              { title: "Annual Sports Meet Registration", date: "March 20, 2026", type: "Sports" },
              { title: "Parent-Teacher Conference", date: "March 25, 2026", type: "Academic" },
            ].map((news, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] shadow-xl shadow-gray-200/50 group cursor-pointer border border-transparent hover:border-[#0f604d]/20 transition-all">
                <div className="bg-emerald-50 text-[#0f604d] px-4 py-1 rounded-full text-xs font-bold inline-block mb-6 uppercase tracking-wider">
                  {news.type}
                </div>
                <h4 className="text-xl font-bold mb-4 group-hover:text-[#0f604d] transition-colors">{news.title}</h4>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <FaRegCalendarAlt />
                  {news.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- RESOURCES CTA --- */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="bg-[#0f604d] rounded-[3rem] p-12 md:p-24 relative overflow-hidden text-center">
          {/* Decorative Rings */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-400/10 rounded-full -ml-32 -mb-32 blur-3xl" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8">Study Materials & Resources</h2>
            <p className="text-emerald-50/80 text-lg mb-12 font-light">
              Access our comprehensive library of digital resources, past papers, 
              and educational guides to support your learning journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-400 text-[#0f604d] px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white transition-all shadow-lg">
                <MdAssignment size={20} /> Access Library
              </button>
              <button className="bg-white/10 text-white border border-white/20 backdrop-blur-md px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white/20 transition-all">
                View Past Papers
              </button>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}