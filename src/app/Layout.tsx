import react, { useContext, useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import { scrollWidthOffset } from './utils/scrollWidthOffset';
import { ContentContext } from './utils/contentContext';
// import { useScrollPosition } from './utils/useScrollPosition';

import './styles/layout/layout.css'
import './styles/layout/layout.header.css'
import './styles/layout/layout.sidebar.css'
//import './styles/layout/layout.nav-bar.css'


export const Layout = ({children}: {children: React.ReactNode}) => {
  const [ showSidebar, setShowSidebar ] = useState<boolean>(false)

  const isTabletOrLarger = useMediaQuery({minWidth : 700})

  // useScrollPosition(
  //   ({ prevPos, currPos }) => {
  //     console.log(currPos.x)
  //     console.log(currPos.y)
  //   },
  //   [],
  //   undefined,
  //   undefined,
  //   500
  // )

  return (
    <>
      <Header setShowSidebar={setShowSidebar}/>
      {isTabletOrLarger && (
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      )}
      <main className='site__main'>{children}</main>
    </>
  )
}

interface IHeaderProps {
  setShowSidebar: react.Dispatch<react.SetStateAction<boolean>>, 
}
const Header = ({setShowSidebar}: IHeaderProps) => {
  const slidesArr = useContext(ContentContext).slidesArr
  const isTabletOrLarger = useMediaQuery({minWidth : 700})

  return(
    <header className={
      isTabletOrLarger ? 'layout__header --header-bg-transparent' : 'layout__header --header-bg-green'
    }>
      <flex-wrapper class='header-wrapper'>
        <HashLink className='header__h1-name-link'
          to={`#home-slide`}
          scroll = {scrollWidthOffset}
        >
          <h1 className="header__h1-name">Martin Gullbrandsson</h1>
        </HashLink>       

        <nav className="header__nav">        
          {isTabletOrLarger 
            ? (
              <>
                {[...slidesArr].map(slide => (
                  <HashLink className={"header-nav__slide-links"} 
                    key={`${slide}`} 
                    to={`#${slide}-slide`}
                    scroll = {scrollWidthOffset}
                  > {slide[0].toUpperCase() + slide.substring(1)}
                  </HashLink>
                ))}

                <div className="header-nav__contact-btn dropdown-container">
                  Contact

                  <div className='--contact-dropdown dropdown-menu'>
                    <Link to="https://www.github.com/gullbra" className='--contact-link' title='Gullbra @ Github'> 
                      <FontAwesomeIcon icon={faGithub} className="fa-icon-overrides-layout-header"/> 
                    </Link>
                    <Link to="" className='--contact-link' title='Gullbra @ LinkedIn'> 
                      <FontAwesomeIcon icon={faLinkedin} className="fa-icon-overrides-layout-header"/> 
                    </Link>
                    {/* // TODO: Mail
                    <Link to="" className='--contact-link' title='Gullbra @ LinkedIn'> 
                      <FontAwesomeIcon icon={faEnvelope} className="fa-icon-overrides-layout-header"/> 
                    </Link> */}
                  </div>
                </div>
              </>
            ) : (
              <div className="--hamburger-btn" onClick={() => setShowSidebar((prev) => {return !prev})}>
                ☰
              </div>
            )
          }
        </nav>
      </flex-wrapper>
    </header>
  )
}

interface ISidebarProps {
  showSidebar: Boolean
  setShowSidebar: react.Dispatch<react.SetStateAction<boolean>>
}
const Sidebar = ({showSidebar, setShowSidebar}: ISidebarProps) => {
  const slidesArr = useContext(ContentContext).slidesArr

  return(
    <aside className={ showSidebar ? "site__sidebar --sidebar-open" : 'site__sidebar'}>
      {["home", ...slidesArr].map(slide => (
        <HashLink className='sidebar__element' to={`#${slide}-slide`} key={slide}
          scroll = {scrollWidthOffset}
          onClick={() => setShowSidebar((prev) => {return !prev})}
        > {slide[0].toUpperCase() + slide.substring(1)}
        </HashLink>
      ))}

      <flex-wrapper class="sidebar__element sidebar__contact-links-wrapper">
        <h3 className='contact-links-wrapper__contact-links-header'>Contact:</h3>
        <Link to="https://www.github.com/gullbra" className='--contact-link' title='Gullbra @ Github'> 
          <FontAwesomeIcon icon={faGithub} className="fa-icon-overrides-layout-header"/> 
        </Link>
        <Link to="" className='--contact-link' title='Gullbra @ LinkedIn'> 
          <FontAwesomeIcon icon={faLinkedin} className="fa-icon-overrides-layout-header"/> 
        </Link>
        <Link to="" className='--contact-link' title='Gullbra @ LinkedIn'> 
          <FontAwesomeIcon icon={faEnvelope} className="fa-icon-overrides-layout-header"/> 
        </Link>
      </flex-wrapper>
    </aside>
  )
}

// ! TODO: Modify and use with ./utils/useScrollPosition
// const NavBar = () => {
//  const slidesArr = useContext(ContentContext).slidesArr
//   return (
//     <nav className='site__bottom-nav-bar'>
//       {["home", ...slidesArr].map(slide => (
//         <HashLink className='bottom-nav-bar__link' to={`#${slide}-slide`} key={slide}
//           scroll = {scrollWidthOffset}
//         > {slide[0].toUpperCase()}
//         </HashLink>
//       ))}
//     </nav>
//   ) 
// }