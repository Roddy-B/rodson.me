"use client";

import { useState } from 'react';
import Header from '../pages/header';
import Hero from '../pages/hero';
import Skills from "@/pages/skills";
import Projects from "@/pages/projects";
import Contact from "@/pages/contact";
import Footer from "@/pages/footer";
import About from '../pages/about';

export default function Home() {
  const [isPortuguese, setIsPortuguese] = useState<boolean>(false);

    const handleLanguageChange = (lang: boolean) => {
        setIsPortuguese(lang);
    };

  return (
    <div>
      <Header isPortuguese={isPortuguese} onLanguageChange={handleLanguageChange}/>
      <Hero isPortuguese={isPortuguese} />
      <About isPortuguese={isPortuguese}/>
      <Skills isPortuguese={isPortuguese}/>
      <Projects isPortuguese={isPortuguese}/>
      <Contact isPortuguese={isPortuguese}/>
      <Footer />
    </div>
  );
}
