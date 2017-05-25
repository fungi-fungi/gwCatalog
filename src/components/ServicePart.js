'use strict';

import React from 'react'

import Card, {CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';

import InboxIcon from 'material-ui-icons/Input';

import styles from '../styles/ServicePart.css'

class ServicePart extends React.Component {

  render() {

    const { servicePart } = this.props;

    return (


      <Card className={styles.card}>
        <div className={styles.productImage}>
          <img src={servicePart.imageFullPath} />
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
          <InboxIcon />
        </div>

      </Card>


    )
  }
}

export default ServicePart;
