import React from 'react'
import data from '../data/Data2'

const TrackComp = () => {

    let uniq = []
    let uniq2 = []
    let baris = -1;

    //FILTERING DOUBLE DATA
    const filter = data.filter((track) => {
        if (!uniq.includes(track.album.id)) {
            uniq.push(track.album.id)
        }

        return track.album.id === uniq[uniq.length - 1]
    })

    for (let index = 0; index < filter.length; index++) {
        if (index % 4 === 0) {
            uniq2.push([]);
            baris++;
        }
        uniq2[baris].push(filter[index])
    }

    return (
        <>
            {
                uniq2.map((res, index) => {
                    return <tr key={res[index].album.id}>{
                        res.map(({ album }) =>
                            <td key={album.id}>
                                <img src={album.images[1].url} alt={album.name} />
                                <p>{album.artists[0].name}</p>
                                <p>{album.name}</p>
                            </td>
                        )
                    }</tr>
                })
            }
        </>
    )
}

export default TrackComp