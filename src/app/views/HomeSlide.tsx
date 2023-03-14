import React, { useEffect, useRef } from "react";
import { HashLink } from "react-router-hash-link";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'


import '../styles/views-home/views.home.css'
import '../styles/views-home/views.home.greeting.css'
import '../styles/views-home/views.home.hash-button.css'

import UnsplashAttribution from "../components/UnsplashAttribution";

let firstRender = true

const HomeSlide = () => {
  return (
    <section className="main__slide --greeting-slide" id='home-slide'>
      <flex-wrapper class="greeting-slide__wrapper">
        <GreetingCard/>
        <UnsplashAttribution 
          aProfile={"https://unsplash.com/@anniespratt?utm_source=your_app_name&utm_medium=referral"}
          name={"Annie Spratt"}
          aUnsplash={"https://unsplash.com/?utm_source=your_app_name&utm_medium=referral"}/>
      </flex-wrapper>
    </section>
  )
}
export default HomeSlide

const GreetingCard = () => {
  const refPreHeader = useRef<HTMLParagraphElement>(null)
  const refNameHeader = useRef<HTMLParagraphElement>(null)
  const refTitleHeader = useRef<HTMLParagraphElement>(null)
  const refPostHeader = useRef<HTMLParagraphElement>(null)
  const refArrowDown = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (firstRender) {
      refPreHeader.current?.classList.add("--full-opacity")
      refNameHeader.current?.classList.add("--full-opacity")
      refTitleHeader.current?.classList.add("--full-opacity")
      refPostHeader.current?.classList.add("--full-opacity")
      refArrowDown.current?.classList.add("--full-opacity")
      firstRender = false  
    }
  }, [])

  return (
    <article className="wrapper__article">
      <flex-item class="article__f-item-image">
        <img className="f-item-image__image" 
          src="./martin-gullbrandsson.png" 
          alt="Headshot of Me; Martin Gullbrandsson"/>
      </flex-item>

      <flex-item class="article__f-item-text">
        <h3 className="f-item-text__pre-header --no-opacity" ref={refPreHeader}>
          Hello World
        </h3>
        <h2 className="f-item-text__name-header --no-opacity" ref={refNameHeader}>
          I'm Martin Gullbrandsson
        </h2>
        <h3 className="f-item-text__title-header --no-opacity" ref={refTitleHeader} >
          Full-Stack Developer
        </h3>
        <p className="f-item-text__post-header --no-opacity" ref={refPostHeader}>
          | JavaScript | TypeScript | C# | Python | 
        </p>

        <HashLink smooth to="#tech-slide" className="fa-hash-link --no-opacity" ref={refArrowDown}>
          <FontAwesomeIcon icon={faChevronDown} className="fa-icon-overrides-homeslide"/> 
        </HashLink>
        
        {/* <div className="f-item-text__btn-container">
          <HashLinkButton destination="tech" title="My Skills"/>
          <HashLinkButton destination="projects" title="My Projects"/>
          <HashLinkButton destination="about" title="More About Me"/>
        </div> */}
      </flex-item>
    </article>
  )
}

const HashLinkButton = ({title, destination}: {title: string, destination: string}) => {
  return(
    <HashLink className="hash-button"
      smooth
      to={`#${destination}-slide`}>{title}
    </HashLink>
  )
}
