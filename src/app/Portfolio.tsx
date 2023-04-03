import React from 'react';

import './styles/base.css';

import { Layout } from './Layout'
import HomeSlide from './views/HomeSlide';
import { AboutSlide } from './views/AboutSlide'
import TechSlide from './views/TechSlide'
import ProjectsSlide from './views/ProjectsSlide'
import { ContentContext, contentContext } from './utils/contentContext';

function Portfolio() {
  return (
    <ContentContext.Provider value={contentContext}>
      <Layout>
        <HomeSlide/>
        <AboutSlide/>
        <TechSlide/>
        <ProjectsSlide/>
      </Layout>
    </ContentContext.Provider>
  );
}

export default Portfolio
