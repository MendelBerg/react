import React from 'react';
import User from './User.jsx';
import Pagination from './Pagination.jsx';

class UsersList extends React.Component {
  state = {
    currentPage: 1,
    totalItems: this.props.users.length,
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

  getUsersPageList() {
    const firstOutIndex = this.state.totalItems;
    const indexFrom = (this.state.currentPage - 1) * 3;
    const indexTo = (firstOutIndex - indexFrom) > 3 ? indexFrom + 3 : firstOutIndex;
      
    return this.props.users.slice(indexFrom, indexTo);
  }

  render() {
    return (
      <div>
        <Pagination goPrev={() => this.goPrev()} goNext={() => this.goNext()} {...this.state} />
        <ul className="users">
             {this.getUsersPageList().map(user => <User key={user.id} {...user} />)} 
        </ul>
      </div>
    );  
  }
}

export default UsersList;