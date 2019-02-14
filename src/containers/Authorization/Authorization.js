import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import queryString from 'query-string';
import { redirectToAuthorizationUrl } from './Service';

import './Authorization.scss';

const Authorization = ({ setAuthorizationToken }) => {
  useEffect(() => {
    let parsedHash = queryString.parse(window.location.hash);
    if (!parsedHash.access_token) {
      return;
    }

    setAuthorizationToken(parsedHash.access_token);
  });

  return (
    <div className="authorization-container">
      <Card
      raised
      >
        <CardContent>
          <h3>It seems you have not authorized this application yet.</h3>
          <p>Please authorize it by clicking the button below.</p>
          <Button
            variant="contained"
            color="primary"
            onClick={redirectToAuthorizationUrl}
          >
            AUTHORIZE
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

Authorization.propTypes = {
  setAuthorizationToken: PropTypes.func,
};

export default Authorization;