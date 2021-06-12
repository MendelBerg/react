import React, { Component } from 'react';
import Spinner from './Spinner.jsx';
import Login from './Login.jsx';
import Logout from './Logout.jsx';

class Auth extends Component {
  state = {
    loading: false,
    isLoggedIn: true,
  };

  toggleSpinner(loading) {
    this.setState({loading});
  }

  handleLogin() {
    this.toggleSpinner(true);

    setTimeout(() => {
      this.toggleSpinner(false);

      this.setState({
        isLoggedIn: false,
      });
    }, 2000);
  }

  handleLogout() {
    this.setState({
      isLoggedIn: true,
    });
  }

  render() {
    if (this.state.loading) {
      return <Spinner size={50} />;
    }

    return this.state.isLoggedIn ? (
      <Login onLogin={this.handleLogin.bind(this)} />
    ) : (
      <Logout onLogout={this.handleLogout.bind(this)} />
    );
  }
}

export default Auth;
