'use strict';

import React from 'react';

import Typography from 'material-ui/Typography';

import styles from '../styles/Profile.css'

class Profile extends React.Component {

  render() {

    const {  } = this.props;

    return (
      <div className={styles.wrapper}>
        <img className={styles.imgCircle} src="https://lh5.googleusercontent.com/-BseFg0sBRqg/AAAAAAAAAAI/AAAAAAAAAfQ/rfH6Y0Tnr0k/photo.jpg" />
        <Typography style={{color:'white'}} type="body2">
          Iurii Tverezovskyi
        </Typography>
      </div>

    );

  }
}

export default Profile;
