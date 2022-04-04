import React, { useEffect, useState } from 'react'

const TrackComp = ({ item, handleRef }) => {

    const [select, setSelect] = useState('');

    const handleSelect = (e) => {
        e.preventDefault();
        setSelect(!select);

        let current_selected = JSON.parse(localStorage.getItem('selected_item'));
        if (select === false) {
            current_selected[item.id] = item;
        } else {
            delete current_selected[item.id]
        }
        localStorage.setItem('selected_item', JSON.stringify(current_selected))
        handleRef(!select);
    }
    
    useEffect(() => {
        let current_selected = JSON.parse(localStorage.getItem('selected_item'));
        if (current_selected[item.id] === undefined) {
            setSelect(false)
        } else {
            setSelect(true)
        }
    }, [item])

    return (
        <>
            {
                <li key={item.id}>
                    <img src={item.album.images[1].url} alt={item.name} />
                    <div className='desc'>
                        <div className='title-comp'>
                            <p className='title-name max-lines'>{item.album.name}</p>
                            <p>{item.album.artists[0].name}</p>
                        </div>
                        <button onClick={handleSelect} className='btn-select'>{select ? 'Deselect' : 'Select'}</button>
                    </div>
                </li>
            }
        </>
    )
}

export default TrackComp