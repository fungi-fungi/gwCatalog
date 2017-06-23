'use strict';

import React from 'react';
import { Link } from 'react-router';

import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

let buildLink = (category) => {
  if (category.hasChildren) {
    return '/categories/' + category.mgid + '/children'
  } else {
    return '/categories/' + category.mgid
  }
}

class CategoryCatalogEntry extends React.Component {

  render() {

    const { category } = this.props;


    return (

      <Paper elevation={4}>
        <Link to={ buildLink(category) }>
          <Typography type="headline" component="h3">
            {category.name}
          </Typography>
        </Link>
      </Paper>

    );

  }
}

export default CategoryCatalogEntry;
