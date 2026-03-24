"use client";

import { useState } from "react";

export default function Experience() {
  const [activeExp, setActiveExp] = useState<number | null>(null);
  const [activeOrg, setActiveOrg] = useState<number | null>(null);

  const experiences = [
    {
      company: "Gamatecha Solusi Nusantara",
      date: "June 2025 - December 2025 · 7 Mos",
      role: "UI/UX Designer Internship",
      desc: "Designed application interfaces, including developing design systems, branding logos, illustrations, and digital assets for App Store and Play Store listings. Created interactive handheld prototypes for developers, collaborated closely with the development team, and fulfilled design requirements throughout the development process.",
    },
    {
      company: "Technobit Indonesia",
      date: "January 2025 - June 2025 · 6 Mos",
      role: "UI/UX Designer Internship",
      desc: "Designed application interfaces, including wireframe, design systems, branding logos, and illustrations. Created interactive handheld prototypes for developers, collaborated closely with the development team, and supported design needs throughout the development process. Also produced documentation by designing guidebooks for both mobile and web applications.",
    },
  ];

  const organizations = [
    {
      company: "Raja Brawijaya",
      date: "June 2024 - August 2024 · 3 Mos",
      role: "Staff of Publication and Information Technology",
      desc: "UI/UX Designer of official RAJA Brawijaya 2024 website.",
    },
    {
      company: "Kampung Budaya UB",
      date: "June 2024 - September 2024 · 4 Mos",
      role: "Staff of Publication and Information Technology",
      desc: "UI/UX Designer of official Kampung Budaya 2024 Website",
    },
    {
        company: "KBMDSI UB",
        date: "August 2023 - November 2023.  4 Mos",
        role: "Staff of Decoration, Design & Multimedia",
        desc: "Responsible for conceptualizing and executing visual elements that enhanced the overall aesthetic and communication effectiveness of our events and programs.",
      },
  ];

    

  return (
    <section id="experience" className="bg-black text-white pb-32 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24">

        {/* HEADER */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-2 mb-3">
          <div className="w-7 h-1 bg-primary"></div>
            <p className="text-sm font-semibold">Experience</p>
          </div>

          <h2 className="text-3xl md:text-3xl font-semibold">
            My Experience
          </h2>
        </div>

        {/* CONTENT */}
        <div className="relative mb-32">

          {/* LINE */}
          <div className=" md:block absolute left-4 md:left-1/2 md:-translate-x-1/2 w-[2px] top-0 md:top-10 bottom-0 bg-white/20"></div>

          <div className="flex flex-col gap-20">
            {experiences.map((item, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveExp(index)}
                onMouseLeave={() => setActiveExp(null)}
                className="grid md:grid-cols-2 gap-10 pl-10 md:pl-0  items-center"
              >
                {/* LEFT */}
                <div className="reveal-item text-left md:text-left md:pr-16">
                  <h3 className="text-2xl font-medium">
                    {item.company}
                  </h3>
                  <p className="text-sm text-gray-400 mt-2">
                    {item.date}
                  </p>
                </div>

                {/* RIGHT */}
                <div className="reveal-item md:pl-16">
                  <h3 className="text-2xl font-medium mb-3">
                    {item.role}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* DOT */}
                <div className="flex absolute left-2 md:left-1/2  md:-translate-x-1/2">
                  <div
                    className={`
                      w-4 h-4 rounded-full border-4 border-white/20
                      transition-all duration-300
                      ${activeExp === index 
                        ? "bg-primary scale-120" 
                        : "bg-white border-white/20 "
                      }
                    `}
                  ></div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* HEADER */}
        <div className="text-center mb-12">

          <h2 className="text-3xl md:text-3xl font-semibold">
            Organization
          </h2>
        </div>

        <div className="relative">

          {/* LINE */}
          <div className="md:block absolute left-4 md:left-1/2 md:-translate-x-1/2 w-[2px] top-0 md:top-10 bottom-0 bg-white/20"></div>

          <div className="flex flex-col gap-20">
            {organizations.map((item, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveOrg(index)}
                onMouseLeave={() => setActiveOrg(null)}
                className="grid md:grid-cols-2 gap-10 pl-10 md:pl-0  items-center"
              >
                {/* LEFT */}
                <div className="reveal-item text-left md:text-left md:pr-16">
                  <h3 className="text-2xl font-medium">
                    {item.company}
                  </h3>
                  <p className="text-sm text-gray-400 mt-2">
                    {item.date}
                  </p>
                </div>

                {/* RIGHT */}
                <div className="reveal-item md:pl-16">
                  <h3 className="text-2xl font-medium mb-3">
                    {item.role}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* DOT */}
                <div className="flex absolute left-2 md:left-1/2  md:-translate-x-1/2">
                  <div
                    className={`
                      w-4 h-4 rounded-full border-4 border-white/20
                      transition-all duration-300
                      ${activeOrg === index 
                        ? "bg-primary scale-120" 
                        : "bg-white border-white/20 "
                      }
                    `}
                  ></div>
                </div>

              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}