import React, { useState } from 'react'
import Authorization from 'containers/Authorization';
import FeaturedPlaylistSearch from 'containers/FeaturedPlaylistSearch';

import './App.scss';

const App = () => {
  const [authorizationToken, setAuthorizationToken] = useState(null);

  return (
    <div className="app">
      {!authorizationToken &&
        <Authorization
          setAuthorizationToken={setAuthorizationToken}
        />
      }

      {authorizationToken &&
        <FeaturedPlaylistSearch
          accessToken={authorizationToken}
        />
      }
    </div>
  );
}

module.hot.accept(App)

export default App;