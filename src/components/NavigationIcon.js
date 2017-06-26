'use strict';

import React from 'react';

import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

class NavigationIcon extends React.Component {

  render() {

    const {history, icon, newPath} = this.props;

    console.log(this.props);

    return (
      <IconButton contrast onClick={ () => history.push(newPath) }>
        <MenuIcon />
      </IconButton>
    );
  }
}

export default NavigationIcon;
