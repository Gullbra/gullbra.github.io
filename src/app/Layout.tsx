import react, { useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import { useMediaQuery } from "react-responsive";
import { scrollWidthOffset } from './utils/scrollWidthOffset';

import './styles/layout.css'
import './styles/layout.header.css'
import './styles/layout.sidebar.css'
import './styles/layout.nav-bar.css'

export const Layout = ({children}: {children: React.ReactNode}) => {
  const [ showSidebar, setShowSidebar ] = useState<boolean>(false)

  const slidesArr = ['tech', 'projects']
  const isTabletOrLarger = useMediaQuery({minWidth : 700})

  // TODO: Modify ./utils/useScrollPosition with useRef

  return (
    <>
      <Header setShowSidebar={setShowSidebar} slidesArr={slidesArr} isTabletOrLarger={isTabletOrLarger}/>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} slidesArr={slidesArr}/>
      <main className='site__main'>{children}</main>
      <NavBar />
    </>
  )
}


interface IHeaderProps {
  setShowSidebar: react.Dispatch<react.SetStateAction<boolean>>, 
  slidesArr: string[], 
  isTabletOrLarger: boolean
}
const Header = ({setShowSidebar, slidesArr, isTabletOrLarger}: IHeaderProps) => {
  return(
    <header className={isTabletOrLarger ? 'slide__header' : 'slide__header --header-sticky'}>
      <div className='header-wrapper'>        
        <h1 className="header__p-name">Martin Gullbrandsson</h1>

        <flex-wrapper class="header__flex-item">
          {isTabletOrLarger && slidesArr.map(slide => (
            <HashLink className="header__links"
              smooth 
              key={`${slide}`} 
              to={`#${slide}-slide`}
            > {slide[0].toUpperCase() + slide.substring(1)}
            </HashLink>
          ))}
        
          {isTabletOrLarger 
            ? (
              <HashLink className="header__links --contact-link"
                smooth
                to="#contact-slide"
                >Contact
              </HashLink>
            ) : (
              <div className="header__links --hamburger-link" onClick={() => setShowSidebar((prev) => {return !prev})}>
                ☰
              </div>
            )
          }
        </flex-wrapper>
      </div>
    </header>
  )
}

interface ISidebarProps {
  showSidebar: Boolean
  setShowSidebar: react.Dispatch<react.SetStateAction<boolean>>
  slidesArr: string[]
}
const Sidebar = ({showSidebar, setShowSidebar, slidesArr}: ISidebarProps) => {
  return(
    <aside className={ showSidebar ? "site__sidebar --sidebar-open" : 'site__sidebar'}>
      <HashLink className='sidebar__element' to={`#home-slide`}
        onClick={() => setShowSidebar((prev) => {return !prev})} 
        scroll={(el) => scrollWidthOffset(el, -2*4*12)}
      > Top
      </HashLink>
      {slidesArr.map(slide => (
        <HashLink className='sidebar__element' to={`#${slide}-slide`} key={slide}
          scroll = {(el) => scrollWidthOffset(el, -4*12)}
          onClick={() => setShowSidebar((prev) => {return !prev})}
        > {slide}
        </HashLink>
      ))}
    </aside>
  )
}

const NavBar = () => {
 return (
  <nav className='site__bottom-nav-bar'>

    <HashLink className='bottom-nav-bar__link'
      smooth to="#tech-slide">T</HashLink>
    <HashLink className='bottom-nav-bar__link'
      smooth to="#projects-slide">P</HashLink>

    {/* <HashLink smooth to="#about-slide">To about!</HashLink>
    <HashLink smooth to="#contact-slide">To contact!</HashLink>
    <HashLink smooth to="#info-slide">To info!</HashLink>
    <HashLink smooth to="#journey-slide">To journey!</HashLink> */}

    {/* 
    // TODO: Modify ./utils/useScrollPosition with this
    <button type='button' onClick={() => {
      console.log(refMain.current?.scrollTop)
    }}>click</button> 
    */}
  </nav>
 ) 
}