'use strict';

import React from 'react'

import Typography from 'material-ui/Typography';

class ResultsCouter extends React.Component {

  render() {

    const { totalAmount } = this.props;

    return (
      <div>
        { totalAmount > 0 ? (
          <Typography align="center" type="subheading" gutterBottom>
            Results found: { totalAmount }
          </Typography>
        ) : (
          <div />
        )}
      </div>
    );

  }
}

export default ResultsCouter;
