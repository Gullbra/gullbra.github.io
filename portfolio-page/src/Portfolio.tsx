import React from 'react';

import './styles/base.css';
import './styles/components.css'

import Layout from './PortfolioLayout'
import GreetingSlide from './views/GreetingSlide'
import TechSlide from './views/TechSlide'
import ProjectsSlide from './views/ProjectsSlide'
import AboutSlide from './views/AboutSlide'
import ContactSlide from './views/ContactSlide'

function Portfolio() {
  return (
    <Layout>
      <GreetingSlide/>
      <TechSlide/>
      <ProjectsSlide/>
      {/* <JourneySlide/> */}
      <AboutSlide/>
      <ContactSlide/>
    </Layout>
  );
}

export default Portfolio
