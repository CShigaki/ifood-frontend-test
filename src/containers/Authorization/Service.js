const SPOTIFY_AUTHORIZATION_URL = 'https://accounts.spotify.com/authorize';
const CLIENT_ID = '184847d994b84a4dbc517fe7325dce8d';
const REDIRECT_URI = 'http://localhost:1234';
const RESPONSE_TYPE = 'token';

export const redirectToAuthorizationUrl = () => {
  window.location.href = `${SPOTIFY_AUTHORIZATION_URL}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&show_dialog=true`;
};