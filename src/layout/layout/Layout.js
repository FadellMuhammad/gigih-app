import React from 'react'
import Header from '../header/Header'

const Layout = (Children) => {
  const p = (props) => (
    <>
      <Header />
      <Children {...props} />
    </>
  )
  return p
}

export default Layout 