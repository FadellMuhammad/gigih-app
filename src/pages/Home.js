import React, { useEffect, useState } from 'react'
import { redirectToSpotify, getToken, getAPI } from '../Auth/AuthAPI'
import TrackCmp from '../component/TrackCmp';
// import TrackComp from '../component/TrackComp';
import TrackList from '../component/TrackList';
import './Home.css';

const Home = () => {
    const [data, setData] = useState('');
    const [login, setLogin] = useState(false);
    // let search = ''
    const [search, setSearch] = useState('');
    const [token, setToken] = useState('');

    if (localStorage.getItem('selected_item') === null) {
        localStorage.setItem('selected_item', JSON.stringify({}));
    }

    const addInput = (e) => {
        // setSearch(e.target.value);
        setSearch(e.target.value);
    }

    useEffect(() => {
        setToken(getToken());

        if (token !== null && token !== '') {
            setLogin(true)
        }
    }, [token])

    const getData = () => {
        if (search !== '' && token !== null) {
            getAPI(search, token).then(res => setData(res));
        }
    }

    const authorizedSpotify = () => {
        if (getToken() === null || getToken() === '') {
            redirectToSpotify()
        } else {
            setLogin(false)
            localStorage.removeItem("token");
            window.location = 'http://localhost:3000/';
        }
    }

    return (
        <div className='home'>
            <div className="header">
                <h1>Spotify</h1>
                <button onClick={authorizedSpotify} className="login">{login ? 'Logout' : 'Login'}</button> <br />
            </div>
            <h1 className='title'>Search Song</h1>
            {
                getToken() !== null && getToken() !== ''
                    ? <div className="search">
                        <input name='search' type="text" placeholder="search song" onChange={addInput} className="input" />
                        <button onClick={getData} className='btn-search'>Search</button>
                        <div className='track-list'>
                            {
                                <TrackList data={data} />
                            }
                        </div>
                    </div>
                    : <p>Silakann Login terlebih dahulu...</p>
            }
        </div>
    )
}

export default Home