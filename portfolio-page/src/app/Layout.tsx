// import react, { useState, useEffect, useRef} from 'react'
import { HashLink } from 'react-router-hash-link'
import { useMediaQuery } from "react-responsive";



import '../styles/layout.css'
import '../styles/components.header.css'

const Layout = ({children}:{children: React.ReactNode}) => {
  // TODO: Modify ./utils/useScrollPosition with this
  // const refMain = useRef<HTMLDivElement>(null)

  /*
  Sidebar (Scroll track)
  Scroll up button
  Bottom navbar
  Connection bar
 */

  return (
    <>
      <Header/>
      <main className='site__main'
        // TODO: Modify ./utils/useScrollPosition with this
        //ref={refMain}
        >{children}</main>
      <nav className='site__bottom-nav-bar'>
        {/* <HashLink smooth to="#about-slide">To about!</HashLink>
        <HashLink smooth to="#contact-slide">To contact!</HashLink>
        <HashLink smooth to="#info-slide">To info!</HashLink>
        <HashLink smooth to="#journey-slide">To journey!</HashLink>
        <HashLink smooth to="#projects-slide">To projects!</HashLink>
        <HashLink smooth to="#tech-slide">To tech!</HashLink> */}
        {/* 
        // TODO: Modify ./utils/useScrollPosition with this
        <button type='button' onClick={() => {
          console.log(refMain.current?.scrollTop)
        }}>click</button> 
        */}
      </nav>
    </>
  )
}

export default Layout


const Header = () => {
  const isNotMobile = useMediaQuery({minWidth : 500})

  return(
    <header className='slide__header'>
            
      <p className="header__p-name">Martin Gullbrandsson</p>

      <flex-wrapper class="header__flex-item">
        {isNotMobile && ['tech', 'projects', 'about'].map(slide => (
          <HashLink className="header__links"
            smooth 
            key={`${slide}`} 
            to={`#${slide}-slide`}>{slide}
          </HashLink>
        ))}
      
        <p className="header__links">Contact</p>
      </flex-wrapper>

    </header>
  )
}