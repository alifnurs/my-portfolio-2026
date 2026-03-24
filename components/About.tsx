"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <section
      
      id="about"
      ref={sectionRef}
      className=" relative bg-black text-white md:px-10 pb-32"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-24 grid md:grid-cols-2 gap-12 items-start">
        
        {/* LEFT SIDE */}
        <div className="">
          <h2 className="reveal-item text-[48px] md:text-[48px] font-medium leading-tight mb-8">
            Turning Creative Into <br /> Masterpieces
          </h2>

          {/* IMAGE */}
          <div className="revealscroll relative rounded-2xl ">
            
            {/* STAR */}
            <div className="absolute -top-4 -left-2 text-primary text-3xl z-10">
              ✦
            </div>

            <img
              src="/images/about.png" // ganti dengan punyamu
              alt="About"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300 hover:drop-shadow-[0_0_20px_rgba(80,93,233,0.45)]" 
            />

            {/* LABEL */}
            <div className="absolute bottom-10 left-8 ">
              <img src="/images/label.png" alt="label" className="w-72"/>
            
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className=" flex flex-col gap-20 reveal-container">
          
          {/* DESCRIPTION */}
          
          <p className="reveal-item text-white text-[14px] leading-relaxed max-w-md">
            I am a digital designer focused on creating meaningful and
            user-centered experiences. I work across mobile apps, websites,
            and digital products with a strong attention to detail. I believe
            good design is not only visually appealing but also functional
            and impactful. Through thoughtful design and clear communication,
            I help ideas turn into effective digital solutions.
          </p>
          

          {/* STATS */}
          <div className="reveal-container flex flex-col gap-8">
            
            {/* ITEM */}
            <div className="reveal-item flex justify-between items-center border-b border-white/10 pb-6">
              <h3 className="text-4xl font-light">100+</h3>
              <p className="text-gray-400">Project Completed</p>
            </div>

            <div className="reveal-item flex justify-between items-center border-b border-white/10 pb-6">
              <h3 className="text-4xl font-light">4+</h3>
              <p className="text-gray-400">Years of Experience</p>
            </div>

            <div className="reveal-item flex justify-between items-center border-b border-white/10 pb-6">
              <h3 className="text-4xl font-light">4+</h3>
              <p className="text-gray-400">Industry Covered</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}