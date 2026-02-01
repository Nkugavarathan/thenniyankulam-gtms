import Image from 'next/image';
import React from 'react';
import { FaQuoteLeft, FaGraduationCap } from "react-icons/fa";
import { motion } from 'framer-motion';

export default function PrincipalMessage() {
  return (<motion.section
  className="max-w-7xl mx-auto px-6 py-20 md:py-28"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true }}
>

    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative">
          
          {/* Decorative Background Element */}
          {/* <div className="absolute -top-12 -left-12 w-64 h-64 bg-[#0f604d]/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-emerald-50 rounded-full blur-3xl" /> */}

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Side: Image/Visual (Optional but recommended) */}
            <div className="lg:col-span-5">
              <div className="relative group">
                {/* The "Frame" */}
                {/* <div className="absolute inset-0 border-2 border-[#0f604d] rounded-[3rem] translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" /> */}
                
                {/* Placeholder for Principal's Photo */}
                <div className="aspect-[4/5] bg-gray-100 rounded-[3rem] overflow-hidden border border-gray-200 flex items-center justify-center">
                   <img src="/images/students.png" />
                   {/* <FaGraduationCap size={80} className="text-[#0f604d]/20" /> */}
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-50 max-w-[200px]">
                  <p className="text-[#0f604d] font-black text-xl italic leading-tight">
                    "Nurturing the leaders of tomorrow."
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side: Content */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 bg-emerald-50 text-[#0f604d] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
                <span className="w-2 h-2 bg-[#0f604d] rounded-full animate-pulse" />
                Principal's Message
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                Welcome to <span className="text-[#0f604d] italic">Mu/Thenniyankulam</span> GTMS
              </h2>

              <div className="relative">
                <FaQuoteLeft className="absolute top-6 right-0 text-gray-600 w-20 h-20 -z-10" />
                <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                  <p className="font-bold text-gray-800">
                    Dear Students, Parents, and Well-wishers,
                  </p>
                  <p>
                    It is with great pride and honor that I welcome you to Mu/Thenniyankulam 
                    Government Tamil Mixed School. Our institution has been serving the 
                    educational needs of our community for generations, and we remain 
                    committed to our mission of nurturing young minds.
                  </p>
                  <p>
                    We believe that every child has unique potential waiting to be discovered. 
                    Our dedicated team of educators works tirelessly to provide an environment 
                    that encourages curiosity, creativity, and critical thinking.
                  </p>
                </div>
              </div>

              {/* Signature Section */}
              <div className="pt-4 border-t border-gray-100 flex items-center gap-4">
                <div className="relative w-24 h-24 shrink-0">
                     <Image
                       src=""   
                       alt="Nelson Mandela"
                       fill
                       className="rounded-full object-cover border-4 border-white shadow-lg"
                     />
                   </div>
                <div>
                    <h3 className="text-xl font-black text-gray-900">S.Navaraththinarasasa</h3>
                  
                  <p className="text-[#0f604d] font-medium text-sm"> Principal</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
    </motion.section>

  );
}