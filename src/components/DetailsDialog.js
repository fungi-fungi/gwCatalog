'use strict';

import React from 'react'

import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Dialog from 'material-ui/Dialog';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import CloseIcon from 'material-ui-icons/Close';
import Slide from 'material-ui/transitions/Slide';

import ProductDetailsShort  from './ProductDetailsShort'


class DetailsDialog extends React.Component {

  render() {

    const { isOpen, product } = this.props;

    return (
      <Dialog
          fullScreen
          open={ product != 'undefiend' }
          onRequestClose={ () => console.log('test') }
          transition={<Slide direction="up" />}
        >
      <AppBar >
        <Toolbar>
          <IconButton color="contrast" onClick={this.handleRequestClose} aria-label="Close">
            <CloseIcon />
          </IconButton>
          <Typography type="title" color="#ffffff" >
            Close
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container>
        <Grid item sm={0} md={2} />

        <Grid item sm={12} md={8}>
          <ProductDetailsShort product={ product } />
        </Grid>
      </Grid>
    </Dialog>
    );
  }
}

export default DetailsDialog;
