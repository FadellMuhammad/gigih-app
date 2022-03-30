import React from 'react'
// import data from '../data/Data2'

const TrackComp = ({ data }) => {

    // let uniq = []
    let uniq2 = []
    let baris = -1;

    //FILTERING DOUBLE DATA
    // const filter = data.filter((track) => {
    //     if (!uniq.includes(track.album.id)) {
    //         uniq.push(track.album.id)
    //     }

    //     return track.album.id === uniq[uniq.length - 1]
    // })


    // if (data.albums?.items !== undefined) {
    //     uniq.push(data.albums.items)
    // }

    // for (let index = 0; index < uniq.length; index++) {
    //     if (index % 4 === 0) {
    //         uniq2.push([]);
    //         baris++;
    //     }
    //     uniq2[baris].push(uniq[index])
    // }

    data && data.albums.items.map((item, index) => {
        if (index % 4 === 0) {
            uniq2.push([])
            baris++;
        }
        uniq2[baris].push(item)
    })

    return (
        <>
                {/* {console.log(uniq2)} */}
            {

                uniq2.map((res, index) => {
                    return <tr key={index}>{
                        res.map(( item ) =>
                            <td key={item.id}>
                                <img src={item.images[1].url} alt={item.name} /> <br />
                                <p>{item.name}</p>
                            </td>
                            // <td key={album.id}>
                            //     <img src={album.images[1].url} alt={album.name} />
                            //     <p>{album.artists[0].name}</p>
                            //     <p>{album.name}</p>
                            // </td>
                        )
                    }</tr>
                })
            }
        </>
    )
}

export default TrackComp