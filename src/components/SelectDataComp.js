import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card';

const SelectDataComp = () => {
  const { dataSelect } = useSelector((state) => state.dataSelect);

  return (
    <div className='selected'>
      {
        dataSelect ?
          <ul type='none'>
            {
              Object.values(dataSelect).map(item => (
                <Card key={item.id} item={item} />
              ))
            }
          </ul>
          : <p className='data-selected'>Belum ada data yang diselect...</p>
      }
    </div>
  )
}

export default SelectDataComp