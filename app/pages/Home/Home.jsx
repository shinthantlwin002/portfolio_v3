
import React from 'react';
import Projects from '@/components/pages/Projects'
import Hero from '@/components/pages/Hero';
import Certifications from '@/components/pages/Certifications2';
import Services from '@/components/pages/Services';
import ProjectGallery from '@/components/pages/ProjectGallery';
import Skills from '@/components/pages/Skills';
import Timeline from '@/components/pages/Timeline';
import Contact from '@/components/pages/Contact';
import About from '@/components/pages/About';

const Home = () => {
  return (
    <div>
      <Hero />
      <Projects />
      <Services />
      <Skills />
      <ProjectGallery />
      <Timeline />
      <Certifications />
      <Contact />
      <About />
    </div>
  );
};

export default Home;
