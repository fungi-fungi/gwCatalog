'use strict';

import React from 'react';
import Infinite from 'react-infinite';

class Dashboard extends React.Component {

  constructor() {
    super();
    this.state = {
      events: [],
      isLoading: true
    }
    this.onChange = this.onChange.bind(this);
  }


  render() {
    return (
      <div>
        <div className="slds-grid slds-grid--vertical-stretch">

          <div className="slds-col slds-large-size--6-of-12">
          </div>
          <div className="slds-col slds-large-size--4-of-12">
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
