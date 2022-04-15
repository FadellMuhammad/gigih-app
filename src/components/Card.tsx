import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSelect } from '../reducers/apiSlice';
import './Card.scss';

type ItemType = {
  id: string | number;
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

  // console.log(item);

  return (
    <li>
      <img src={item.album.images[1].url} alt={item.album.name} />
      <button onClick={handleSelect} className="btn-selected">
        {select ? 'Deselect' : 'Select'}
      </button>
      <div className="desc">
        <p className="max-lines">{item.album.name}</p>
        <p className="max-lines">{item.album.artists[0].name}</p>
      </div>
    </li>
  );
};

export default Card;
