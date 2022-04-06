import React, { useState } from 'react'
import { addItemsToPlaylist, createPlaylist } from '../api/Services'
import { useDispatch, useSelector } from "react-redux";
import '../styles/Playlists.css'
import { getPlaylistId, getSelect } from '../reducers/apiSlice';

const Form = () => {

    const [formInput, setFormInput] = useState('');
    const { userId } = useSelector((state) => state.userId);
    const { dataSelect } = useSelector((state) => state.dataSelect);
    const dataSelected = Object.values(dataSelect)
    const dispatch = useDispatch();

    const getPlaylist = async () => {
        return await createPlaylist(formInput, userId).then(res => {
            dispatch(getPlaylistId(res.id))
            return res.id
        });
    }

    const addPlaylistId = async (playlistId) => {
        await addItemsToPlaylist(playlistId, dataSelected).then(res => console.log(res))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        getPlaylist()
            .then((playlistId) => addPlaylistId(playlistId))
        delete {...dataSelect}
        dispatch(getSelect(''))
    }


    const handleChange = (e) => {
        setFormInput({
            ...formInput, [e.target.name]: e.target.value
        })
    }

    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Title : </label>
                <input type="text" name='name' id='name' minLength='10' required onChange={handleChange} /> <br />
                <label htmlFor="description">Description : </label>
                <input type="text" name="description" required minLength='10' onChange={handleChange} /> <br />
                <input type="submit" value='submit' className='form-btn' />
            </form>
        </div>
    )
}

export default Form