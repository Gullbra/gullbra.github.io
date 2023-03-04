import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faMicrophoneLines } from '@fortawesome/free-solid-svg-icons'

import '../styles/views.projects.css'

const ProjectsSlide = () => {
  return(
    <section className='main__slide --projects-slide' id='projects-slide'>
      
      <h2 className='projects-slide__title'> projects </h2>

      <div className='projects-slide__filter-bar'> filter bar </div>

      <div className='projects-slide__card-container'> 
        {/* card container */}
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
      
      </div>

    </section>
  )
}


const ProjectCard = () => {

  return (
    <article className='card-container__project-card'>
      <div className='project-card__image'> imageplaceholder </div>
      <h3 className='project-card__title'>this is a project</h3>
      <p className='project-card__desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod saepe error inventore architecto molestias eius aspernatur?</p>

      <div className='project-card__btn-container'>
        <button className='btn-container__project-buttons' title='Github Repo'> <FontAwesomeIcon icon={faGithub} className="fa-icon-overrides-projectcard"/> </button>
        <button className='btn-container__project-buttons' title='Deployed Site'> <FontAwesomeIcon icon={faMicrophoneLines} className="fa-icon-overrides-projectcard"/> </button>
      </div>
    </article>
  )
}

export default ProjectsSlide