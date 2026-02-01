"use client";

import { motion } from "framer-motion";
import { FaBookOpen, FaFlask, FaLaptopCode, FaSchool, FaUsers } from "react-icons/fa";
import { MdOutlineSportsSoccer } from "react-icons/md";

export default function FeatureSection() {
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
  // Stagger container
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Floating icon
  const floatAnimation = {
    y: [0, -8, 0, 8],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 md:py-28 overflow-hidden">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#08173b]">
          Our <span className="text-[#0f604d]">Facilities</span>
        </h2>
        <p className="text-gray-500 text-lg">
          Modern infrastructure designed to support comprehensive learning
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {facilities.map((item, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            className="group relative bg-white rounded-3xl p-8 border border-gray-100 
                       hover:border-[#0f604d]/30 transition-all cursor-pointer"
          >
            {/* Hover glow background */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <div
                className="absolute -bottom-20 -right-20 w-48 h-48 bg-gradient-to-br 
                           from-[#0f604d] to-emerald-400 rounded-full opacity-10
                           transition-transform duration-700 ease-in-out
                           group-hover:scale-[6] group-hover:opacity-100"
              />
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Icon */}
             <motion.div
  animate={floatAnimation}
  className="
    w-16 h-16 mb-5 rounded-2xl flex items-center justify-center text-2xl
    bg-[#0f604d] text-white
    shadow-lg
    transition-all duration-500 ease-out
    group-hover:bg-white group-hover:text-[#0f604d]
    group-hover:scale-110
  "
>
  {item.icon}
</motion.div>


              {/* Title */}
              <h4 className="font-bold text-xl mb-3 text-gray-900 
                             transition-colors duration-500 group-hover:text-white">
                {item.title}
              </h4>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed
                            transition-colors duration-500 group-hover:text-white/90">
                {item.facility}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
