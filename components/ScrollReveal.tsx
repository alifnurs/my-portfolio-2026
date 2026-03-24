"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollReveal({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.utils.toArray(".reveal-item").forEach((el: any) => {
        gsap.from(el, {
          opacity: 0,
          y: 20,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el, // setiap item punya trigger sendiri
            start: "top 94%",
            scrub: true,
          },
        });
      });

    gsap.utils.toArray(".revealscroll").forEach((el: any) => {
      gsap.fromTo(
        el,
        {
          opacity: 0.5,
          y: 10,
          filter: "blur(5px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.2,
          ease: "power3.in",
          scrollTrigger: {
            trigger: el,
            start: "top 85%", // mulai animasi saat masuk viewport
            toggleActions: "play none none reset",
          },
        }
      );
    });
  }, []);

  return <>{children}</>;
}