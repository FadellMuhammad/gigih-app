import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSearchValue } from '../api/Services';
import { getSearch } from '../reducers/apiSlice';
import { Button } from 'antd'
import Card from './Card'

const SearchDataComp = () => {
  const { dataSearch } = useSelector((state:any) => state.dataSearch);
  const { dataSelect } = useSelector((state:any) => state.dataSelect);

  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const getData = () => {
    getSearchValue(search).then(data => dispatch(getSearch(data)));
  }

  type ItemType = {
      id: string | number;
      duration_ms: number;
      album: {
        name: string;
        images: [
          {
            url: string;
          },
          {
            url: string;
          }
        ];
        artists: [
          {
            name: string;
          }
        ];
      };
  };

  return (
    <div className='search'>
      <div className="search">
        <input name='search' type="text" placeholder="search song" onChange={(e) => setSearch(e.target.value)} className="input" />
        <Button onClick={getData} className='btn-search'>Search</Button>
      </div>

      <ul style={{listStyle:'none'}}>
        {
          dataSearch?.tracks && dataSearch.tracks.items
            .filter((item: { id: string | number; }) => dataSelect[item.id] === undefined)
            .map((item: ItemType) => (
              <Card key={item.id} item={item} />
            ))
        }
      </ul>
    </div>
  )
}

export default SearchDataComp