import React from 'react'

import '../styles/views-about/views.about.css'

const AboutSlide = () => {
  return(
    <section className='main__slide --about-slide' id='about-slide'>
      about
    
      {Array.from(Array(15).keys()).map((num) => (
        <p key={num}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat reiciendis, inventore sunt explicabo facere atque illo rem cupiditate est debitis.</p>
      ))}
    </section>

  )
}

export default AboutSlide