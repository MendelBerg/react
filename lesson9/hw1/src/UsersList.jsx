import React, { Component } from 'react';
import User from './User.jsx';
import Filter from './Filter.jsx';

class UsersList extends Component {  
  state = {
    value: '',
    users: this.props.users,
  };

  handleChange = (event) => {
    const {value} = event.target;
    this.setState({value});
    this.filterUsers(value);
  }

  filterUsers(value){
    this.setState({
      users: value === '' 
        ? this.props.users 
        : this.props.users.filter(
            ({name}) => name.toLowerCase() === value.toLowerCase()
          )
    });
  }

  render(){
    return (
      <div>
        <div className="filter">
          {<Filter 
            filterText={this.state.value} 
            count={this.state.users.length} 
            onChange={this.handleChange}
          />}
        </div>
        <ul className="users">
          {this.state.users.map(user => <User key={user.id} {...user}/>)}
        </ul>
      </div>
    );
  }
};

export default UsersList;
