/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';

const SelectDataComp = () => {
  const { dataSelect } = useSelector((state: any) => state.dataSelect);
  const data = Object.values(dataSelect)

  return (
    <div className="selected">
      {dataSelect ? (
        <ul style={{ listStyle: 'none' }}>
          {data.map((item:any) => (
            <Card key={item.id} item={item} />
          ))}
        </ul>
      ) : (
        <p className="data-selected">Belum ada data yang diselect...</p>
      )}
    </div>
  );
};

export default SelectDataComp;
