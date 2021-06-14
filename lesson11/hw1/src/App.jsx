import React, { Component } from 'react';
import Expand from './Expand.jsx';

class App extends Component {
  state = {
    isOpen: false,
  };

  toggleExpand = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
 
  render(){
    return (
      <div className="app">
        <Expand 
          onClick={this.toggleExpand} 
          isOpen={this.state.isOpen} 
          title='Some title'
        >
          <p>
            Hooks are a new addition in React 16.8. They let you use state and other React features
            without writing a class.
          </p>
        </Expand>
      </div>
    );
  }
};

export default App;
