"use client"
import React from 'react';
// Importing specific icons from Font Awesome 6 and Material Design
import { 
  FaBookOpen, 
  FaFlask, 
  FaLaptopCode, 
  FaTrophi, 
  FaSchool, 
  FaUsers,
  FaAward,
  FaLeaf,
  FaStar,
  FaEye,
  FaBullseye
} from 'react-icons/fa';
import { MdOutlineSportsSoccer, MdHistoryEdu } from 'react-icons/md';
import { TypewriterText } from '@/components/TypeWritter';
import { Counter } from '@/components/Counter';
export default function AboutPage() {
  
  // const facilities = [
  //   { title: "Modern Library", icon: <FaBookOpen size={24} /> },
  //   { title: "Science Laboratory", icon: <FaFlask size={24} /> },
  //   { title: "Computer Lab", icon: <FaLaptopCode size={24} /> },
  //   { title: "Sports Facilities", icon: <MdOutlineSportsSoccer size={24} /> },
  //   { title: "Spacious Classrooms", icon: <FaSchool size={24} /> },
  //   { title: "Resource Center", icon: <FaUsers size={24} /> },
  // ];
const facilities = [
  {
    title: "Modern Library",
    icon: <FaBookOpen size={24} />,
    facility:
      "A well-stocked library with textbooks, storybooks, and reference materials to encourage reading and self-learning.",
  },
  {
    title: "Science Laboratory",
    icon: <FaFlask size={24} />,
    facility:
      "Fully equipped lab for Physics, Chemistry, and Biology practicals to help students learn through experiments.",
  },
  {
    title: "Computer Lab",
    icon: <FaLaptopCode size={24} />,
    facility:
      "Modern computers with internet access to develop digital skills, programming knowledge, and online research abilities.",
  },
  {
    title: "Sports & Playground",
    icon: <MdOutlineSportsSoccer size={24} />,
    facility:
      "Large playground for football, cricket, volleyball, and athletics to promote fitness and teamwork.",
  },
  {
    title: "Spacious Classrooms",
    icon: <FaSchool size={24} />,
    facility:
      "Clean, airy classrooms with comfortable seating and proper lighting for a better learning environment.",
  },
  {
    title: "Guidance & Support Center",
    icon: <FaUsers size={24} />,
    facility:
      "Dedicated teachers provide academic guidance, counseling, and personal support to help every student succeed.",
  },
];

  const achievements = [
    { title: "District Sports Champions", year: "2024", icon: <MdOutlineSportsSoccer /> },
    { title: "Academic Excellence Award", year: "2024", icon: <FaAward /> },
    { title: "Cultural Performance Award", year: "2024", icon: <FaStar /> },
    { title: "Environmental Initiative", year: "2024", icon: <FaLeaf /> },
  ];

  return (
    <main className="bg-white text-gray-800">
      
      {/* HERO SECTION */}
      <section className="bg-[#0f604d] py-20 md:py-32 px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block bg-white/20 px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm">
            About Us
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Shaping Futures,<br className="hidden md:block" /> Building Character
          </h1>
          <p className="text-emerald-50/80 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Discover our journey of educational excellence and commitment to
            nurturing the leaders of tomorrow.
          </p>
        </div>
      </section>

      {/* OUR RICH HERITAGE */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="flex flex-col items-center text-center">
          <div className="text-[#0f604d] mb-4 text-4xl">
            <MdHistoryEdu />
          </div>
          <p className="text-[#0f604d] font-bold text-sm tracking-[0.2em] uppercase mb-3">Our Story</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Our Rich Heritage</h2>
          
          <div className="grid md:grid-cols-1 gap-6 text-gray-600 leading-relaxed text-lg max-w-4xl">
            <p>
              Mu/Thenniyankulam Government Tamil Mixed School has been a cornerstone
              of education in the Thunukkai Division for many decades. Established
              to serve the educational needs of the local Tamil-speaking community,
              our school has nurtured generations to become responsible individuals.
            </p>
            <p>
              Today, we continue to build on this legacy, embracing modern teaching
              methods while preserving traditional values that make us a trusted
              institution for generations of families.
            </p>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#0f604d] font-bold text-sm tracking-widest uppercase mb-3">Our Purpose</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Vision & Mission</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Vision Card */}
            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-[#0f604d]">
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-[#0f604d] mb-6">
                <FaEye size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#0f604d] mb-4">Our Vision</h3>
              {/* <p className="text-gray-600 leading-relaxed"> */}
                  <TypewriterText
                    text={`To be a leading educational institution in the Northern Province, nurturing academically excellent, morally strong,and socially responsible citizens who contribute positively to society.`}
                    className="text-gray-600 leading-relaxed relative z-10 min-h-[80px]"
                  />
               
              {/* </p> */}
            </div>

            {/* Mission Card */}
            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-[#0f604d]">
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-[#0f604d] mb-6">
                <FaBullseye size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#0f604d] mb-4">Our Mission</h3>
              {/* <p className="text-gray-600 leading-relaxed"> */}
                <TypewriterText
                    text={`To provide comprehensive, quality education that develops critical thinking, creativity, leadership, and strong values while preparing students for lifelong learning and success.`}
                    className="text-gray-600 leading-relaxed relative z-10 min-h-[80px]"
                  />
               
              {/* </p> */}
            </div>
          </div>
        </div>
      </section>

      {/* FACILITIES GRID */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="text-center mb-16">
          {/* <p className="text-[#0f604d] font-bold text-sm tracking-widest uppercase mb-3">What We Offer</p> */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Facilities</h2>
          <p className="text-gray-500 text-lg">Modern infrastructure designed to support comprehensive learning</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((item, i) => (
            <div key={i} className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-[#0f604d]/20 hover:bg-emerald-50/20 transition-all">
              <div className="text-[#0f604d] mb-5 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="font-bold text-xl text-gray-900 mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.facility}
                {/* High quality environment to support student growth and learning through state-of-the-art resources. */}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* DEDICATED EDUCATORS - STATS */}
      {/* <section className="bg-[#0f604d] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { val: "45+", label: "Dedicated Faculty" },
              { val: "15+", label: "Subject Specialists" },
              { val: "20+", label: "Support Staff" }
            ].map((stat, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md rounded-2xl p-10 text-center border border-white/20">
                <h3 className="text-5xl font-extrabold text-white mb-2">{stat.val}</h3>
                <p className="text-emerald-100 font-medium uppercase tracking-widest text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
{/* 
<section className="bg-[#0f604d] py-16 md:py-24">
  <div className="max-w-6xl mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      {[
        { value: 35, suffix: "+", label: "Teachers" },
        { value: 850, suffix: "+", label: "Students" },
        { value: 25, suffix: "+", label: "Years of Service" }
      ].map((stat, i) => (
        <div
          key={i}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-10 text-center border border-white/20"
        >
          <h3 className="text-5xl font-extrabold text-white mb-2">
            <Counter value={stat.value} suffix={stat.suffix} />
          </h3>

          <p className="text-emerald-100 font-medium uppercase tracking-widest text-xs">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  </div>
</section> */}

      {/* ACHIEVEMENTS */}
      <section className="max-w-4xl mx-auto px-6 py-20 md:py-28">
        <div className="text-center mb-16">
          <p className="text-[#0f604d] font-bold text-sm tracking-widest uppercase mb-3">Pride of Our School</p>
          <h2 className="text-3xl md:text-4xl font-bold">Achievements & Recognition</h2>
        </div>

        <div className="space-y-4">
          {achievements.map((item, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-5">
                <div className="text-[#0f604d] text-2xl">
                  {item.icon}
                </div>
                <span className="text-gray-800 font-bold text-lg">{item.item || item.title}</span>
              </div>
              <span className="bg-[#0f604d] text-white px-4 py-1 rounded-full text-sm font-bold shadow-sm">
                {item.year}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#0f604d] font-bold text-sm tracking-widest uppercase mb-3">School Life</p>
            <h2 className="text-3xl md:text-4xl font-bold">Photo Gallery</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="aspect-square bg-gray-200 rounded-3xl overflow-hidden relative group cursor-pointer border-4 border-white shadow-sm">
                <div className="absolute inset-0 bg-[#0f604d]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <FaEye className="text-white text-3xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

