import React, { useState } from 'react'
import TrackComp from './TrackComp';
import '../styles/Home.css'

const TrackList = ({ data }) => {

    const selected_item = JSON.parse(localStorage.getItem('selected_item'));
    const [refresh, setRefresh] = useState(false);

    const handleRef = () => {
        setRefresh(!refresh);
    }

    return (
        <>
            <h1>Selected</h1>
            <ul className='list' type='none'>
                {
                    selected_item && Object.values(selected_item).map(item => (
                        <TrackComp key={item.id} item={item} handleRef={handleRef} />
                    ))
                }
            </ul>
            <h1>Result Song</h1>
            <ul className='list' type='none'>
                {
                    data && data.tracks.items.filter(item => !(item.id in selected_item)).map(item => (
                        <TrackComp key={item.id} item={item} handleRef={handleRef} />
                    ))
                }
            </ul>
        </>
    )
}

export default TrackList