import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';

import './Playlist.scss';

const Playlist = ({ playlists }) => {
  return (
    <Grid container spacing={40} className="playlists">
      {0 === playlists.length &&
        <h3>No results.</h3>
      }
      {playlists.map((playlist) => {
        return (
          <Grid item xs={3}>
            <Card className="playlist-card" raised>
              <div className="playlist-image">
                <a href={playlist.external_urls.spotify} target="_blank">
                  <CardMedia
                    component="img"
                    className="playlist-image_card-image"
                    image={playlist.images[0].url}
                    title={playlist.name}
                  />
                </a>
              </div>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}

Playlist.propTypes = {
  playlists: PropTypes.array,
};

export default Playlist;