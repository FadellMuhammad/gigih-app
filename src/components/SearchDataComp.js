import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSearchValue } from '../api/Services';
import { getSearch } from '../reducers/apiSlice';
import Card from './Card'
import { Button } from 'antd'

const SearchDataComp = () => {
  const { dataSearch } = useSelector((state) => state.dataSearch);
  const { dataSelect } = useSelector((state) => state.dataSelect);

  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const getData = () => {
    getSearchValue(search).then(data => dispatch(getSearch(data)));
  }

  return (
    <div className='search'>
      <div className="search">
        <input name='search' type="text" placeholder="search song" onChange={(e) => setSearch(e.target.value)} className="input" />
        <Button onClick={getData} className='btn-search'>Search</Button>
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
  )
}

export default SearchDataComp