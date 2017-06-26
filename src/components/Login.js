'use strict';

import React, { PropTypes as T } from 'react'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router';
import AuthService from '../utils/AuthService'

class Login extends React.Component {

  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }

  getAuthParams() {
    return {
      email: ReactDOM.findDOMNode(this.refs.email).value,
      password: ReactDOM.findDOMNode(this.refs.password).value
    }
  }

  login(e) {

    console.log('hello');
    e.preventDefault()
    this.props.auth.login();
  }

  componentDidMount() {
    console.log(this.props);
    this.props.auth.auth0.authorize();
  }

  render() {

    const required = false;
    const login = () => this.login.bind(this);

    return (
      <div> Hello world </div>
    )
  }
}

export default Login;
