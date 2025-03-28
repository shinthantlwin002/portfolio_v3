
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
import Experiences from '@/components/pages/Experiences';

const Home = () => {
  return (
    <div>
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Experiences />
      <Certifications />
      <Services />
      <ProjectGallery />
      <Timeline />
      
      <Contact />
    </div>
  );
};

export default Home;
