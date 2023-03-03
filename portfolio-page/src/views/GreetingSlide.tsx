import React from "react";
import { HashLink } from "react-router-hash-link";

import '../styles/views.greeting.css'

const GreetingSlide = () => {
  return (
    <section className="main__slide --greeting-slide" id='info-slide'>
      <header className='slide__header'>
        
        <p className="header__p-name">Martin Gullbrandsson</p>

        <flex-wrapper class="header__flex-item">
          {['tech', 'projects', 'journey', 'about'].map(slide => (
            <HashLink className="header__links"
              smooth 
              key={`${slide}`} 
              to={`#${slide}-slide`}>{slide}
            </HashLink>
          ))}
        
          <p className="header__links">Contact</p>
        </flex-wrapper>

      </header>
      
      <flex-wrapper class="greeting-slide__wrapper">
        <Greeting/>
      </flex-wrapper>

    </section>
  )
}

export default GreetingSlide


const Greeting = () => {
  return (
    <article className="wrapper__article">
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
          <HashLinkButton destination="projects" title="My Projects"/>
          <HashLinkButton destination="tech" title="My Tech"/>
          <HashLinkButton destination="about" title="More About Me"/>
        </div>
        {/* 
        */}


      </flex-item>

      <flex-item>
        hey
      </flex-item>
    </article>
  )
}

const HashLinkButton = ({title, destination}:{title: string, destination: string}) => {
  return(
    <>
      <HashLink className="hash-button"
        smooth
        to={`#${destination}-slide`}>{title}
      </HashLink>
    </>
  )
}