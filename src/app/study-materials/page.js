"use client";

import Link from "next/link";
import { FaGraduationCap, FaChevronRight } from "react-icons/fa";

export default function StudyMaterials() {
  // Government schools often go from Grade 1 to 13 (A/L)
  const grades = Array.from({ length: 11 }, (_, i) => i + 1);

  return (
    <main className="bg-gray-50  min-h-screen pb-20">
      {/* HEADER SECTION */}
     <section
  className="
    relative
    bg-[#0f604d]
    pt-32 pb-20 px-6
    text-center
    overflow-hidden
    bg-[url('/images/study_material.png')]
    bg-cover
    bg-center
    bg-no-repeat
  "
>
    <div className="absolute inset-0 bg-[#0f604d]/65 " />

        
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="bg-emerald-400/20 text-emerald-300 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
            Learning Resources
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mt-4 mb-6">
            Digital Library
          </h1>
          <p className="text-emerald-50/70 text-lg md:text-xl font-light max-w-2xl mx-auto">
            Access past papers, textbooks, and unit exams specifically curated 
            for the national curriculum.
          </p>
        </div>
      </section>

      {/* GRADE SELECTION GRID */}
      <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {grades.map((grade) => (
            <Link
              key={grade}
              href={`/study-materials/grade-${grade}`}
              className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:shadow-[#0f604d]/10 transition-all duration-300 border border-gray-100 flex flex-col items-center text-center hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-[#0f604d] mb-6 group-hover:bg-[#0f604d] group-hover:text-white transition-colors duration-300">
                <FaGraduationCap size={28} />
              </div>
              <h3 className="text-gray-500 uppercase tracking-widest text-xs font-bold mb-1">Year</h3>
              <span className="text-4xl font-black text-gray-900 group-hover:text-[#0f604d] transition-colors">
                Grade {grade}
              </span>
              <div className="mt-6 flex items-center gap-2 text-[#0f604d] font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Explore <FaChevronRight size={10} />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

// // FULL STUDY MATERIAL PAGE (NO COMPONENTS)

// import Link from "next/link";

// export default function StudyMaterials() {
//   const grades = Array.from({ length: 11 }, (_, i) => i + 1);

//   return (
//     <main className="bg-white min-h-screen">

//       {/* HERO */}
//       <section className="bg-primary text-white text-center py-24">
//         <h1 className="text-5xl font-bold">Study Materials</h1>
//         <p className="mt-4 text-gray-100">
//           Access learning resources for each grade
//         </p>
//       </section>


//       {/* GRADE GRID */}
//       <section className="max-w-6xl mx-auto px-6 py-24">

//         <h2 className="text-3xl font-bold text-center mb-14">
//           Select Your Grade
//         </h2>

//         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">

//           {grades.map((grade) => (
//             <Link
//               key={grade}
//               href={`/study-materials/grade-${grade}`}
//               className="
//                 bg-white
//                 rounded-xl
//                 shadow-md
//                 p-10
//                 text-center
//                 hover:shadow-xl
//                 hover:-translate-y-1
//                 transition
//               "
//             >
//               <h3 className="text-4xl font-bold text-primary">{grade}</h3>
//               <p className="text-gray-600 mt-2">Grade {grade}</p>
//             </Link>
//           ))}

//         </div>

//       </section>
//     </main>
//   );
// }
