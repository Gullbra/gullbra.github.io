import React, { useEffect, useRef } from "react";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import '../styles/views-home/views.home.css'
import '../styles/views-home/views.home.greeting.css'
import '../styles/views-home/views.home.hash-button.css'

import { scrollWidthOffset } from "../utils/scrollWidthOffset";
import UnsplashAttribution from "../components/UnsplashAttribution";
import { useMediaQuery } from "react-responsive";

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
  const isLargeMobileOrLarger = useMediaQuery({minWidth: 300})
  const isTabletOrLarger = useMediaQuery({minWidth: 700})

  const refPreHeader = useRef<HTMLParagraphElement>(null)
  const refImage = useRef<HTMLImageElement>(null)
  const refSpan = useRef<HTMLSpanElement>(null)
  const refNameHeader = useRef<HTMLParagraphElement>(null)
  const refTitleHeader = useRef<HTMLParagraphElement>(null)
  const refPostHeader = useRef<HTMLParagraphElement>(null)
  const refArrowDown = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (firstRender) {
      refImage.current?.classList.add("--full-img-opacity")
      refPreHeader.current?.classList.add("--full-opacity")
      refSpan.current?.classList.add("--full-opacity")
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
        <img className="f-item-image__image --no-opacity" ref={refImage}
          src="./martin-gullbrandsson.png" 
          alt="Headshot of Me; Martin Gullbrandsson"/>
      </flex-item>

      <flex-item class="article__f-item-text">
        <h3 className="f-item-text__pre-header --no-opacity" ref={refPreHeader}>
          Hello World! <span className="pre-header__span --no-opacity" ref={refSpan}>I am</span>
        </h3>
        <h2 className="f-item-text__name-header --no-opacity" ref={refNameHeader}>
          Martin Gullbrandsson
        </h2>
        <h3 className="f-item-text__title-header --no-opacity" ref={refTitleHeader} >
          Full-Stack Developer
        </h3>
        <p className="f-item-text__post-header --no-opacity" ref={refPostHeader}>
         {'['} <span className="post-header__span-string">"JavaScript & TypeScript"</span>, <span className="post-header__span-string">"C#"</span>, <span className="post-header__span-string">"Python"</span> {'];'}
        </p>

        <div className="f-item-text__continue-arrow-wrapper">
          <HashLink to="#tech-slide" className="continue-arrow-wrapper__fa-hash-link --no-opacity" ref={refArrowDown}
            scroll={(el) => scrollWidthOffset(el, isLargeMobileOrLarger, isTabletOrLarger)}
          >
            <FontAwesomeIcon icon={faChevronDown} className="--fa-icon-overrides-homeslide"/> 
          </HashLink>
        </div>
        
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
