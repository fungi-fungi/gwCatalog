'use strict';

import React from 'react'

import Grid from 'material-ui/Grid';
import Card, {CardContent } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';

import InboxIcon from 'material-ui-icons/Input';

import ProductDetailsWithLoader from './ProductDetailsWithLoader'

import styles from '../styles/ServicePart.css'

class ServicePart extends React.Component {

  constructor() {
    super();

    this.state = {
      isExpaned: false
    }
  }

  onExpand = (id, callback) => {
    this.setState({ isExpanded: !this.state.isExpanded })
    callback(id);
  }

  render() {


    const { servicePart, productDetails, onExpand } = this.props;

    return (

      <Card>
        <Grid container direction="column">
          <Grid item>
            <Grid container direction="row">
              <Grid item xs={12} className={styles.card}>
                <div className={styles.productImage}>
                  <img src={ "https://s3.us-east-2.amazonaws.com/gw-catalog/images/" + servicePart.url.replace('-2.', '.')} />
                </div>
                <div className={styles.details}>
                  <CardContent className={styles.content}>
                    <Typography type="headline">
                      { servicePart.description }
                    </Typography>
                    <Typography type="subheading" secondary>
                      Part number: { servicePart.partNumber }
                    </Typography>
                  </CardContent>
                </div>
                <div className={styles.icons}>
                  <IconButton onClick={ () => this.onExpand(servicePart.partNumber, onExpand) }>
                    <InboxIcon />
                  </IconButton>
                </div>
              </Grid>
            </Grid>
        </Grid>
        <Grid item>
          <Collapse in={ this.state.isExpanded } transitionDuration="auto" unmountOnExit>
            <ProductDetailsWithLoader productDetails={productDetails} />
          </Collapse>
        </Grid>
        </Grid>
      </Card>
    )
  }
}

export default ServicePart;
