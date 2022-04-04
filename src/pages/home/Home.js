import React, { useEffect, useState } from 'react'
import { redirectToSpotify, setTokenToLocalStorage } from '../../api/Auth'
import { Search } from '../../api/Services';
import TrackList from '../../components/TrackList';
import Profile from '../../components/Profile';
import '../../styles/Home.css';
import Playlists from '../playlists/Playlists';

const Home = () => {
    const [data, setData] = useState('');
    const [login, setLogin] = useState(false);
    const [search, setSearch] = useState('');
    const [token, setToken] = useState('');

    if (localStorage.getItem('selected_item') === null) {
        localStorage.setItem('selected_item', JSON.stringify({}));
    }

    if (localStorage.getItem('playlistItem') === null) {
        localStorage.setItem('playlistItem', JSON.stringify({}));
    }

    if (localStorage.getItem('musikItem') === null) {
        localStorage.setItem('musikItem', JSON.stringify({}));
    }

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

    const addInput = (e) => {
        setSearch(e.target.value);
    }

    const getData = () => {
        if (search !== '' && token !== null) {
            Search(search).then(data => setData(data));
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
                            <input name='search' type="text" placeholder="search song" onChange={addInput} className="input" />
                            <button onClick={getData} className='btn-search'>Search</button>
                            <div className='track-list'>
                                {
                                    <TrackList data={data} />
                                }
                            </div>
                        </div>
                    </>
                    : <p>Silakann Login terlebih dahulu...</p>
            }
        </div>
    )
}

export default Home