'use strict';

import React from 'react'

import Tabs, { Tab } from 'material-ui/Tabs';

class AvaliableIn extends React.Component {

  constructor() {
    super();

    this.state = {
      index: 0
    }
  }

  handleChange = (event, index) => {
    this.setState({ index });
  };


  render() {

    return (
      <Tabs index={this.state.index} onChange={this.handleChange} >
        <Tab label="Parts" />
        <Tab label="Rentals" />
        <Tab label="Serices" />
      </Tabs>
    );

  }
}

export default AvaliableIn;
