// import react, { useState, useEffect, useRef} from 'react'
// import { HashLink } from 'react-router-hash-link'


import './styles/layout.css'

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