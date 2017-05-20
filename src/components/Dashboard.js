'use strict';

import React from 'react';

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

Dashboard.displayName = 'Dashboard';

export default Dashboard;
