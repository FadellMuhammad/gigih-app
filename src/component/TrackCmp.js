import React, { useEffect, useState } from 'react'

const TrackCmp = ({ comp }) => {

    const [select, setSelect] = useState('');

    const handleClick = () => {
        setSelect(!select);
        let current_selected = JSON.parse(localStorage.getItem('selected_item'));
        if (select === false) {
            current_selected[comp.id] = comp;
        } else {
            delete current_selected[comp.id]
        }
        localStorage.setItem('selected_item', JSON.stringify(current_selected))
    }

    useEffect(() => {
        let current_selected = JSON.parse(localStorage.getItem('selected_item'));
        if (current_selected[comp.id] === undefined) {
            setSelect(false)
        } else {
            setSelect(true)
        }
    }, [comp])

    return (
        <>
            {
                <li key={comp.id}>
                    <img src={comp.images[1].url} alt={comp.name} />
                    <div className='btn-comp'>
                        <div className='title-comp'>
                            <p className='title-name max-lines'>{comp.name}</p>
                            <p>{comp.artists[0].name}</p>
                        </div>
                        <button onClick={handleClick} className='btn-select'>{select ? 'Deselect' : 'Select'}</button>
                    </div>
                </li>
            }
        </>
    )
}

export default TrackCmp