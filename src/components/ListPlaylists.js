import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { getPlaylist } from '../api/Services';
import './ListPlaylist.scss'

const ListPlaylists = () => {

  const [playlist, setPlaylist] = useState('')
  const { userId } = useSelector((state) => state.userId);

  useEffect(() => {
    getPlaylist(userId).then(res => setPlaylist(res))
  }, [userId])

  return (
    <div className='list-playlist'>
      <h2>Playlist</h2>
      <ul type='none'>
        {
          playlist?.items && playlist.items.map(item => (
            <li key={item.id}>
              <img src={item.images[0].url} alt={item.name} />
              <div className='desc'>
                {/* <div className='title-comp'> */}
                <p className='max-lines'>{item.name}</p>
                {/* </div> */}
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default ListPlaylists