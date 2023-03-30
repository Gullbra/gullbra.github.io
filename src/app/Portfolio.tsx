import React from 'react';

import './styles/base.css';

import { Layout } from './Layout'
import HomeSlide from './views/HomeSlide';
import { AboutSlide } from './views/AboutSlide'
import TechSlide from './views/TechSlide'
import ProjectsSlide from './views/ProjectsSlide'
// import ContactSlide from './views/ContactSlide'

function Portfolio() {
  return (
    <Layout>
      <HomeSlide/>
      <AboutSlide/>
      <TechSlide/>
      <ProjectsSlide/>
      {/* <JourneySlide/> */}
      {/* <AboutSlide/> */}
      {/* <ContactSlide/> */}
    </Layout>
  );
}

export default Portfolio
