import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSelect } from '../reducers/apiSlice'

const Card = ({ item }) => {
    const dispatch = useDispatch()
    const { dataSelect } = useSelector((state) => state.dataSelect)
    const [select, setSelect] = useState(
        () => {
            if (dataSelect[item.id] === undefined) {
                return false
            } else {
                return true
            }
        }
    )

    const handleSelect = (e) => {
        e.preventDefault();
        if (select === false) {
            dispatch(getSelect({ ...dataSelect, [item.id]: item }))
        } else {
            let temp = { ...dataSelect }
            delete temp[item.id]
            dispatch(getSelect({ ...temp }))
        }
        setSelect(!select);
    }

    return (
        <>
            <li type={item.id}>
                <img src={item.album.images[1].url} alt={item.name} />
                <div className='desc'>
                    <div className='title-comp'>
                        <p className='title-name max-lines'>{item.album.name}</p>
                        <p>{item.album.artists[0].name}</p>
                    </div>
                    <button onClick={handleSelect} className='btn-select'>{select ? 'Deselect' : 'Select'}</button>
                </div>
            </li>
        </>
    )
}

export default Card