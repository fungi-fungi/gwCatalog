'use strict';

import React from 'react';

import Grid from 'material-ui/Grid';

import CategoriesCatalogEntry from './CategoriesCatalogEntry';

class CategoryCatalogEntries extends React.Component {

  render() {

    const { categories } = this.props;

    return (
      <Grid container>
        <Grid item xs={12} sm={12}>
          { categories ? (
            categories.map( (category) => {
              return <CategoriesCatalogEntry key={category.mgid} category={category} />
            })
          ) : (
            <CircularProgressBar />
          ) }
        </Grid>
      </Grid>

    );

  }
}

export default CategoryCatalogEntries;
