const baseURL = 'https://api.spotify.com/v1';

const getSearchValue = (search) => {
  const result = fetch(`${baseURL}/search?type=track&include_external=audio&q=${search}&limit=12`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
    .then(res => res.json())
  return result
}

const getCurrentUserProfile = () => {
  const result = fetch(`${baseURL}/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
    .then(res => res.json())
  return result
}


const createPlaylist = ({ name, description }, userId) => {
  const result = fetch(`${baseURL}/users/${userId}/playlists`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify({
      'name': `${name}`,
      'description': `${description}`,
      'public': false
    })
  })
    .then(res => res.json())
  return result
}

const addItemsToPlaylist = (playlistId, dataSelected) => {
  const uri = [];

  for (let index = 0; index < dataSelected.length; index++) {
    uri.push(dataSelected[index].uri);
  }

  const result = fetch(`${baseURL}/playlists/${playlistId}/tracks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify({
      'uris': uri
      ,
      'position': 0
    })
  })
    .then(res => res.json())
  return result
}

const getPlaylist = (userId) => {
  const result = fetch(`${baseURL}/users/${userId}/playlists`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
  })
    .then(res => res.json())
  return result
}


export { getSearchValue , getCurrentUserProfile, createPlaylist, addItemsToPlaylist, getPlaylist }