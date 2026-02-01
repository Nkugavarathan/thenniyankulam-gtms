"use client";

import React, { useState } from "react"; // Added useState
import Link from "next/link";
import { FaFilePdf, FaDownload, FaArrowLeft, FaSearch } from "react-icons/fa";

export default function GradePage({ params }) {
  const resolvedParams = React.use(params);
  const grade = resolvedParams.grade;
  const gradeDisplay = grade ? grade.replace("-", " ") : "";

  // 1. State for the search query
  const [searchQuery, setSearchQuery] = useState("");

  const inventory = {
    "grade-1": [
      { name: "Mathematics", fileName: "gr_1_maths.pdf", subject: "Maths", size: "20.9MB" },
     
    ],
    "grade-2": [
          { name: "Mathematics", fileName: "gr_2_maths.pdf", subject: "Maths", size: "13.08MB" },

    ],
       "grade-3": [
          { name: "Mathematics part 1", fileName: "gr_3_maths_p1.pdf", subject: "Maths", size: "13.08MB" },

    ],
       "grade-4": [
          { name: "Mathematics part 1", fileName: "gr_4_maths_c1.pdf", subject: "Maths", size: "13.45MB" },

    ],
       "grade-5": [
          { name: "Mathematics", fileName: "gr_5_maths.pdf", subject: "Maths", size: "8.9MB" },

    ],
       "grade-6": [
          { name: "Information Communication Technology", fileName: "gr_6_ict.pdf", subject: "ICT", size: "8.8MB" },

    ],
       "grade-7": [
          { name: "Saivanery", fileName: "gr_7_religion.pdf", subject: "Religion", size: "16.42MB" },

    ],
       "grade-8": [
          { name: "Information Communication Technology", fileName: "gr_8_ict_theory.pdf", subject: "ICT", size: "17.31MB" },

    ],
       "grade-9": [
               { name: "Information Communication Technology", fileName: "gr_9_ict.pdf", subject: "ICT", size: "25.17MB" },


    ],
       "grade-10": [
          { name: "Tamil Literature", fileName: "gr_10_11_tamil_literature.pdf", subject: "Tamil", size: "7.1MB" },

    ],
       "grade-11": [
          { name: "Health", fileName: "gr_11_health.pdf", subject: "Health", size: "4.3MB" },

    ]
  };

  const allFiles = inventory[grade] || [];

  // 2. Filter logic: Check if name or subject matches the search query
  const filteredFiles = allFiles.filter((file) =>
    file.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    file.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="bg-white min-h-screen pb-20">
      {/* HEADER SECTION */}
      <section className="bg-gray-50 border-b pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/study-materials"
            className="flex items-center gap-2 text-[#0f604d] font-bold hover:gap-3 transition-all mb-8"
          >
            <FaArrowLeft /> Back to Library
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 capitalize italic">
                {gradeDisplay}
              </h1>
              <p className="text-gray-500 mt-2 font-medium">
                Official study resources for {gradeDisplay}
              </p>
            </div>
            
            {/* SEARCH INPUT */}
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search by subject or name..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} // Update state on type
                className="pl-12 pr-6 py-3 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#0f604d]/20 w-full md:w-80 shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FILE LIST SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid gap-4">
          {/* Use filteredFiles instead of allFiles */}
          {filteredFiles.map((file, i) => (
            <div
              key={i}
              className="group bg-white border border-gray-500 p-6 rounded-[2rem] flex flex-col md:flex-row md:items-center justify-between hover:border-[#0f604d] hover:shadow-xl hover:shadow-[#0f604d]/5 transition-all"
            >
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-red-500 group-hover:text-white transition-colors">
                  <FaFilePdf size={24} />
                </div>
                
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#0f604d] bg-emerald-50 px-2 py-0.5 rounded">
                    {file.subject}
                  </span>
                  <h4 className="text-lg font-bold text-gray-800 mt-1">{file.name}</h4>
                  <p className="text-gray-400 text-xs font-medium uppercase tracking-tighter">
                    File Size: {file.size}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 mt-4 md:mt-0">
                <a
                  href={`/materials/${grade}/${file.fileName}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-bold text-sm hover:bg-gray-200 transition-colors"
                >
                  View
                </a>
                
                <a
                  href={`/materials/${grade}/${file.fileName}`}
                  download={file.fileName}
                  className="px-6 py-3 bg-[#0f604d] text-white rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-[#0c4d3e] transition-all shadow-lg shadow-[#0f604d]/20"
                >
                  <FaDownload size={14} /> Download
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Updated Empty State for Search */}
        {filteredFiles.length === 0 && (
          <div className="text-center py-24 bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-200">
            <div className="mb-4 flex justify-center text-gray-300">
                <FaSearch size={48} />
            </div>
            <h3 className="text-xl font-bold text-gray-900">No results found</h3>
            <p className="text-gray-400 mt-1">We couldn't find any materials matching "{searchQuery}"</p>
            <button 
              onClick={() => setSearchQuery("")}
              className="mt-6 text-[#0f604d] font-bold underline cursor-pointer"
            >
                Clear Search
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
// "use client";

// import React from "react"; // Added React
// import Link from "next/link";
// import { FaFilePdf, FaDownload, FaArrowLeft, FaSearch } from "react-icons/fa";

// export default function GradePage({ params }) {
//   // NEXT.JS 15 FIX: Unwrap params using React.use()
//   const resolvedParams = React.use(params);
//   const grade = resolvedParams.grade;
  
//   const gradeDisplay = grade ? grade.replace("-", " ") : "";

//   // 1. YOUR FILE DATABASE
//   const inventory = {
//     "grade-1": [
//       { 
//         name: "Mathematics Test 01", 
//         fileName: "test.pdf", 
//         subject: "Maths", 
//         size: "1.2 MB" 
//       },
//       { 
//         name: "Tamil Language Worksheet", 
//         fileName: "test.pdf", 
//         subject: "Tamil", 
//         size: "800 KB" 
//       },
//     // ],
//     // "grade-2": [
//     //   { 
//     //     name: "Science Activity Sheet", 
//     //     fileName: "science.pdf", 
//     //     subject: "Science", 
//     //     size: "1.5 MB" 
//     //   },
//     ],
//   };

//   // 2. GET FILES FOR THIS SPECIFIC GRADE
//   const files = inventory[grade] || [];

//   return (
//     <main className="bg-white min-h-screen pb-20">
//       {/* HEADER SECTION */}
//       <section className="bg-gray-50 border-b pt-32 pb-16 px-6">
//         <div className="max-w-5xl mx-auto">
//           <Link
//             href="/study-materials"
//             className="flex items-center gap-2 text-[#0f604d] font-bold hover:gap-3 transition-all mb-8"
//           >
//             <FaArrowLeft /> Back to Library
//           </Link>
          
//           <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
//             <div>
//               <h1 className="text-4xl md:text-5xl font-black text-gray-900 capitalize italic">
//                 {gradeDisplay}
//               </h1>
//               <p className="text-gray-500 mt-2 font-medium">
//                 Official study resources for {gradeDisplay}
//               </p>
//             </div>
            
//             <div className="relative">
//               <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
//               <input 
//                 type="text" 
//                 placeholder="Search materials..." 
//                 className="pl-12 pr-6 py-3 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#0f604d]/20 w-full md:w-80 shadow-sm"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FILE LIST SECTION */}
//       <section className="max-w-5xl mx-auto px-6 py-16">
//         <div className="grid gap-4">
//           {files.map((file, i) => (
//             <div
//               key={i}
//               className="group bg-white border border-gray-100 p-6 rounded-[2rem] flex flex-col md:flex-row md:items-center justify-between hover:border-[#0f604d] hover:shadow-xl hover:shadow-[#0f604d]/5 transition-all"
//             >
//               <div className="flex items-center gap-6">
//                 <div className="w-14 h-14 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-red-500 group-hover:text-white transition-colors">
//                   <FaFilePdf size={24} />
//                 </div>
                
//                 <div>
//                   <span className="text-[10px] font-bold uppercase tracking-widest text-[#0f604d] bg-emerald-50 px-2 py-0.5 rounded">
//                     {file.subject}
//                   </span>
//                   <h4 className="text-lg font-bold text-gray-800 mt-1">{file.name}</h4>
//                   <p className="text-gray-400 text-xs font-medium uppercase tracking-tighter">
//                     File Size: {file.size}
//                   </p>
//                 </div>
//               </div>

//               <div className="flex gap-3 mt-4 md:mt-0">
//                 <a
//                   href={`/materials/${grade}/${file.fileName}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-bold text-sm hover:bg-gray-200 transition-colors"
//                 >
//                   View
//                 </a>
                
//                 <a
//                   href={`/materials/${grade}/${file.fileName}`}
//                   download={file.fileName}
//                   className="px-6 py-3 bg-[#0f604d] text-white rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-[#0c4d3e] transition-all shadow-lg shadow-[#0f604d]/20"
//                 >
//                   <FaDownload size={14} /> Download
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>

//         {files.length === 0 && (
//           <div className="text-center py-24 bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-200">
//             <div className="mb-4 flex justify-center text-gray-300">
//                 <FaFilePdf size={48} />
//             </div>
//             <h3 className="text-xl font-bold text-gray-900">No Materials Yet</h3>
//             <p className="text-gray-400 mt-1">We are currently updating the resources for {gradeDisplay}.</p>
//             <Link href="/study-materials" className="mt-6 inline-block text-[#0f604d] font-bold underline">
//                 Check other grades
//             </Link>
//           </div>
//         )}
//       </section>
//     </main>
//   );
// }
// "use client";

// import Link from "next/link";
// import { FaFilePdf, FaDownload, FaArrowLeft, FaSearch } from "react-icons/fa";

// export default function GradePage({ params }) {
//   const { grade } = params; // e.g., "grade-1"
//   const gradeDisplay = grade.replace("-", " ");

//   // 1. YOUR FILE DATABASE
//   // Add your file names here exactly as they appear in your public folder
//   const inventory = {
//     "grade-1": [
//       { 
//         name: "Mathematics Test 01", 
//         fileName: "test.pdf", // Your file at public/materials/grade-1/test.pdf
//         subject: "Maths", 
//         size: "1.2 MB" 
//       }
//     //   { 
//     //     name: "Tamil Language Worksheet", 
//     //     fileName: "tamil-unit-1.pdf", 
//     //     subject: "Tamil", 
//     //     size: "800 KB" 
//     //   },
//     ],
//     // "grade-2": [
//     //   { 
//     //     name: "Science Activity Sheet", 
//     //     fileName: "science.pdf", 
//     //     subject: "Science", 
//     //     size: "1.5 MB" 
//     //   },],
//     // Add more grades as you get more files...
//   };

//   // 2. GET FILES FOR THIS SPECIFIC GRADE
//   const files = inventory[grade] || [];

//   return (
//     <main className="bg-white min-h-screen pb-20">
//       {/* HEADER SECTION */}
//       <section className="bg-gray-50 border-b pt-32 pb-16 px-6">
//         <div className="max-w-5xl mx-auto">
//           <Link
//             href="/study-materials"
//             className="flex items-center gap-2 text-[#0f604d] font-bold hover:gap-3 transition-all mb-8"
//           >
//             <FaArrowLeft /> Back to Library
//           </Link>
          
//           <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
//             <div>
//               <h1 className="text-4xl md:text-5xl font-black text-gray-900 capitalize italic">
//                 {gradeDisplay}
//               </h1>
//               <p className="text-gray-500 mt-2 font-medium">
//                 Official study resources for {gradeDisplay}
//               </p>
//             </div>
            
//             {/* Search Bar UI */}
//             <div className="relative">
//               <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
//               <input 
//                 type="text" 
//                 placeholder="Search materials..." 
//                 className="pl-12 pr-6 py-3 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#0f604d]/20 w-full md:w-80 shadow-sm"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FILE LIST SECTION */}
//       <section className="max-w-5xl mx-auto px-6 py-16">
//         <div className="grid gap-4">
//           {files.map((file, i) => (
//             <div
//               key={i}
//               className="group bg-white border border-gray-100 p-6 rounded-[2rem] flex flex-col md:flex-row md:items-center justify-between hover:border-[#0f604d] hover:shadow-xl hover:shadow-[#0f604d]/5 transition-all"
//             >
//               <div className="flex items-center gap-6">
//                 {/* PDF Icon */}
//                 <div className="w-14 h-14 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-red-500 group-hover:text-white transition-colors">
//                   <FaFilePdf size={24} />
//                 </div>
                
//                 {/* File Details */}
//                 <div>
//                   <span className="text-[10px] font-bold uppercase tracking-widest text-[#0f604d] bg-emerald-50 px-2 py-0.5 rounded">
//                     {file.subject}
//                   </span>
//                   <h4 className="text-lg font-bold text-gray-800 mt-1">{file.name}</h4>
//                   <p className="text-gray-400 text-xs font-medium uppercase tracking-tighter">
//                     File Size: {file.size}
//                   </p>
//                 </div>
//               </div>

//               {/* Action Buttons */}
//               <div className="flex gap-3 mt-4 md:mt-0">
//                 {/* View Button - Opens in new tab */}
//                 <a
//                   href={`/materials/${grade}/${file.fileName}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-bold text-sm hover:bg-gray-200 transition-colors"
//                 >
//                   View
//                 </a>
                
//                 {/* Download Button - Forces download */}
//                 <a
//                   href={`/materials/${grade}/${file.fileName}`}
//                   download={file.fileName}
//                   className="px-6 py-3 bg-[#0f604d] text-white rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-[#0c4d3e] transition-all shadow-lg shadow-[#0f604d]/20"
//                 >
//                   <FaDownload size={14} /> Download
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Empty State: If no files are found for this grade */}
//         {files.length === 0 && (
//           <div className="text-center py-24 bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-200">
//             <div className="mb-4 flex justify-center text-gray-300">
//                 <FaFilePdf size={48} />
//             </div>
//             <h3 className="text-xl font-bold text-gray-900">No Materials Yet</h3>
//             <p className="text-gray-400 mt-1">We are currently updating the resources for {gradeDisplay}.</p>
//             <Link href="/study-materials" className="mt-6 inline-block text-[#0f604d] font-bold underline">
//                 Check other grades
//             </Link>
//           </div>
//         )}
//       </section>
//     </main>
//   );
// }

// "use client";

// import Link from "next/link";
// import { FaFilePdf, FaDownload, FaArrowLeft, FaSearch } from "react-icons/fa";

// export default function GradePage({ params }) {
//   const { grade } = params;
//   const gradeDisplay = grade.replace("-", " ");

//   // In a real app, you might fetch this based on the 'grade' param
// // 1. Create an object that maps each grade to its specific files
//   const inventory = {
//     "grade-1": [
//       { name: "Mathematics Test 01", fileName: "maths-test.pdf", subject: "Maths" },
//       { name: "Tamil Alphabet Guide", fileName: "tamil-1.pdf", subject: "Tamil" },
//     ],
//     "grade-2": [
//       { name: "Science Activity Book", fileName: "science-act.pdf", subject: "Science" },
//     ],
//     // Add more grades as you upload files...
//   };

//   return (
//     <main className="bg-white min-h-screen pb-20">
//       {/* HEADER */}
//       <section className="bg-gray-50 border-b pt-32 pb-16 px-6">
//         <div className="max-w-5xl mx-auto">
//           <Link
//             href="/study-materials"
//             className="flex items-center gap-2 text-[#0f604d] font-bold hover:gap-3 transition-all mb-8"
//           >
//             <FaArrowLeft /> Back to Library
//           </Link>
//           <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
//             <div>
//               <h1 className="text-4xl md:text-5xl font-black text-gray-900 capitalize italic">
//                 {gradeDisplay}
//               </h1>
//               <p className="text-gray-500 mt-2 font-medium">Available materials for the 2026 Academic Year</p>
//             </div>
            
//             {/* Search Bar for Materials */}
//             <div className="relative">
//               <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
//               <input 
//                 type="text" 
//                 placeholder="Search materials..." 
//                 className="pl-12 pr-6 py-3 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#0f604d]/20 w-full md:w-80 shadow-sm"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FILE LIST */}
//       <section className="max-w-5xl mx-auto px-6 py-16">
//         <div className="grid gap-4">
//           {files.map((file, i) => (
//             <div
//               key={i}
//               className="group bg-white border border-gray-100 p-6 rounded-[2rem] flex flex-col md:flex-row md:items-center justify-between hover:border-[#0f604d] hover:shadow-xl hover:shadow-[#0f604d]/5 transition-all"
//             >
//               <div className="flex items-center gap-6">
//                 <div className="w-14 h-14 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-red-500 group-hover:text-white transition-colors">
//                   <FaFilePdf size={24} />
//                 </div>
//                 <div>
//                   <span className="text-[10px] font-bold uppercase tracking-widest text-[#0f604d] bg-emerald-50 px-2 py-0.5 rounded">
//                     {file.subject}
//                   </span>
//                   <h4 className="text-lg font-bold text-gray-800 mt-1">{file.name}</h4>
//                   <p className="text-gray-400 text-xs font-medium uppercase tracking-tighter">Size: {file.size}</p>
//                 </div>
//               </div>

//               <div className="flex gap-3 mt-4 md:mt-0">
//                 {/* View Button */}
//                 <a
//                   href={`/materials/${grade}/${file.name.toLowerCase().replace(/ /g, "_")}.pdf`}
//                   target="_blank"
//                   className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-bold text-sm hover:bg-gray-200 transition-colors"
//                 >
//                   View
//                 </a>
//                 {/* Download Button */}
//                 <a
//                   href={`/materials/${grade}/${file.name.toLowerCase().replace(/ /g, "_")}.pdf`}
//                   download
//                   className="px-6 py-3 bg-[#0f604d] text-white rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-[#0c4d3e] transition-all shadow-lg shadow-[#0f604d]/20"
//                 >
//                   <FaDownload size={14} /> Download
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Empty State Message */}
//         {files.length === 0 && (
//           <div className="text-center py-20">
//             <p className="text-gray-400 italic">No materials uploaded for this grade yet.</p>
//           </div>
//         )}
//       </section>
//     </main>
//   );
// }
// // FULL GRADE PAGE

// import Link from "next/link";

// export default function GradePage({ params }) {
//   const { grade } = params;

//   // change these names based on your PDFs
//   const files = [
//     "f.pdf",
//         "f.pdf",
 
//   ];

//   return (
//     <main className="bg-white min-h-screen">

//       {/* HEADER */}
//       <section className="bg-primary text-center py-20">
//         <h1 className="text-4xl font-bold capitalize">
//           {grade.replace("-", " ")} Materials
//         </h1>
//       </section>


//       {/* PDF LIST */}
//       <section className="max-w-4xl mx-auto px-6 py-20">

//         <Link
//           href="/study-materials"
//           className="text-primary underline mb-6 inline-block"
//         >
//           ← Back to Grades
//         </Link>

//         <div className="space-y-4">

//           {files.map((file, i) => (
//             <a
//               key={i}
//               href={`/materials/${grade}/${file}`}
//               target="_blank"
//               className="
//                 block
//                 bg-white
//                 shadow
//                 rounded-xl
//                 p-5
//                 hover:shadow-lg
//                 transition
//               "
//             >
//               📄 {file}
//             </a>
//           ))}

//         </div>

//       </section>
//     </main>
//   );
// }
