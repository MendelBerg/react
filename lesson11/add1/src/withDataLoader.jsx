import React from 'react';

export const withDataLoader = () => {
  fetchUserData = userId => {
    const userUrl = `https://api.github.com/users/${userId}`;
    fetch(userUrl)
    .then(response => response.json())
    .then(userData => 
        this.setState({
          userData,
        }),
    );
  };
};
