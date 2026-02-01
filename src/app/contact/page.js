"use client";

import { useState } from "react";
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaClock, 
  FaPaperPlane 
} from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulate API call
    alert("Message sent successfully!");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <main className="bg-white text-gray-800 font-sans">
      
      {/* --- HERO SECTION --- */}
      <section className="bg-[#0f604d] py-24 md:py-36 px-6 text-center text-white relative overflow-hidden">
        {/* Decorative Background Element */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-block bg-white/10 backdrop-blur-md px-5 py-2 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-6 border border-white/20">
            Get in Touch
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Contact Us
          </h1>
          <p className="text-emerald-50/80 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* --- CONTACT INFO GRID --- */}
      <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card: Address */}
          <div className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col items-center text-center transition-transform hover:-translate-y-2">
            <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-[#0f604d] mb-5">
              <FaMapMarkerAlt size={24} />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Our Location</h4>
            <p className="text-gray-500 text-sm leading-relaxed">
              Thenniyankulam, Thunukkai Division<br />Northern Province, Sri Lanka
            </p>
          </div>

          {/* Card: Phone */}
          <div className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col items-center text-center transition-transform hover:-translate-y-2">
            <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-[#0f604d] mb-5">
              <FaPhoneAlt size={22} />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Phone Number</h4>
            <p className="text-[#0f604d] font-bold">+94 774445338</p>
            <p className="text-gray-400 text-xs mt-1 italic">Mon-Fri: 7:30 AM – 3:00 PM</p>
          </div>

          {/* Card: Email */}
          <div className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col items-center text-center transition-transform hover:-translate-y-2">
            <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-[#0f604d] mb-5">
              <FaEnvelope size={22} />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Email Us</h4>
            <p className="text-gray-500 text-sm truncate w-full">info@thenniyankulamgtms.lk</p>
            <p className="text-gray-400 text-xs mt-1 italic">Responds within 24 hours</p>
          </div>

          {/* Card: Hours */}
          <div className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col items-center text-center transition-transform hover:-translate-y-2">
            <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-[#0f604d] mb-5">
              <FaClock size={24} />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">School Hours</h4>
            <p className="text-gray-500 text-sm">Monday – Friday</p>
            <p className="text-[#0f604d] font-semibold text-sm">7:30 AM – 1:30 PM</p>
          </div>

        </div>
      </section>

      {/* --- FORM & SUPPORT SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          
          {/* Left Side: Text */}
          <div className="lg:col-span-2 space-y-6">
            <div className="inline-flex items-center gap-2 text-[#0f604d] font-bold text-sm tracking-widest uppercase">
              <MdOutlineSupportAgent size={20} />
              <span>Support Team</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Let's Start a <span className="text-[#0f604d]">Conversation.</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Whether you are a parent seeking admission for your child, or a community member with questions, our dedicated team is ready to assist you.
            </p>
            <div className="p-6 bg-gray-50 rounded-2xl border-l-4 border-[#0f604d]">
              <p className="text-gray-700 italic font-medium">
                "We believe that communication is the key to a thriving educational environment."
              </p>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-emerald-900/10 border border-gray-50 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-gray-400 ml-1">Full Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="kugavarathan"
                    required
                    className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-[#0f604d] outline-none transition-all placeholder:text-gray-300"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-gray-400 ml-1">Email Address</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="user@gmail.com"
                    required
                    className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-[#0f604d] outline-none transition-all placeholder:text-gray-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-gray-400 ml-1">Subject</label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Inquiry about admissions"
                  required
                  className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-[#0f604d] outline-none transition-all placeholder:text-gray-300"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-gray-400 ml-1">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  rows="5"
                  required
                  className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-[#0f604d] outline-none transition-all placeholder:text-gray-300 resize-none"
                />
              </div>

              <button className="group w-full bg-[#0f604d] text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-[#0c4d3e] transition-all shadow-lg shadow-emerald-900/20 active:scale-[0.98]">
                <span>Send Message</span>
                <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={16} />
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* --- MAP SECTION --- */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">

            <h2 className="text-3xl md:text-5xl font-extrabold mt-3 text-gray-900">Find Us on the Map</h2>
          </div>

          <div className="relative group">
            {/* The Outer Frame Styling */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#0f604d] to-emerald-800 rounded-[3rem] blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
            
            <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl border-8 border-white">
              {/* <iframe src="" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.747065882388!2d80.25738148671878!3d9.212672219154117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe85007674feb9%3A0x855adbfaae965898!2sThenniyankulam%20G.T.M.S!5e0!3m2!1sen!2slk!4v1769926767769!5m2!1sen!2slk"
                className="w-full h-[500px] border-none grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}