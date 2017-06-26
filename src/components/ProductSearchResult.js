'use strict';

import React from 'react';
import { Link } from 'react-router-dom';

import Grid from 'material-ui/Grid';
import Card, {CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import InboxIcon from 'material-ui-icons/Input';

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

    const { product } = this.props;

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
                  <Link to={ "/parts/" + product.id }>
                    <InboxIcon />
                  </Link>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    );
  }
}

export default ProductSearchResult;
