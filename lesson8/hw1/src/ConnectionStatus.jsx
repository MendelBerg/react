import React, {Component} from 'react';

class ConnectionStatus extends Component {
  state = {
    online: null,
    offline: null,
    classEl: null,
    textEl: null,
  };

  componentDidMount(){
    this.showOnline();
    window.addEventListener('online', this.showOnline);
    window.addEventListener('offline', this.showOffline);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.showOnline);
    window.removeEventListener('offline', this.showOffline);
  }

  showOnline = () => {
    this.setState({
      online: true,
      offline: false,
      classEl: "status",
      textEl: "online",
    });
  }

  showOffline = () => {
    this.setState({
      online: false,
      offline: true,
      classEl: "status status_offline",
      textEl: "offline",
    });
  }

  render(){
    return <div className={this.state.classEl}>{this.state.textEl}</div>;    
  };
};

export default ConnectionStatus;
