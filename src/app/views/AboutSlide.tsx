import React, { useState } from 'react'
import { HashLink } from 'react-router-hash-link'

import '../styles/views-about/views.about.css'
import '../styles/views-home/views.home.hash-button.css'
import { scrollWidthOffset } from '../utils/scrollWidthOffset'

const AboutSlide = () => {
  const [ displayedInfo, setDisplayedInfo ] = useState<string>("about")

  const infoContent = {
    general: '',
    interests: '',
  }

  return(
    <section className='main__slide --about-slide' id='about-slide'>

      <h2 className='slide-tech__slide-header'>Who am I?</h2>    

      <article className='slide-section__about-article'>
        <div className='about-article__button-container'>
          <button className={`button-container__info-type-button ${displayedInfo === 'about' ? '--displayed-info-button': ''}`.trim()}
            onClick={() => setDisplayedInfo('about')}
          > About
          </button>
          <button className={`button-container__info-type-button ${displayedInfo === 'interests' ? '--displayed-info-button': ''}`.trim()}
            onClick={() => setDisplayedInfo('interests')}
          > Interests
          </button>            
        </div>


        {Array.from(Array(4).keys()).map((num) => (
          <>
            <p key={num}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat reiciendis, inventore sunt explicabo facere atque illo rem cupiditate est debitis.</p>
            <br />
          </>
        ))}
      </article>

      <div className='slide-section__nav-button-container'>
        <HashLinkButton destination="tech" title="My Skills"/>
        <HashLinkButton destination="projects" title="My Projects"/>
        <HashLinkButton destination="about" title="More About Me"/>
        {/* <div className="f-item-text__btn-container">
        </div> */}  
      </div>


    </section>
  )
}

export default AboutSlide

const HashLinkButton = ({title, destination}: {title: string, destination: string}) => {
  return(
    <HashLink className="hash-button"
      to={`#${destination}-slide`}
      scroll={scrollWidthOffset}
      >{title[0].toLocaleUpperCase() + title.substring(1).toLocaleLowerCase()}
    </HashLink>
  )
}



/*
      <text className='test-article'>
{`{
  `}<span>{'"SQL"'}</span>{`: [
    `}<span>{'"PostgreSQL"'}</span>{`,
    `}<span>{'"SQLite"'}</span>{`
  ],
  `}<span>{'"NoSQL"'}</span>{`: [
    `}<span>{'"MongoDB"'}</span>{`
  ]
}`}
      </text>
 */