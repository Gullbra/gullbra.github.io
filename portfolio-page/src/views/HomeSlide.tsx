import React from "react";
import { HashLink } from "react-router-hash-link";

import '../styles/views.home.css'
import '../styles/views.home.greeting.css'
import '../styles/views.home.hash-button.css'

const HomeSlide = () => {
  return (
    <section className="main__slide --greeting-slide" id='info-slide'>
      {/* <background-filter class='background-filter'> */}
      <flex-wrapper class="greeting-slide__wrapper">
        <Greeting/>
        <UnsplashAttribution/>
      </flex-wrapper>

      {/* <UnsplashAttribution/> */}
      {/* </background-filter> */}
    </section>
  )
}
export default HomeSlide

const Greeting = () => {
  return (
    <article className="wrapper__article">
      <flex-item class="article__f-item-image">
        <img className="f-item-image__image" src="./imageedit_1_7427655471.png" alt="Headshot of Me; Martin Gullbrandsson" />
      </flex-item>

      <flex-item class="article__f-item-text">
        <p className="f-item-text__pre-header">
          Lorem, ipsum dolor sit amet
        </p>
        <p className="f-item-text__header">
          Lorem, ipsum dolor sit amet
        </p>
        <p className="f-item-text__post-header">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione obcaecati quis provident sed ex vel, temporibus porro nulla, ut maxime harum nostrum deserunt, inventore voluptatum?
        </p> 
        
        <div className="f-item-text__btn-container">
          <HashLinkButton destination="tech" title="My Skills"/>
          <HashLinkButton destination="projects" title="My Projects"/>
          <HashLinkButton destination="about" title="More About Me"/>
        </div>
      </flex-item>
    </article>
  )
}

const HashLinkButton = ({title, destination}:{title: string, destination: string}) => {
  return(
    <HashLink className="hash-button"
      smooth
      to={`#${destination}-slide`}>{title}
    </HashLink>
  )
}

const UnsplashAttribution = () => {
  return (
    <div className="test-class-wr">
      Background Image by 
      <a className="test-class-a"
        href="https://unsplash.com/@anniespratt?utm_source=your_app_name&utm_medium=referral">
        Annie Spratt
      </a> 
      on 
      <a className="test-class-a"
        href="https://unsplash.com/?utm_source=your_app_name&utm_medium=referral">
        Unsplash
      </a>
    </div>
  )
}