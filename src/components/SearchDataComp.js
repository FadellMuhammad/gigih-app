import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Search } from '../api/Services';
import { getSearch } from '../reducers/apiSlice';
import Card from './Card'

const SearchDataComp = () => {
    const { dataSearch } = useSelector((state) => state.dataSearch);
    const { dataSelect } = useSelector((state) => state.dataSelect);

    const [search, setSearch] = useState('');
    const dispatch = useDispatch();

    const getData = () => {
        Search(search).then(data => dispatch(getSearch(data)));
    }

    return (
        <div className='search'>
            <div className="container">
                <div className="search">
                    <h1 className='title'>Search Song</h1>
                    <input name='search' type="text" placeholder="search song" onChange={(e) => setSearch(e.target.value)} className="input" />
                    <button onClick={getData} className='btn-search'>Search</button>
                </div>

                <ul type="none">
                    {
                        dataSearch?.tracks && dataSearch.tracks.items
                            .filter(item => dataSelect[item.id] === undefined)
                            .map((item) => (
                                <Card key={item.id} item={item} />
                            ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default SearchDataComp