"use client";
import { useState } from "react";

export default function ContactForm() {
  const [data, setData] = useState({});

  const submit = async (e) => {
    e.preventDefault();
    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });
    alert("Message sent!");
  };

  return (
    <form onSubmit={submit} className="space-y-4 max-w-md">
      <input placeholder="Name" onChange={(e)=>setData({...data,name:e.target.value})}/>
      <input placeholder="Email" onChange={(e)=>setData({...data,email:e.target.value})}/>
      <textarea placeholder="Message" onChange={(e)=>setData({...data,message:e.target.value})}/>
      <button className="bg-primary px-6 py-3 rounded">Send</button>
    </form>
  );
}
