'use strict';

import React from 'react'

import Typography from 'material-ui/Typography';

class NoMoreResults extends React.Component {

  render() {

    const { isAllLoaded } = this.props;

    return (
      <div>
        { isAllLoaded ? (
          <Typography align="center" type="subheading" gutterBottom>
            No more results
          </Typography>
        ) : (
          <div />
        )}
      </div>
    );

  }
}

export default NoMoreResults;
