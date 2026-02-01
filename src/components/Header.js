"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Study Materials", href: "/study-materials" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-md py-4">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        {/* ================= LOGO ================= */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-[#0f604d] text-white rounded-xl flex items-center justify-center font-black text-xl group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-emerald-900/20">
            M
          </div>

          <div className="flex flex-col">
             <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-emerald-600 mt-1 leading-none">
              Thenniyankulam
            </span>
            <span className="font-black tracking-tight text-xl text-gray-900 leading-none">
              GTMS
            </span>
           
          </div>
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className="group relative text-sm font-bold uppercase tracking-widest text-gray-700 hover:text-[#0f604d] transition-colors duration-300"
              >
                {link.name}

                {/* smooth underline */}
                <span
                  className={`absolute left-0 -bottom-2 h-0.5 bg-[#0f604d] rounded-full transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* ================= MOBILE TOGGLE ================= */}
        {/* <button
          className="md:hidden text-3xl text-[#0f604d] "
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button> */}
        <button
  className="
    md:hidden 
    text-3xl 
    text-gray-700 
    hover:text-[#0f604d]
    hover:scale-110
    active:scale-95
    transition-all duration-300
  "
  onClick={() => setIsOpen(!isOpen)}
>
  {isOpen ? <HiX /> : <HiMenuAlt3 />}
</button>

      </div>

      {/* ================= MOBILE MENU ================= */}
      {/* <div
        className={`fixed inset-0 bg-[#0f604d] transition-all duration-500 ease-in-out md:hidden flex flex-col items-center justify-center ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >

        <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl" />

        <nav className="flex flex-col items-center gap-10 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white text-3xl font-black hover:text-emerald-300 transition-colors"
            >
              {link.name}
            </Link>
          ))}

          <div className="h-px w-24 bg-white/20 my-4" />

          <p className="text-emerald-200/50 text-xs tracking-widest uppercase font-bold">
            Mu/Thenniyankulam GTMS
          </p>
        </nav>
      </div> */}
    {/* ================= MOBILE MENU ================= */}
<div
  className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-200 transition-all duration-300 ${
    isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
  }`}
>
  <nav className="flex flex-col items-center gap-6 py-8">

    {navLinks.map((link) => {
      const isActive = pathname === link.href;

      return (
        <Link
          key={link.name}
          href={link.href}
          onClick={() => setIsOpen(false)}
          className={`text-lg font-bold uppercase tracking-widest transition-colors ${
            isActive
              ? "text-[#0f604d]"
              : "text-gray-700 hover:text-[#0f604d]"
          }`}
        >
          {link.name}
        </Link>
      );
    })}

    <div className="h-px w-24 bg-gray-200 my-2" />

    <p className="text-gray-400 text-xs tracking-widest uppercase font-bold">
      Mu/Thenniyankulam GTMS
    </p>

  </nav>
</div>

    </header>
  );
}

// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { HiMenuAlt3, HiX } from "react-icons/hi";

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const pathname = usePathname();

//   // Handle scroll effect for glassmorphism
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     { name: "Home", href: "/" },
//     { name: "About Us", href: "/about" },
//       { name: "Contact", href: "/contact" },
//     { name: "Study Materials", href: "/study-materials" },
  
//   ];

//   return (
//     <header
//       className={`fixed top-0 w-full z-100 transition-all duration-500 ${
//         scrolled 
//           ? "bg-white backdrop-blur-lg shadow-lg py-4" 
//           : "bg-white py-5"
//       }`} //bg-transparent py-5
//     >
//       <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
//         {/* LOGO AREA */}
//         <Link href="/" className="flex items-center gap-3 group">
//           <div className="w-10 h-10 bg-[#0f604d] rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-emerald-900/20">
//             <span className=" font-black text-xl">M</span>
//           </div>
//           <div className="flex flex-col">
//             <span className={`font-black tracking-tighter text-xl leading-none ${scrolled ? 'text-gray-900' : 'text-[#0f604d]'}`}>
//               GTMS
//             </span>
//             <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-emerald-600 leading-none mt-1">
//               Thenniyankulam
//             </span>
//           </div>
//         </Link>

//         {/* DESKTOP NAV */}
//         <nav className="hidden md:flex items-center gap-8">
//           {navLinks.map((link) => {
//             const isActive = pathname === link.href;
//             return (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 className={`relative text-sm font-bold uppercase tracking-widest transition-colors ${
//                   isActive 
//                     ? "text-[#0f604d]" 
//                     : scrolled ? "text-gray-600 hover:text-[#0f604d]" : "text-gray-700 hover:text-[#0f604d]"
//                 }`}
//               >
//                 {link.name}
//                 {isActive && (
//                   <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#0f604d] rounded-full" />
//                 )}
//               </Link>
//             );
//           })}
          
         
//         </nav>

//         {/* MOBILE TOGGLE */}
//         <button
//           className="md:hidden text-3xl text-white focus:outline-none"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <HiX /> : <HiMenuAlt3 />}
//         </button>
//       </div>

//       {/* MOBILE MENU OVERLAY */}
//       <div
//         className={`fixed inset-0 bg-[#0f604d] z-[-1] transition-all duration-500 ease-in-out md:hidden flex flex-col items-center justify-center ${
//           isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
//         }`}
//       >
//         {/* Background Decorative Circles */}
//         <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-white/5 rounded-full blur-3xl" />
//         <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl" />

//         <nav className="flex flex-col items-center gap-8 text-center">
//           {navLinks.map((link, i) => (
//             <Link
//               key={link.name}
//               href={link.href}
//               onClick={() => setIsOpen(false)}
//               className="text-white text-3xl font-black hover:text-emerald-400 transition-colors"
//               style={{ transitionDelay: `${i * 50}ms` }}
//             >
//               {link.name}
//             </Link>
//           ))}
//           <div className="h-px w-20 bg-white/20 my-4" />
//           <p className="text-emerald-200/50 text-xs tracking-widest uppercase font-bold">
//             Mu/Thenniyankulam GTMS
//           </p>
//         </nav>
//       </div>
//     </header>
//   );
// }
