let client_id = '1278b361ca2b4bcbb31f8789c30e9cb8';
let redirect_uri = 'http://localhost:3000/';
let scope = 'playlist-modify-private';

const redirectToSpotify = () => {
    // let stateKey = 'spotify_auth_state';
    let url = 'https://accounts.spotify.com/authorize?' +
        'client_id=' + encodeURIComponent(client_id) +
        '&redirect_uri=' + encodeURIComponent(redirect_uri) +
        '&scope=' + encodeURIComponent(scope) +
        '&response_type=token&show_dialog=true';

    window.location = url;
}

const setTokenToLocalStorage = () => {
    let hash = window.location.hash;
    let access_token = hash.substring(hash.indexOf('=') + 1, hash.indexOf('&'));
    localStorage.setItem("token", access_token);
    return access_token;
}

export { redirectToSpotify, setTokenToLocalStorage, client_id };
