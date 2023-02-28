import react from 'react'

const Layout = ({children}:{children: React.ReactNode}) => {
  return (
    <>
      <header className='site__header'>M. A. Gullbrandson</header>
      <main className='site__main'>{children}</main>
    </>
  )
}

export default Layout