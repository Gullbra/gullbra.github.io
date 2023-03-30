import React, { useState } from 'react'
import { HashLink } from 'react-router-hash-link'

import '../styles/views-about/views.about.css'
import '../styles/views-about/views.about.hash-button.css'
import { scrollWidthOffset } from '../utils/scrollWidthOffset'

export const AboutSlide = () => {
  const [ displayedInfo, setDisplayedInfo ] = useState<string>("about")

  const infoContent = {
    general: `
I'm a passionate, curious and logical <b>full-stack JavaScript developer</b>, with an academical background in physics, maths and economics.
I have a strong drive to create value with my work; creating, improving or maintaining things that makes the lives of people better, companies more efficient and makes a positive impact on society.
I know how important good, intuitive UX/UI design is, and I enjoy figuring out how to make applications and webpages easy and intuitive to use, without sacrificing functionality.
I also love writing readable, stable and maintainable code in the backend. I'm full-stack for a reason.
    `,
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

        {displayedInfo === 'about' && (
          <GeneralInfo contentStringified={infoContent.general}/>
        )}

        {displayedInfo === 'interests' && (
          <div className='about-article__paragraph-wrapper'>
            {Array.from(Array(4).keys()).map((num) => (
              <p key={num}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat reiciendis, inventore sunt explicabo facere atque illo rem cupiditate est debitis.</p>
            ))}
          </div>
        )}

      </article>

      <div className='slide-section__nav-button-container'>
        <HashLinkButton destination="tech" title="Some Things I've Learned"/>
        <HashLinkButton destination="projects" title="Some Things I've Done"/>
      </div>
    </section>
  )
}


const GeneralInfo = ({contentStringified}: {contentStringified: string}) => {
  return (
    <div className='about-article__paragraph-wrapper'>
      {contentStringified.trim().split(/\n/).map((paragraph, index) => (
        <p key={index + paragraph.substring(0,2)} className='about-article__info-paragraph'>
          {paragraph.includes("<b>")
            ? (() => {
                const sequencedPar = paragraph.split(/<b>/)

                return (
                  <>
                    {sequencedPar.map(seq => {
                      if (seq.includes("</b>")) {
                        return (<>
                          <span className='info-paragraph__span'>{seq.split("</b>")[0]}</span>
                          {seq.split("</b>")[1]}
                        </>)
                      }
                      return <span>{seq}</span>
                    })}
                  </>
                )
              }) ()
            : paragraph
          }
        </p>
      ))}
    </div>
  )
}


const HashLinkButton = ({title, destination}: {title: string, destination: string}) => {
  return(
    <HashLink className="hash-button"
      to={`#${destination}-slide`}
      scroll={scrollWidthOffset}
      >{title}
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