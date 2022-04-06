import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card';

const SelectDataComp = () => {
    const { dataSelect } = useSelector((state) => state.dataSelect);

    return (
        <div>
            <h1>select data</h1>
            <ul type='none'>
                {
                    dataSelect && Object.values(dataSelect).map(item => (
                        <Card key={item.id} item={item} />
                    ))
                }
            </ul>
        </div>
    )
}

export default SelectDataComp