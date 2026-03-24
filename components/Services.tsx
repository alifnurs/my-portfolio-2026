"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Services() {
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
      id="services"
      ref={sectionRef}
      className="bg-black text-white py-32 relative overflow-hidden"
      
    >
      <div className="absolute top-50 left-[-200px] w-[400px] h-[400px] bg-indigo-500/30 rounded-full blur-[200px] z-0" />

      <div className="relative max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mx-auto px-4 sm:px-6 lg:px-24 z-10">
        
        {/* LEFT: CARDS */}
        <div className="order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-3.5 z-10">
          
          {/* CARD */}
          {[
            {
              icon: "icon/mobile.svg",
              title: "Mobile Apps",
              desc: "We design intuitive and user-centered mobile applications that deliver seamless experiences across devices.",
              ref: "https://drive.google.com/drive/folders/13HFFg__s1dLxj_TUYvLBX6zkEtzrHoOg?usp=drive_link",
            },
            {
              icon: "icon/web.svg",
              title: "Website",
              desc: "We design clean and responsive websites that strengthen brand presence and improve user engagement.",
              ref: "https://drive.google.com/drive/folders/13HFFg__s1dLxj_TUYvLBX6zkEtzrHoOg?usp=drive_link",
            },
            {
              icon: "icon/social.svg",
              title: "Social Media",
              desc: "We craft engaging social media visuals and content that connect brands with their audience.",
              ref: "https://drive.google.com/drive/folders/16GaMUT2pVea7V7tQmpZXKbMLoYieAFu_",
            },
            {
              icon: "icon/video.svg",
              title: "Video Editor",
              desc: "We edit engaging and visually compelling videos that tell stories, enhance brand identity, and capture audience attention.",
              ref: "https://drive.google.com/drive/folders/1py37cUHS2xRfCOPrDqTRrpIBsKStwun3",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="revealscroll group p-5 flex flex-col gap-3 rounded-2xl justify-center bg-linear-to-b from-white/15 to-white/10 backdrop-blur-md  hover:bg-white hover:text-black transition duration-300 outline-1 outline-white/15"
            >
              {/* ICON (placeholder dulu) */}
              <img
                src={item.icon}
                alt={item.title}
                className="w-16 h-16 drop-shadow-[0_0_20px_rgba(80,93,233,0.45)]"
              />

              <h3 className="text-xl font-semibold">
                {item.title}
              </h3>

              <p className="text-[12px] text-gray-400 group-hover:text-black">
                {item.desc}
              </p>

              <span className="text-[12px] text-white group-hover:text-black group-hover:font-semibold transition-all duration-100"> 
                <a href={item.ref} target="_blank" className="hover:font-bold hover:text-gray-400 transition-colors duration-200">Learn More → </a>
              </span>
            </div>
          ))}
        </div>

        {/* RIGHT: TEXT */}
        <div className="reveal-container order-1 lg:order-2 items-end justify-center">

          <div className="reveal-item mb-5">
            <div className="flex justify-start lg:justify-end items-center gap-1.5">
             <div className="w-7 h-1 bg-indigo-600"></div>
             <div className="justify-center text-white text-sm font-bold font-['Poppins'] leading-5">Services</div>
            </div>
            <div className="text-left lg:text-right text-[28px] mb-2">
              <span className="italic">Services</span> | Provide</div>
           
          </div>
          
        

          <h2 className="reveal-item text-5xl font-medium leading-tight mb-6 text-left lg:text-right">
            What Do You Needs <br />
            We Can Do it
          </h2>

          <p className="reveal-item text-white text-left lg:text-right text-[12px]">
            We understand your needs and turn them into impactful digital
            solutions. From design to execution, we create experiences that
            truly stand out. Let’s build something meaningful and bring your
            ideas to life.
          </p>
        </div>

      </div>
    </section>
  );
}