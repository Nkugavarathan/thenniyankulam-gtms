
"use client"
import React from 'react';
import Link from 'next/link';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaYoutube, 
  FaLinkedinIn, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaArrowUp 
} from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b4d3e] text-white pt-20 pb-10 relative overflow-hidden">
      {/* Subtle Background Pattern or Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl -mr-48 -mt-48" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Mission */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <span className="text-[#0f604d] font-black text-xl">M</span>
              </div>
              <h2 className="text-xl font-bold leading-tight">
                Mu/Thenniyankulam <br /> 
                <span className="text-emerald-400">GTMS</span>
              </h2>
            </div>
            <p className="text-emerald-50/60 leading-relaxed text-sm">
              Dedicated to nurturing academic excellence and character 
              development in the Thunukkai Division since our inception. 
              Empowering the next generation of leaders.
            </p>
            <div className="flex items-center gap-4">
              {[FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-emerald-400 hover:text-[#0f604d] transition-all duration-300 border border-white/10">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-8 border-b border-emerald-400/30 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-4 text-emerald-50/70 text-sm">
              <li><Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-emerald-400 transition-colors">About Our School</Link></li>
              <li><Link href="/academics" className="hover:text-emerald-400 transition-colors">Academics</Link></li>
              <li><Link href="/gallery" className="hover:text-emerald-400 transition-colors">Campus Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-emerald-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-8 border-b border-emerald-400/30 pb-2 inline-block">Contact</h4>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-emerald-400 mt-1 shrink-0" />
                <span className="text-emerald-50/70">Thenniyankulam, Thunukkai,<br />Northern Province, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-4">
                <FaPhoneAlt className="text-emerald-400 shrink-0" />
                <span className="text-emerald-50/70">+94 24 XXX XXXX</span>
              </li>
              <li className="flex items-center gap-4">
                <FaEnvelope className="text-emerald-400 shrink-0" />
                <span className="text-emerald-50/70">info@thenniyankulamgtms.lk</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter/CTA */}
          <div>
            <h4 className="text-lg font-bold mb-8 border-b border-emerald-400/30 pb-2 inline-block">Stay Informed</h4>
            <p className="text-sm text-emerald-50/70 mb-6">Subscribe to get the latest updates and newsletters.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-5 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-emerald-400 text-[#0f604d] px-4 rounded-lg font-bold text-xs hover:bg-white transition-all">
                JOIN
              </button>
            </form>
          </div>

        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-emerald-50/40 tracking-widest uppercase">
            © {currentYear} Mu/Thenniyankulam GTMS. All rights reserved.
          </p>
          
          <div className="flex items-center gap-8 text-xs text-emerald-50/40 uppercase tracking-widest">
            <a href="#" className="hover:text-emerald-400">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-400">Terms of Service</a>
            
            {/* Scroll to Top Button */}
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-[#0f604d] transition-all group"
            >
              <FaArrowUp className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}