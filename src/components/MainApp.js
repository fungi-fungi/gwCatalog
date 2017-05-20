'use strict';

import React, { PropTypes as T } from 'react'

class MainApp extends React.Component {

  static contextTypes = {
    router: T.object
  }

  render() {
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.route.auth
      })
    }

    return (
      <div>
        <div> {children} </div>
      </div>
    );
  }
}

export default MainApp;
