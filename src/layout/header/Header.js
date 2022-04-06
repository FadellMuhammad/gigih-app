import { Button } from 'antd';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { redirectToSpotify } from '../../api/Auth'
import './Header.css'

const Header = () => {
    let history = useHistory()
    const [login, setLogin] = useState(
        () => {
            if (localStorage.getItem('token') === null || localStorage.getItem('token') === '') {
                return false
            } else {
                return true
            }
        }
    );
    const authorizedSpotify = () => {
        if (login === false) {
            redirectToSpotify()
        } else {
            localStorage.removeItem('token')
            history.push('/')
        }
        setLogin(!login)
    }

    return (
        <div className="header">
            <div className="container">
                <div className="header-item">
                    <h1>Spotify</h1>
                    <Button onClick={authorizedSpotify} className="login">{login ? 'Logout' : 'Login'}</Button> <br />
                </div>
            </div>
        </div>
    )
}

export default Header