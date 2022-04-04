import React, { useState } from 'react'
import { addItemsToPlaylist, createPlaylist } from '../api/Services'
import '../styles/Playlists.css'

const Form = () => {

    const [dataInput, setDataInput] = useState({});
    // const [musikItem, setMusikItem] = useState([]);

    const getPlaylist = () => {
        // createPlaylist(dataInput).then(res => setPlaylist({...playlist, res}))
        createPlaylist(dataInput).then(res => {
            let playlistItem = JSON.parse(localStorage.getItem('playlistItem'));
            playlistItem[res.id] = res;
            localStorage.setItem('playlistItem', JSON.stringify(playlistItem));
            if (localStorage.getItem('playlistID') !== undefined) {
                localStorage.setItem('playlistID', res.id);
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        new Promise(() => {
            getPlaylist()
        }).then(
            setTimeout(() => {
                addItemsToPlaylist().then(res => console.log(res))
                // let arr = []
                let selected_item = JSON.parse(localStorage.getItem('selected_item'));
                let playlistItem = localStorage.getItem('playlistItem');

                let musikItem = JSON.parse(localStorage.getItem('musikItem'));

                let obj = Object.values(selected_item);

                let musik = { obj };

                musikItem[playlistItem] = musik;
                // arr.push(Object.values(selected_item));

                localStorage.setItem('musikItem', JSON.stringify(musikItem));
            }, 1000)
        ).then(
            setTimeout(() => {
                localStorage.setItem('selected_item', JSON.stringify({}))
                window.location.reload()
            }, 2000)
        )
        // setPlaylist([...playlist, dataInput])
    }

    const handleChange = (e) => {
        setDataInput({
            ...dataInput, [e.target.name]: e.target.value
        })
    }

    const playlistItem = JSON.parse(localStorage.getItem('playlistItem'));
    // console.log(playlistItem);
    // const musikItem = Object.values(JSON.parse(localStorage.getItem('musikItem')));
    // console.log(musikItem);
    console.log(Object.values(playlistItem))

    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Title : </label>
                <input type="text" name='name' id='name' minLength='10' required onChange={handleChange} /> <br />
                <label htmlFor="description">Description : </label>
                <input type="text" name="description" required minLength='10' onChange={handleChange} /> <br />
                <input type="submit" value='submit' className='form-btn' />
            </form>
            {/* {console.log()} */}
            <div className='playlist'>
                <h2>Playlist</h2>
                <ul type='none'>
                    {
                        playlistItem && Object.values(playlistItem).map(value => (
                            <li key={value.id}>
                                <h3>{value.name}</h3>
                                <p>{value.description}</p>
                            </li>
                        ))
                    }
                    {/* {
                        musikItem.map((val, index) => (
                            val.obj.map(item => (
                                <li key={item.id}>
                                    <img src={item.album.images[1].url} alt={item.name} />
                                    <div className='desc'>
                                        <div className='title-comp'>
                                            <p className='title-name max-lines'>{item.album.name}</p>
                                            <p>{item.album.artists[0].name}</p>
                                        </div>
                                    </div>
                                </li>
                            ))
                        ))
                    }
                {console.log(musikItem)} */}
                </ul>
            </div>
        </div>
    )
}

export default Form