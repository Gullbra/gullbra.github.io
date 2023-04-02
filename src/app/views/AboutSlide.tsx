import React, { useState } from 'react'
import { HashLink } from 'react-router-hash-link'

import '../styles/views-about/views.about.css'
import '../styles/views-about/views.about.hash-button.css'
import { scrollWidthOffset } from '../utils/scrollWidthOffset'

export const AboutSlide = () => {
  const [ displayedInfo, setDisplayedInfo ] = useState<string>("about")
  // const [  ]

  const infoContent = {
    general: `
I'm a passionate, curious and logical <b>full-stack developer</b>, with an academical background in physics, maths and economics.
I have a strong drive to <b>create value with my work</b>; creating, improving or maintaining things that makes the lives of people <b>better</b>, companies <b>more efficient</b> and makes a <b>positive impact</b> on society.
I know how important <b>good, intuitive UX/UI design</b> is, and I enjoy figuring out how to make applications and webpages easy and intuitive to use, without sacrificing functionality.
I also love writing <b>readable, stable and maintainable code</b> in the backend. I'm full-stack for a reason.
    `,
    interests: `
Lorem ipsum dolor sit amet consectetur <b>adipisicing</b> elit. Sint, autem.
Lorem ipsum dolor sit amet <b>consectetur adipisicing</b> elit. Sint, autem.
Lorem ipsum dolor sit <b>amet consectetur adipisicing</b> elit. Sint, autem.
Lorem ipsum dolor sit amet consectetur <b>adipisicing</b> elit. Sint, autem.
    `,
  }

  return(
    <section className='main__slide --about-slide' id='about-slide'>
      <h2 className='slide-section__slide-header'>Who am I?</h2>    

      <div className='about-slide__button-container'>
        <button className={`button-container__info-type-button ${displayedInfo === 'about' ? '--displayed-info-button': ''}`.trim()}
          onClick={() => setDisplayedInfo('about')}
        > About
        </button>
        <button className={`button-container__info-type-button ${displayedInfo === 'interests' ? '--displayed-info-button': ''}`.trim()}
          onClick={() => setDisplayedInfo('interests')}
        > Interests
        </button>            
      </div>

      <article className='slide-section__about-article'>
        {displayedInfo === 'about' && (
          <InfoParser contentStringified={infoContent.general}/>
        )}

        {displayedInfo === 'interests' && (
          <InfoParser contentStringified={infoContent.interests}/>
        )}
      </article>

      <div className='slide-section__nav-button-container'>
        <HashLinkButton destination="tech" title="Things I've Learned"/>
        <HashLinkButton destination="projects" title="Things I've Done"/>
      </div>
    </section>
  )
}


const InfoParser = ({contentStringified}: {contentStringified: string}) => {
  return (
    <div className='about-article__paragraph-wrapper'>
      {/* <p className='about-article__info-paragraph'>{"MartinShell"}</p>
      <p className='about-article__info-paragraph'>{"Copyright (C) MartinSoft Corporation. All rights reserved."}</p> */}
      <p className='about-article__info-paragraph'>{"> About"}</p>
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
      <p className='about-article__info-paragraph --end-p'>{"> "}<span className='--end-caret'>{"_"}</span></p>
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