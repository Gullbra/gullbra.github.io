import React, { useContext } from 'react'
import { useMediaQuery } from 'react-responsive'
import { NavArrow } from '../components/NavArrow'

import '../styles/views-tech/views.tech.css'
import { ContentContext } from '../utils/contentContext'


const TechSlide = () => {
  const isTabletOrLarger = useMediaQuery({minWidth: 700})
  const skillsObj = useContext(ContentContext).skillsObj

  return (
    <section className='main__slide --tech-slide' id='tech-slide'>
      <h2 className='slide-tech__slide-header'>Technical Skills</h2>

      {isTabletOrLarger && <h3 className='slide-tech__header-2'>General</h3>}

      <flex-wrapper class='slide-tech__f-wrapper'>
        <article className='f-wrapper__lang-article-card'>
          <h3 className='article-skill-card__header'>{skillsObj.languages.title}</h3>

          <flex-wrapper class='lang-article-card__f-item-wrapper'>
            {skillsObj.languages.entries.map(lang => (
              <p key={lang} className='f-item-wrapper__skill-item'>{lang}</p>
            ))}
          </flex-wrapper>
        </article>

        {isTabletOrLarger && <h3 className='slide-tech__header-2'>Tools & Frameworks</h3>}

        <flex-wrapper class='f-wrapper__tools-wrapper'>
          {["frontEnd", "backEnd", "database", "other"].map(section => (
            <article className='f-wrapper__tools-article-card' key={section}>
              <h3 className='article-skill-card__header'>{skillsObj[section].title}</h3>
              
              <flex-wrapper class='tools-article-card__f-item-wrapper'>
                {skillsObj[section].entries.map(tool => (
                  <p key={tool} className='f-item-wrapper__skill-item'>{tool}</p>
                ))}
              </flex-wrapper>
            </article>
          ))}

          <div className='--wrapper-for-margin-tech-slide --slide-margin-bottom'>
            <NavArrow direction="down" target="#projects-slide" additionalClass=""/>
          </div>
        </flex-wrapper>
      </flex-wrapper>
    </section>
  )
}

export default TechSlide