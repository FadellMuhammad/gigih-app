// import React, { useEffect, useState } from 'react'
import React from 'react';
import { Redirect } from 'react-router-dom';
import { setTokenToLocalStorage } from '../../api/Auth';

const LandingPage = () => {

    if (localStorage.getItem('token') === null || localStorage.getItem('token') === '') {
        setTokenToLocalStorage()
    }

    return (
        <>
            {
                localStorage.getItem('token') ? <Redirect to='/home' /> :
                    <div className='landing-page'>
                        <div className="container">
                            {/* <h1>Landing Page</h1> */}
                            <h1>Silakan Login Terlebih dahulu...</h1>
                        </div>
                    </div>
            }
        </>

    )
}

export default LandingPage