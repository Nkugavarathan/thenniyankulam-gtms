"use client";

import React from "react";
import Link from "next/link";
// import { announcements } from "@/data/announcements";
import { FaArrowLeft, FaCalendarAlt, FaTag } from "react-icons/fa";
import { announcements } from "@/data/announcements";
export default function AnnouncementDetails({ params }) {
// const announcements = [
//   {
//     id: "tamil-day-2024",
//     title: "Tamil Day Celebrations",
//     date: "October 24, 2024",
//     category: "Events",
//     excerpt: "Join us for our annual Tamil Day celebrations featuring cultural performances...",
//     content: "Full details about the Tamil Day celebrations go here. We will have traditional dances, speech competitions, and drama performances starting from 8:30 AM in the school main hall.",
//     image: "/announcements/tamil-day.jpg"
//   },
//   {
//     id: "annual-medical-camp",
//     title: "Annual Medical Camp",
//     date: "November 02, 2024",
//     category: "Health",
//     excerpt: "A free health check-up for all students will be conducted by the Zonal Health Office...",
//     content: "The annual medical check-up is mandatory for all students from Grade 1 to 13. Please ensure students have had breakfast before arriving.",
//     image: "/announcements/medical.jpg"
//   },
//   // Add 2 more announcements here...
// ];
  const resolvedParams = React.use(params);
  const item = announcements.find((a) => a.id === resolvedParams.id);

  if (!item) {
    return <div className="py-40 text-center">Announcement not found.</div>;
  }

  return (
    <main className="min-h-screen bg-white pb-20">
      {/* Header */}
      <section className="bg-gray-50 pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-[#0f604d] font-bold flex items-center gap-2 mb-8 hover:gap-3 transition-all">
            <FaArrowLeft /> Back to Home
          </Link>
          <div className="inline-block px-4 py-1 bg-emerald-100 text-[#0f604d] rounded-full text-xs font-bold uppercase mb-4">
            {item.category}
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
            {item.title}
          </h1>
          <div className="flex gap-6 mt-6 text-gray-500 font-medium">
            <span className="flex items-center gap-2"><FaCalendarAlt /> {item.date}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="aspect-video w-full bg-gray-100 rounded-[3rem] mb-12 overflow-hidden shadow-2xl border border-gray-200">
          <img src={item.image} className="w-full h-full object-cover" />
          
        </div>
        
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p className="text-xl font-medium text-gray-900 mb-6">{item.excerpt}</p>
          <p>{item.content}</p>
        </div>
      </section>
    </main>
  );
}