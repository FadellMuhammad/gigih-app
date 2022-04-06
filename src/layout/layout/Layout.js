import React from 'react'
import Header from '../header/Header'

const Layout = (Children) => {
    return (props) => (
        <>
            <Header />
            <Children {...props} />
        </>
    )
}

export default Layout