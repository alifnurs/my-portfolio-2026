"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Lora } from "next/font/google";

import { useState } from "react";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const heroRef = useRef(null);

  useEffect(() => {
    if (!titleRef.current) return;

    gsap.from(".reveal", {
      opacity: 0,
      y: 30,
      filter: "blur(20px)",
      duration: 3,
      stagger: 0.2,
      ease: "power3.out",
    })

    gsap.fromTo(
      heroRef.current,
      {
        opacity: 0,
        y: 40,
        filter: "blur(10px)",
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power3.out",
      })
    
    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      
    });
  }, []);

  return (
    <section id="hero" ref={heroRef} className="pt-20 relative overflow-hidden rounded-b-[28px] bg-[#f3f3f3] sm:rounded-b-[40px] md:rounded-b-[60px] max-w-full">
      

      {/* HERO CONTENT */}
      <div className="overflow-hidden relative flex min-h-[min(42vh,420px)] flex-col items-center justify-center px-3 pb-16 pt-4 text-center sm:px-6 sm:pt-6 md:min-h-[min(65vh,720px)] md:pb-32 md:pt-8">
        <h2
          ref={titleRef}
          className={`${lora.className} max-w-full text-[clamp(2.25rem,10vw,150px)] font-light italic leading-[1.05] text-black sm:leading-none`}
        >
          <span className="mr-2 inline sm:mr-8 md:mr-16 lg:mr-20">I'm </span>
          <span className="inline-block lg:translate-x-24 xl:translate-x-35">
            ui/ux
          </span>
        </h2>

        <div className="mt-1 flex items-center justify-center text-[clamp(2.5rem,14vw,150px)] font-extrabold leading-none text-primary sm:mt-0 max-w-full">
          <span className="mr-2 sm:mr-4 md:mr-[clamp(2rem,6vw,100px)]">DESI</span>
          <span className="translate-x-0 lg:translate-x-20 xl:translate-x-25">
            GNER
          </span>
        </div>

        <a
          href="https://wa.me/6282324632266"
          target="_blank"
          className="text-black absolute bottom-[10%] left-1/2 z-20 -translate-x-1/2 rounded-full bg-white/40 px-5 py-2.5 text-xs font-bold shadow backdrop-blur-md sm:bottom-[6%] sm:px-6 sm:py-3 sm:text-sm md:bottom-[5%] hover:text-black  transition duration-300 md:text-white hover:bg-white"
        >
          LET’S CHAT
        </a>
      </div>

      {/* BOTTOM TEXT */}
      <div className="flex flex-col gap-6 px-4 pb-8 text-[11px] sm:flex-row sm:justify-between sm:gap-4 sm:px-6 sm:pb-9 sm:text-xs md:px-10 md:pb-10">
        
        <div className="flex flex-col gap-2 ">
          <div className="hidden sm:block w-[40%] h-0 outline-1 outline-black "></div>
          <p className="max-w-full text-center font-bold text-black sm:max-w-[200px] sm:text-left">
            Focused on UI/UX design, web design, webflow development, and front-end experiences.
          </p>
        </div>
        

        <p className="max-w-full text-center text-gray-600 sm:max-w-[200px] sm:text-right">
          Digital products, social media content, and creative copywriting.
        </p>
      </div>

      <img 
        src="images/hero.png"
        alt="Profile"
        className="reveal pointer-events-none absolute bottom-0 left-1/2 z-10 hidden w-[45%] max-h-none -translate-x-1/2 translate-y-px object-contain object-bottom select-none md:block"
      />
    </section>
  );
}
