const baseURL = 'https://api.spotify.com/v1';

const Search = (search) => {
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

const createPlaylist = ({ name, description }) => {
    const result = fetch(`${baseURL}/users/${localStorage.getItem('userID')}/playlists`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
            "name": `${name}`,
            "description": `${description}`,
            "public": false
        })
    })
        .then(res => res.json())
    return result
}

const addItemsToPlaylist = () => {
    const uri = []

    const selected_item = JSON.parse(localStorage.getItem('selected_item'));
    // console.log("selected item ",selected_item);

    const trackID = Object.values(selected_item);
    // console.log('trackID',trackID);

    for (let index = 0; index < trackID.length; index++) {
        uri.push(trackID[index].uri);
    }

    const result = fetch(`${baseURL}/playlists/${localStorage.getItem('playlistID')}/tracks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
            "uris": uri
            ,
            "position": 0
        })
    })
        .then(res => res.json())
    return result
}


export { Search, getCurrentUserProfile, createPlaylist, addItemsToPlaylist }