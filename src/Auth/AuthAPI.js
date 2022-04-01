// const generateRandomString = (length) => {
//     let text = '';
//     const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     for (let i = 0; i < length; i++) {
//         text += possible.charAt(Math.floor(Math.random() * possible.length));
//     }
//     return text;
// }

const redirectToSpotify = () => {
    let stateKey = 'spotify_auth_state';
    let client_id = '1278b361ca2b4bcbb31f8789c30e9cb8';
    let redirect_uri = 'http://localhost:3000/';
    // let text = generateRandomString(16);
    let scope = 'playlist-modify-private';

    let url = 'https://accounts.spotify.com/authorize?' +
        'client_id=' + encodeURIComponent(client_id) +
        '&redirect_uri=' + encodeURIComponent(redirect_uri) +
        '&scope=' + encodeURIComponent(scope) +
        '&response_type=token&show_dialog=true';

    // localStorage.setItem(stateKey, text);

    window.location = url;
    getToken()
}

const getToken = () => {
    //add Token to localStorage
    let hash = window.location.hash;
    let access_token = hash.substring(hash.indexOf('=') + 1, hash.indexOf('&'));
    localStorage.setItem("token", access_token);
    return access_token;
}

const getAPI = (search, token) => {
    const data = fetch(`https://api.spotify.com/v1/search?type=album&include_external=audio&q=${search}&limit=12`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
    return data
}

export {
    redirectToSpotify,
    getToken,
    getAPI
}