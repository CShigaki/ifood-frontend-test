import axios from 'axios';

const SPOTIFY_FEATURED_PLAYLISTS_URL = 'https://api.spotify.com/v1/browse/featured-playlists';
const PLAYST_FILTERS_URL = 'http://www.mocky.io/v2/5a25fade2e0000213aa90776';

const discardEmptyFilters = (filters) => {
  let newFilters = Object.assign({}, filters);

  Object.keys(filters).map(key => {
    if ('' === newFilters[key]) {
      delete newFilters[key];
    }
  });

  return newFilters;
};

export const getFeaturedPlaylists = (accessToken, filters) => {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    params: discardEmptyFilters(filters),
  };

  return axios.get(`${SPOTIFY_FEATURED_PLAYLISTS_URL}`, config);
};

export const getPlaylistFilters = () => {
  return axios.get(PLAYST_FILTERS_URL);
};