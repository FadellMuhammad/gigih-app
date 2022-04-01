import React from 'react'
import TrackCmp from './TrackCmp';
import '../pages/Home.css'

const TrackList = ({ data }) => {

    const selected_item = JSON.parse(localStorage.getItem('selected_item'));

    return (
        <>
            <h1>Selected</h1>
            <ul className='list' type='none'>
                {
                    selected_item && Object.values(selected_item).map(item => (
                        <TrackCmp comp={item} />
                    ))
                }
            </ul>
            <h1>Result Song</h1>
            <ul className='list' type='none'>
                {
                    data && data.albums.items.filter(item => !(item.id in selected_item)).map(item => (
                        <TrackCmp comp={item} />
                    ))
                }
            </ul>
        </>
    )
}

export default TrackList