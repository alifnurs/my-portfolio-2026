import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Project from "@/components/Project";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import ScrollReveal from "@/components/ScrollReveal";


export default function Home() {
  return (
    <main>
      <ScrollReveal> 
        <Navbar />
        <Hero />
        <Services />
        <About />
        <Project />
        <Experience />
        <Contact />
      </ScrollReveal>
    </main>
  );
}