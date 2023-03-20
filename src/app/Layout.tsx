import react, { useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import { useMediaQuery } from "react-responsive";
import { scrollWidthOffset } from './utils/scrollWidthOffset';

import './styles/layout/layout.css'
import './styles/layout/layout.header.css'
import './styles/layout/layout.sidebar.css'
import './styles/layout/layout.nav-bar.css'

export const Layout = ({children}: {children: React.ReactNode}) => {
  const [ showSidebar, setShowSidebar ] = useState<boolean>(false)

  const slidesArr = ['tech', 'projects']
  const isTabletOrLarger = useMediaQuery({minWidth : 700})

  return (
    <>
      <Header setShowSidebar={setShowSidebar} slidesArr={slidesArr} isTabletOrLarger={isTabletOrLarger}/>
      {isTabletOrLarger 
        ? <NavBar slidesArr={slidesArr}/> 
        : <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} slidesArr={slidesArr}/>
      }
      <main className='site__main'>{children}</main>
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
          {isTabletOrLarger 
            ? (
              [...slidesArr, "contact"].map(slide => (
                <HashLink className={slide === "contact" ? "header__links --contact-link" : "header__links"}
                  smooth 
                  key={`${slide}`} 
                  to={`#${slide}-slide`}
                > {slide[0].toUpperCase() + slide.substring(1)}
                </HashLink>
              ))
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
  const isLargeMobileOrLarger = useMediaQuery({minWidth: 300})
  const isTabletOrLarger = useMediaQuery({minWidth: 700})

  return(
    <aside className={ showSidebar ? "site__sidebar --sidebar-open" : 'site__sidebar'}>
      {["home", ...slidesArr].map(slide => (
        <HashLink className='sidebar__element' to={`#${slide}-slide`} key={slide}
          scroll = {(el) => scrollWidthOffset(el, isLargeMobileOrLarger, isTabletOrLarger)}
          onClick={() => setShowSidebar((prev) => {return !prev})}
        > {slide}
        </HashLink>
      ))}
    </aside>
  )
}

// ! TODO: Modify and use with ./utils/useScrollPosition
const NavBar = ({slidesArr}: {slidesArr: string[]}) => {
  const isLargeMobileOrLarger = useMediaQuery({minWidth: 300})
  const isTabletOrLarger = useMediaQuery({minWidth: 700})

  return (
    <nav className='site__bottom-nav-bar'>
      {["home", ...slidesArr].map(slide => (
        <HashLink className='bottom-nav-bar__link' to={`#${slide}-slide`} key={slide}
          scroll = {(el) => scrollWidthOffset(el, isLargeMobileOrLarger, isTabletOrLarger)}
        > {slide[0].toUpperCase()}
        </HashLink>
      ))}
    </nav>
  ) 
}