import react from 'react'

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
    </>
  )
}

export default Layout