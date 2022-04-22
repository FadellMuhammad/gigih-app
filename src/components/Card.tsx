import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSelect } from '../reducers/apiSlice';
import './Card.scss';

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

const Card = ({ item }: { item: ItemType }) => {
  const dispatch = useDispatch();
  const { dataSelect } = useSelector((state:any) => state.dataSelect);

  const [select, setSelect] = useState(() => {
    if (dataSelect[item.id] === undefined) {
      return false;
    } else {
      return true;
    }
  });

  const handleSelect = (e: any) => {
    e.preventDefault();
    if (select === false) {
      dispatch(getSelect({ ...dataSelect, [item.id]: item }));
    } else {
      const temp = { ...dataSelect };
      delete temp[item.id];
      dispatch(getSelect({ ...temp }));
      1;
    }
    setSelect(!select);
  };

  function millisToMinutesAndSeconds(millis: number) {  
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ':' + (parseInt(seconds) < 10 ? '0' : '') + seconds;
  }

  return (
    <li>
      <img src={item.album.images[1].url} alt={item.album.name} />
      <button onClick={handleSelect} className="btn-selected">
        {select ? 'Deselect' : 'Select'}
      </button>
      <div className="desc">
        <p className="max-lines">Title : {item.album.name}</p>
        <p className="max-lines">Artist : {item.album.artists[0].name}</p>
        <p className="max-lines">Duration : {millisToMinutesAndSeconds(item.duration_ms)}</p>
      </div>
    </li>
  );
};

export default Card;
