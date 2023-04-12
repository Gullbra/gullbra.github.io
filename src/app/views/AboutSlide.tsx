import React, { useContext, useEffect, useRef, useState } from 'react'
// import { HashLink } from 'react-router-hash-link'

import '../styles/views-about/views.about.css'
import { ContentContext } from '../utils/contentContext'
// import { scrollWidthOffset } from '../utils/scrollWidthOffset'
import { NavArrow } from '../components/NavArrow'
import { setupTypewriter } from '../utils/typewriterFunction'

export const AboutSlide = () => {
  const [ displayedInfo, setDisplayedInfo ] = useState<string>("about")
  const [ clearedTeminal, setClearedTerminal ] = useState<boolean>(false)
  const infoTexts = useContext(ContentContext).infoTexts
  const terminalContentRef = useRef<HTMLDivElement>(null)
  const refTypeTest = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    //setClearedTerminal(false)
    if(refTypeTest.current) {
      const TW = setupTypewriter(refTypeTest.current, 100, setClearedTerminal, false)
      TW.type()
    }
  }, [displayedInfo])

  return(
    <section className='main__slide --about-slide' id='about-slide'>
      <h2 className='slide-section__slide-header' >Who am I?</h2>    

      <div className='about-slide__button-container'>
        <button className={`button-container__info-type-button ${displayedInfo === 'about' ? '--displayed-info-button': ''}`.trim()}
          onClick={(event) => { if(!event.currentTarget.classList.contains("--displayed-info-button")){setClearedTerminal(true); setDisplayedInfo('about');}}}
        > About
        </button>
        <button className={`button-container__info-type-button ${displayedInfo === 'interests' ? '--displayed-info-button': ''}`.trim()}
          onClick={(event) => { if(!event.currentTarget.classList.contains("--displayed-info-button")){setClearedTerminal(true); setDisplayedInfo('interests');}}}
        > Interests
        </button>            
      </div>

      <article className='slide-section__about-article'>
        <div className={`about-article__paragraph-wrapper${clearedTeminal ? '' : ' --full-terminal'}`} ref={terminalContentRef}>
          <p className={`about-article__info-paragraph${clearedTeminal ?" typewriter":""}`} ref={refTypeTest}>{`> ${displayedInfo[0].toUpperCase() + displayedInfo.substring(1)}`}</p>

          {!clearedTeminal && displayedInfo === 'about' && (
            <InfoParser contentStringified={infoTexts.general}/>
          )}

          {!clearedTeminal && displayedInfo === 'interests' && (
            <InfoParser contentStringified={infoTexts.interests}/>
          )}
        </div>
      </article>

      {/* <div className='slide-section__nav-button-container'>
        <HashLinkButton destination="tech" title="Things I've Learned"/>
        <HashLinkButton destination="projects" title="Things I've Done"/>
      </div> */}
      
      <div className='naw wrapper'><NavArrow direction='down' target='#tech-slide' additionalClass=''></NavArrow></div>

    </section>
  )
}


const InfoParser = ({contentStringified}: {contentStringified: string}) => {
  return (
    <>
      {/* <p className='about-article__info-paragraph'>{"MartinShell"}</p>
      <p className='about-article__info-paragraph'>{"Copyright (C) MartinSoft Corporation. All rights reserved."}</p> */}
      {contentStringified.trim().split(/\n/).map((paragraph, index) => (
        <p key={index + paragraph.substring(0,2)} className='about-article__info-paragraph'>
          {paragraph.includes("<b>")
            ? (() => {
                const sequencedPar = paragraph.split(/<b>/)

                return (
                  <>
                    {sequencedPar.map((seq, ind) => {
                      if (seq.includes("</b>")) { return(
                        <span key={index + seq.substring(0,2)}>
                          <span className='info-paragraph__span'>{seq.split("</b>")[0]}</span>
                          {seq.split("</b>")[1]}
                        </span>
                      )}
                      return <span key={index + seq.substring(0,2)}>{seq}</span>
                    })}
                  </>
                )
              }) ()
            : paragraph
          }
        </p>
      ))}
      <p className='about-article__info-paragraph --end-p'>{"> "}<span className='--end-caret'>{"_"}</span></p>
    </>
  )
}


// const HashLinkButton = ({title, destination}: {title: string, destination: string}) => {
//   return(
//     <HashLink className="hash-button"
//       to={`#${destination}-slide`}
//       scroll={scrollWidthOffset}
//       >{title}
//     </HashLink>
//   )
// }



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