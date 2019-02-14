import React, { useEffect, useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import Filter from 'components/Filter';
import Playlist from 'components/Playlist';
import Loader from 'components/Loader';
import { getPlaylistFilters, getFeaturedPlaylists } from './Service';

import './FeaturedPlaylistSearch.scss';

const FeaturedPlaylistSearch = ({ accessToken }) => {
  const [filters, setFilters] = useState(null);
  const [playlists, setPlaylists] = useState(null);

  const [errorWhenFetchingFilter, setError] = useState(false);
  const [isLoadingPlaylists, setPlaylistLoadingState] = useState(true);
  const [wasRequestMalformed, setRequestMalformed] = useState(false);
  const [genericRequestError, setGenericRequestError] = useState(false);
  const [isTokenExpired, setTokenExpired] = useState(false);

  const [filterValues, setFilterValues] = useState({
    locale: '',
    country: '',
    timestamp: '',
    limit: 20,
    offset: 0,
  });

  const setValue = event => {
    const newState = Object.assign({}, filterValues);

    newState[event.target.name] = event.target.value;

    setFilterValues(newState);
    fetchPlaylists(newState);
  };

  const fetchPlaylists = (filters) => {
    getFeaturedPlaylists(accessToken, filters)
        .then((res) => {
          setPlaylists(res.data.playlists.items);
          setPlaylistLoadingState(false);
          setRequestMalformed(false);
        })
        .catch((err) => {
          if (401 === err.response.status) {
            setTokenExpired(true);
            setTimeout(() => {
              window.location.href = window.location.origin;
            }, 5000);
            return;
          }

          if (400 === err.response.status) {
            setPlaylistLoadingState(false);
            setRequestMalformed(true);
            return;
          }

          setGenericRequestError(true);
        })
  }

  useEffect(() => {
    if (!filters) {
      getPlaylistFilters()
        .then((res) => {
          setFilters(res.data.filters);
        })
        .catch((err) => {
          setError(true);
        });

      return;
    }

    if (!playlists) {
      fetchPlaylists(filterValues);
    }
  });

  return (
    <React.Fragment>
      {isTokenExpired &&
        <h1>Your token has expired. Redirecting back...</h1>
      }

      {!isTokenExpired &&
        <div className="featured-playlist-filters">
          {!filters &&
            <Fragment>
              <p>Loading data... please wait</p>
              <Loader/>
            </Fragment>
          }

          {(!filters && errorWhenFetchingFilter) &&
            <h2>It appears the mock API is down. Check the console for the error information and please try again later.</h2>
          }

          {filters &&
            <div className="filters-and-playlists">
              <Filter
                filters={filters}
                defaultFilterValues={filterValues}
                setValue={setValue}
              />

              {isLoadingPlaylists &&
                <Fragment>
                  <p>Loading playlists... please wait</p>
                  <Loader/>
                </Fragment>
              }

              {(!isLoadingPlaylists && !wasRequestMalformed) &&
                <Playlist
                  playlists={playlists}
                />
              }

              {(!isLoadingPlaylists && wasRequestMalformed) &&
                <h3>Incorrect filter values supplied. Change your filters and try again</h3>
              }

              {(!isLoadingPlaylists && genericRequestError) &&
                <h3>An error occurred when requesting the playlists from Spotify. Try again later.</h3>
              }
            </div>
          }
        </div>
      }
    </React.Fragment>
  );
}

FeaturedPlaylistSearch.propTypes = {
  accessToken: PropTypes.string,
};

export default FeaturedPlaylistSearch;