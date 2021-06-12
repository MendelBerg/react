import React, { Component } from 'react';

class Search extends Component {
  state = {value: '',};

  handleChange = event => {
    this.setState({value: event.target.value});
  }

  search = (event) => {
    event.preventDefault()
    console.log(`Search text: ${this.state.value}`);
  }

  render(){
    return (
      <form className="search" onSubmit={this.search}>
        <input 
          onChange={this.handleChange} 
          type="text" 
          className="search__input" 
          alue={this.state.value} 
        />
        <button className="search__button">Search</button>
      </form>
    );
  }


};

export default Search;
