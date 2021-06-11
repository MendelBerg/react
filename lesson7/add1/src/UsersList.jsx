import React from 'react';
import User from './User.jsx';
import Pagination from './Pagination.jsx';

class UsersList extends React.Component {
  state = {
    currentPage: 1,
    totalItems: this.props.users.length,
  }

  countItemsPerPage(){
    const amount = this.state.totalItems - (this.state.currentPage - 1) * 3;
    return  amount > 3 ? 3 : amount;
  }

  goPrev(){
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
  }

  goNext(){
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  }

  render() {
    const indexFrom = (this.state.currentPage - 1) * 3;
    const indexTo = (this.state.totalItems - indexFrom) > 3 
        ? indexFrom + 3 
        : this.state.totalItems;
      
    const usersPage = this.props.users.slice(indexFrom, indexTo);

    return (
      <div>
        <Pagination 
          goPrev={this.goPrev.bind(this)} 
          goNext={this.goNext.bind(this)} 
          {...this.state} 
          itemsPerPage={this.countItemsPerPage()} 
        />

        <ul className="users">
             {usersPage.map(user => <User key={user.id} {...user} />)} 
        </ul>
      </div>
    );  
  }
}

export default UsersList;