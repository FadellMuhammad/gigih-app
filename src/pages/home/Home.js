import React, { useEffect, useState } from 'react'
import { redirectToSpotify, setTokenToLocalStorage } from '../../api/Auth'
import { getSearch } from '../../reducers/apiSlice';
import { useDispatch } from 'react-redux';
import { Search } from '../../api/Services';
import Profile from '../../components/Profile';
import Playlists from '../playlists/Playlists';
import SearchDataComp from '../../components/SearchDataComp';
import SelectDataComp from '../../components/SelectDataComp';
import '../../styles/Home.css';

const Home = () => {
    const [login, setLogin] = useState(false);
    const [search, setSearch] = useState('');
    const [token, setToken] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        setToken(setTokenToLocalStorage);
        if (token !== '') {
            setLogin(true)
        }
    }, [token])

    const authorizedSpotify = () => {
        if (localStorage.getItem('token') === null || localStorage.getItem('token') === '') {
            redirectToSpotify()
        } else {
            setLogin(false)
            localStorage.removeItem("token");
            window.location = 'http://localhost:3000/';
        }
    }

    const getData = () => {
        if (search !== '' && token !== null) {
            Search(search).then(data => dispatch(getSearch(data)));
        }
    }

    return (
        <div className='home'>
            <div className="header">
                <h1>Spotify</h1>
                <button onClick={authorizedSpotify} className="login">{login ? 'Logout' : 'Login'}</button> <br />
            </div>
            {
                token !== null && token !== ''
                    ? <>
                        <div className='profile'>
                            <Profile />
                        </div>
                        <div className='form'>
                            <Playlists />
                        </div>
                        <div className="search">
                            <h1 className='title'>Search Song</h1>
                            <input name='search' type="text" placeholder="search song" onChange={(e) => setSearch(e.target.value)} className="input" />
                            <button onClick={getData} className='btn-search'>Search</button>
                            <div className='track-list'>
                                <SelectDataComp />
                                <SearchDataComp />
                            </div>
                        </div>
                    </>
                    : <p>Silakann Login terlebih dahulu...</p>
            }
        </div>
    )
}

export default Home