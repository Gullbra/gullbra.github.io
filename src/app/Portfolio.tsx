import React from 'react';

import './styles/base.css';

import { Layout } from './Layout'
import HomeSlide from './views/HomeSlide';
import { AboutSlide } from './views/AboutSlide'
import TechSlide from './views/TechSlide'
import ProjectsSlide from './views/ProjectsSlide'
// import ContactSlide from './views/ContactSlide'

function Portfolio() {

  // const content = { 
  //   slidesArr: ['about', 'tech', 'projects'],
  // }

  // const ContentContext = createContext({})

  return (
    // <ContentContext.Provider value={content}>
      <Layout>
        <HomeSlide/>
        <AboutSlide/>
        <TechSlide/>
        <ProjectsSlide/>
        {/* <JourneySlide/> */}
        {/* <ContactSlide/> */}
      </Layout>
    // </ContentContext.Provider>
  );
}

export default Portfolio
