'use strict';

import React from 'react'

import Grid from 'material-ui/Grid';
import Card, {CardContent } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import Collapse from 'material-ui/transitions/Collapse';
import InboxIcon from 'material-ui-icons/Input';

import ProductDetailsShort from './ProductDetailsShort'

import styles from '../styles/ServicePart.css';

class ProductSearchResult extends React.Component {

  constructor(){
    super();

    this.state = {
      isExpanded: false
    }
  }

  onExpand = () => {
    this.setState({ isExpanded: !this.state.isExpanded })
  }

  render() {

    const { product, parent } = this.props;

    return (
      <Card className={styles.main}>
        <Grid container direction="column">
          <Grid item>
            <Grid container direction="row">
              <Grid item xs={12} className={styles.card}>
                <div className={styles.productImage}>
                  <img width="100" height="100" src={product.localPath} />
                </div>
                <div className={styles.details}>
                  <CardContent className={styles.content}>

                    <Typography type="headline" noWrap>
                      { product.name }
                    </Typography>

                    <Typography type="subheading" secondary>
                      Part number: { product.id }
                    </Typography>

                    <Typography type="subheading" secondary>
                      Category: { product.category }
                    </Typography>

                  </CardContent>
                </div>
                <div className={styles.icons}>
                  <IconButton onClick={ () => this.onExpand() }>
                    <InboxIcon />
                  </IconButton>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Collapse in={ this.state.isExpanded } transitionDuration="auto" unmountOnExit>
              <Grid container direction="row">
                <Grid item xs={1}></Grid>
                <Grid item xs={11}>
                  <CardContent>
                    <ProductDetailsShort parent={ parent } product={ product } level={ 1 } />
                  </CardContent>
                </Grid>
              </Grid>
            </Collapse>
          </Grid>
        </Grid>
      </Card>
    );
  }
}

export default ProductSearchResult;
