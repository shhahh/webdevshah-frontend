import React from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import Projects from '../components/home/Projects';
import Skills from '../components/home/Skills';
import Testimonials from '../components/home/Testimonials';
import CTA from '../components/home/CTA';

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Projects />
      <Skills />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Home;