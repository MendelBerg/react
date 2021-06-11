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
    this.toggleSpinner();

    setTimeout(() => {
      this.toggleSpinner();
      this.setState({
        isLoggedIn: !this.state.isLoggedIn,
      });
    }, 2000);
  }

  render() {
    if (this.state.loading) {
      return <Spinner size={50} />;
    }

    return this.state.isLoggedIn ? (
      <Login onLogin={this.toggleLogin.bind(this)} />
    ) : (
      <Logout onLogout={this.toggleLogin.bind(this)} />
    );
  }
}

export default Auth;
