import React, { Component } from 'react';

class User extends Component {
  state = {
    avatar_url: null,
    name: null,
    location: null,
  };

  componentDidMount() {
    this.fetchUserData(this.props.match.params.userId);
  }

  fetchUserData = userId => {
    fetch(`https://api.github.com/users/${userId}`)
    .then(response => response.json())
    .then(({ avatar_url, name, location }) => {
      this.setState({
        avatar_url,
        name,
        location,
      });
    });
  };

  render() {
    return (
      <div className="user">
        <img alt="User Avatar" src={this.state.avatar_url} className="user__avatar" />
        <div className="user__info">
          <span className="user__name">{this.state.name}</span>
          <span className="user__location">{this.state.location}</span>
        </div>
      </div>
    );
  }
}

export default User;
