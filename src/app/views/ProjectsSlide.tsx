import React, { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faMicrophoneLines } from '@fortawesome/free-solid-svg-icons'

import '../styles/views-projects/views.projects.css'
import '../styles/views-projects/views.projects.filter-button.css'
import '../styles/views-projects/views.projects.project-card.css'

import UnsplashAttribution from '../components/UnsplashAttribution'
// import { NavArrow } from '../components/NavArrow'
import { Link } from 'react-router-dom'
import { ContentContext, IProject } from '../utils/contentContext'

interface IStateProject {
  projects: IProject[]
  languageKvp: {[key: string]: number}
  toolsKvp: {[key: string]: number}
}
interface IFilters {
  shownLang: Set<string>
  shownTools: Set<string>
}

const firstRender = true

const ProjectsSlide = () => {
  const [ projectState, setProjectState ] = useState<IStateProject>({} as IStateProject)
  const [ filters, setFilters ] = useState<IFilters>({
    shownLang: new Set(["All-lang"]), 
    shownTools: new Set(["All-tools"])
  })
  const projects = useContext(ContentContext).projects

  useEffect(() => {
    if (firstRender) {

      const languageKvp: {[key: string]: number} = {}
      const toolsKvp: {[key: string]: number} = {}

      for (let i=0; i < projects.length; i++) {
        projects[i].languages.forEach(lang => languageKvp[lang] ? languageKvp[lang] += 1 : languageKvp[lang] = 1)
        projects[i].toolsAndFrameworks.forEach(tool => toolsKvp[tool] ? toolsKvp[tool] += 1 : toolsKvp[tool] = 1)
      }

      setProjectState({projects, languageKvp, toolsKvp})
    }
  }, [])

  const filterHandler = (event: React.MouseEvent<HTMLButtonElement & {filterType: string}, MouseEvent>) => {
    const filterType = event.currentTarget.getAttribute("filter-type")
    const filter = event.currentTarget.value
    const classList = event.currentTarget.classList

    console.log(filterType)

    setFilters((prev) => {
      if (filter === "All-lang") return {...prev, shownLang: new Set(["All-lang"])}
      if (filter === "All-tools") return {...prev, shownTools: new Set(["All-tools"])}
      
      const newState = {...prev}
       
      if (filterType === "lang") {
        newState.shownLang.delete("All-lang")
        classList.contains("--active-filter")
          ? newState.shownLang.delete(filter)
          : newState.shownLang.add(filter)
      }

      if (filterType === "tools") {
        newState.shownTools.delete("All-tools")
        classList.contains("--active-filter")
          ? newState.shownTools.delete(filter)
          : newState.shownTools.add(filter)
      }
      
      if (newState.shownLang.size === 0) newState.shownLang.add("All-lang")
      if (newState.shownTools.size === 0) newState.shownTools.add("All-tools")

      return newState
    })
  }

  const projectsToShow = projectState.projects?.filter(project => {
    const langSelect = filters.shownLang.has("All-lang") || (() => {
      for (let lang of project.languages)
        if (filters.shownLang.has(lang))
          return true
    })()

    const toolsSelect = filters.shownTools.has("All-tools") || (() => {
      for (let tool of project.toolsAndFrameworks)
        if (filters.shownTools.has(tool))
          return true
    })()

    return toolsSelect && langSelect
  })

  return(
    <section className='main__slide --projects-slide' id='projects-slide'>
      <background-filter class="--background-filter-project-slide">
        <flex-wrapper class="projects-slide__wrapper">
          <h2 className='projects-slide__title --slide-top-element'> 
            Projects 
          </h2>

          {/* 
          <div className='projects-slide__filter-bar'>
            {Object.keys(projectState).length && ["All", ...Object.keys(projectState.languageKvp)].map(lang => (
              <button className={filters.shownLang.has(lang === "All" ? "All-lang" : lang) ? 'filter-btn-btn --active-filter' : 'filter-btn-btn'} 
                value={lang === "All" ? "All-lang" : lang} filter-type="lang"
                key={lang} onClick={filterHandler} 
              >
                {lang}
                <div className='filter-btn-count'>{lang === "All" ? projectState.projects.length : projectState.languageKvp[lang]}</div>
              </button>
            ))}
          </div>

          <div className='projects-slide__filter-bar'>
            {Object.keys(projectState).length && ["All", ...Object.keys(projectState.toolsKvp)].map(tool => (
              <button className={filters.shownTools.has(tool === "All" ? "All-tools" : tool) ? 'filter-btn-btn --active-filter' : 'filter-btn-btn'} 
                value={tool === "All" ? "All-tools" : tool} filter-type="tools"
                key={tool} onClick={filterHandler}
              >
                {tool}
                <div className='filter-btn-count'>{tool === "All" ? projectState.projects.length : projectState.toolsKvp[tool]}</div>
              </button>
            ))}
          </div>
          */}

          <div className='projects-slide__card-container --slide-bottom-element'> 
            {projectsToShow?.length > 0 
              ? projectsToShow.map(project => (
                  <ProjectCard key={project.title} project={project}/>
                ))
              : <div className='--projects-404'>No projects matching filters</div>
            }      
          </div>

          <UnsplashAttribution 
            aProfile="https://unsplash.com/fr/@austindistel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            name='Austin Distel'
            aUnsplash='https://unsplash.com/photos/rxpThOwuVgE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'/>
        </flex-wrapper>
      </background-filter>
    </section>
  )
}

const ProjectCard = ({project}: {project: IProject}) => {
  return (
    <article className='card-container__project-card'>
      <div className='project-card__image-wrapper'>
        <img className='project-card__image' src={project.imageUrl || './austin-distel-rxpThOwuVgE-unsplash.jpg'} alt='imageplaceholder'/>
      </div>

      <h3 className='project-card__title'>{project.title}</h3>

      <div className='project-card__desc_container'>
        {project.desc.trim().split("\n").map((paragraph, index) => (
          <p key={index + paragraph.substring(0,2)} className='project-card__desc_p'>{paragraph.trim()}</p>
        ))}
      </div>

      <div className='project-card__tag-box'>
        {[...project.languages, ...project.toolsAndFrameworks].map(item => (
          <span className='tag-box__tag' key={item}>
            {item}
          </span>
        ))}
      </div>

      <div className='project-card__btn-container'>
        {project.githubLink && (
          <Link to={project.githubLink} className='btn-container__project-buttons' title='Github Repo'> 
            <FontAwesomeIcon icon={faGithub} className="fa-icon-overrides-projectcard"/> 
          </Link>
        )}

        {project.liveLink && (
          <Link to={project.liveLink} className='btn-container__project-buttons' title='Deployed Site'> 
            <FontAwesomeIcon icon={faMicrophoneLines} className="fa-icon-overrides-projectcard"/> 
          </Link>
        )}
      </div>
    </article>
  )
}

export default ProjectsSlide