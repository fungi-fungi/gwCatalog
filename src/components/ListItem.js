'use strict';

import React from 'react'


class ListItem extends React.Component {

  render() {

    return (
      <div className="infinite-list-item">
        List Item {this.props.num}
      </div>
    );
    
  }
}

export default ListItem;
