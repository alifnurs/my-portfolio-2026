"use client";

import { useState, useEffect } from "react";

import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScrollTo = (id: string) => {
    setIsOpen(false); // tutup menu mobile
  
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: `#${id}`,
        offsetY: 80, // biar tidak ketutup navbar
      },
      ease: "power3.inOut",
    });
  };

  useEffect(() => {
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
  
      // arah scroll
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // scroll ke bawah → hide
        setIsVisible(false);
      } else {
        // scroll ke atas → show
        setIsVisible(true);
      }
  
      setLastScrollY(currentScrollY);
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${scrollY}px`; // simpan posisi scroll
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1); // kembalikan posisi scroll
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
    };
  }, [isOpen]);

  

  return (
    <div
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
        ${isScrolled 
          ? "bg-black/10 backdrop-blur-md text-white" 
          : "bg-white/0 text-black"}
                
      `}
    >
      {/* NAVBAR */}
      <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:py-5 md:px-10 md:py-6">
        <h1 className={`
            shrink-0 text-xl font-extrabold sm:text-2xl md:text-[28px]
            ${isScrolled ? "text-white" : "text-black"} 
            `} onClick={() => handleScrollTo("hero")}>
          <a className="hover:text-primary transition-colors duration-300" href="#alifn">
            ALIFN<span className=" text-primary hover:text-black transition-colors duration-300">.</span>
          </a>
        </h1>

        <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-center items-center gap-1 z-100 "
          >
            {/* TOP */}
            <span
              className={`
                w-6 h-[2px] bg-black transition-all duration-300
                ${isOpen ? "bg-white rotate-45 translate-y-[6px]" : "bg-black"}
                ${isScrolled || isOpen ? "bg-white" : "bg-black"}
              `}
            />

            {/* MIDDLE */}
            <span
              className={`
                w-6 h-[2px] bg-black transition-all duration-300
                ${isOpen ? "bg-white opacity-0" : "bg-black" }
                ${isScrolled || isOpen ? "bg-white" : "bg-black"}
              `}
            />

            {/* BOTTOM */}
            <span
              className={`
                w-6 h-[2px] bg-black transition-all duration-300
                ${isOpen ? "bg-white -rotate-45 -translate-y-[6px]" : "bg-black"}
                ${isScrolled || isOpen ? "bg-white" : "bg-black"}
              `}
            />
          </button>

        <nav className="hidden md:flex max-w-[65%] flex-wrap justify-end gap-x-3 gap-y-1 text-[11px] font-medium sm:max-w-none sm:gap-x-5 sm:gap-y-0 sm:text-xs md:gap-8 md:text-sm ">
          
          <a className={`
            relative group transition-colors duration-300 cursor-pointer
            ${isScrolled ? "text-white hover:text-primary" : "text-black hover:text-primary"}
            `} onClick={() => handleScrollTo("services")}>
            Services
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a className={`
            relative group transition-colors duration-300 cursor-pointer
            ${isScrolled ? "text-white hover:text-primary" : "text-black hover:text-primary"}
            `} onClick={() => handleScrollTo("about")}>
            About
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a className={`
            relative group transition-colors duration-300 inline-block cursor-pointer
            ${isScrolled ? "text-white hover:text-primary" : "text-black hover:text-primary"}
            `} onClick={() => handleScrollTo("project")}>
            Project
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a className={`
            relative group transition-colors duration-300 cursor-pointer
            ${isScrolled ? "text-white hover:text-primary" : "text-black hover:text-primary"}
            `} onClick={() => handleScrollTo("experience")}>
            Experience
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a className={`
            relative group transition-colors duration-300 cursor-pointer
            ${isScrolled ? "text-white hover:text-primary" : "text-black hover:text-primary"}
            `} onClick={() => handleScrollTo("contact")}>
            Contact
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>
        
      </div>
      <div
          className={`
            fixed inset-0 min-h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-2xl z-60
            transition-all duration-300
            ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
          `}
        >
          <a href="#services" onClick={() => handleScrollTo("services")}>Services</a>
          <a href="#" onClick={() => handleScrollTo("about")}>About</a>
          <a href="#" onClick={() => handleScrollTo("project")}>Project</a>
          <a href="#" onClick={() => handleScrollTo("experience")}>experience</a>
          <a href="#" onClick={() => handleScrollTo("contact")}>Contact</a>
        </div>
    </div>
  );
}