import React, { Component } from 'react';
import Spinner from './Spinner.jsx';
import Login from './Login.jsx';
import Logout from './Logout.jsx';

class Auth extends Component {
  state = {
    loading: false,
    isLoggedIn: true,
  };

  toggleSpinner() {
    this.setState({
      loading: !this.state.loading,
    });
  }

  toggleLogin() {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn,
    });
  }

  handleLogin() {
    this.toggleSpinner();

    setTimeout(() => {
      this.toggleSpinner();
      this.toggleLogin();
    }, 2000);
  }

  handleLogout() {
    this.toggleLogin();
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
