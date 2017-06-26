'use strict';

import React from 'react';
import { browserHistory } from 'react-router';;

class Callback extends React.Component {

  componentDidMount() {
    this.props.auth.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        console.log(authResult);
        browserHistory.push('/home')
      } else if (err) {
        console.log(err);
      }
    });
}

  render() {

    return (
      <div>
      </div>
    );
  }
}

export default Callback;
