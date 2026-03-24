"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const projects = [
  {
    title: "OmniSource – Outsourcing App",
    desc: "An outsourcing management application designed to manage security, cleaning, and general staff, complete with an integrated payroll system.",
    image: "/images/omni.png",
    tags: ["UI/UX Design", "App Design", "Prototype", "grapich Design"],
    reverse: false,
    ref: "https://www.figma.com/design/hHdcqUuaG5tM1F8sXQJNZ0/OMNI---Mobile?node-id=1-557&t=GC1kEqyb8gTsXZsN-1"
  },
  {
    title: "SiJaga",
    desc: "A security management platform featuring attendance tracking, patrol monitoring, and a web-based employee management system.",
    image: "/images/sijaga.png",
    tags: ["UI/UX Design", "App Design", "Prototype", "Grapich Design"],
    reverse: true,
    ref: "https://www.figma.com/design/gI0Q8mnuX6MsofwK0t9WfB/Technobit-Intership?node-id=22-449&t=aphUi3CzxPniCFN0-1"
  },
  {
    title: "Remoda",
    desc: "A sustainable e-commerce platform focused on selling quality second-hand goods, promoting recycling and reducing textile waste.",
    image: "/images/remoda.png",
    tags: ["UI/UX Design", "Web Design", "Prototype", "Research"],
    reverse: false,
    ref: "https://www.figma.com/design/gIlXPhUkGRrgWYiRxBmBDW/REMODA?node-id=4-4&t=KUXiwbW6sQBx7xT1-1"
  },
];

export default function Projects() {
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
      id="project"
      ref={sectionRef}
      className="bg-black text-white pb-32 relative overflow-hidden"
    >
      {/* GLOW */}
      <div className="absolute right-[-200px] top-100 w-[400px] h-[400px] bg-primary/30 blur-[200px] z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24 relative z-10">
        
        {/* HEADER */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
          <div className="w-7 h-1 bg-primary"></div>
            <p className="text-sm font-semibold">Projects</p>
          </div>

          <h2 className="text-3xl md:text-3xl font-semibold">
            My Latest Project
          </h2>
        </div>

        {/* PROJECT LIST */}
        <div className="flex flex-col gap-8 z-20">
          {projects.map((item, index) => (
            <div
              key={index}
              className={`
                bg-linear-to-b from-white/10 to-white/5 group border border-white/5 rounded-3xl p-6 md:p-8 revealscroll
                flex flex-col lg:flex-row items-center gap-10
                transition duration-300 hover:border-white/10
                ${item.reverse ? "lg:flex-row-reverse" : ""}
              `}
            >
              {/* IMAGE */}
              <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* CONTENT */}
              <div className="w-full lg:w-1/2 flex flex-col gap-5">
                
                {/* TAGS */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* TITLE */}
                <h3 className="text-2xl md:text-3xl font-semibold">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* BUTTON */}
                <div className="flex items-center gap-3 mt-2">

                  <a href={item.ref} target="_blank" className="px-5 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-200 transition">
                    View Details
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}