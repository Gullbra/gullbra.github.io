import react from 'react'
import { HashLink } from 'react-router-hash-link'

import './styles/layout.css'

const Layout = ({children}:{children: React.ReactNode}) => {
  /*
  Sidebar (Scroll track)
  Scroll up button
  Bottom navbar
  Connection bar
 */


  return (
    <>
      <main className='site__main'>{children}</main>
      <nav className='site__bottom-nav-bar'>
        <HashLink smooth to="#about-slide">To about!</HashLink>
        <HashLink smooth to="#contact-slide">To contact!</HashLink>
        <HashLink smooth to="#info-slide">To info!</HashLink>
        <HashLink smooth to="#journey-slide">To journey!</HashLink>
        <HashLink smooth to="#projects-slide">To projects!</HashLink>
        <HashLink smooth to="#tech-slide">To tech!</HashLink>
      </nav>
    </>
  )
}

export default Layout