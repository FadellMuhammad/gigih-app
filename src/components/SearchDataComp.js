import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'

const SearchDataComp = () => {
    const { dataSearch } = useSelector((state) => state.dataSearch);
    const { dataSelect } = useSelector((state) => state.dataSelect);
    
    return (
        <div>
            <h1>searchDataComp</h1>
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