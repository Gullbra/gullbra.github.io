import React from "react";
import { HashLink } from "react-router-hash-link";

import '../styles/views.greeting.css'

const GreetingSlide = () => {
  const numberOfWorkingSlides = ['tech', 'projects', 'journey', 'about']


  return (
    <section className="main__slide --greeting-slide" id='info-slide'>
      <header className='slide__header'>
        
        <p className="header__p-name">Martin Gullbrandsson</p>

        <flex-wrapper class="header__flex-item">
          {numberOfWorkingSlides.map(slide => (
            <HashLink className="header__links"
              smooth 
              key={`${slide}`} 
              to={`#${slide}-slide`}>{slide}
            </HashLink>
          ))}
        
          <p className="header__links">Contact</p>
        </flex-wrapper>

      </header>
      
    </section>
  )
}

export default GreetingSlide