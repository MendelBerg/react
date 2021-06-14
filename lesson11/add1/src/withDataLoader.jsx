import React, {Component} from "react";

// !BAD!
export function withDataLoader(url) {
  // return (WrapperComponent) => 
  //   class extends Component {
  //     constructor(props){
  //       super(props);
  //       this.state = {
  //         data: this.fetchData(url),
  //         component: WrapperComponent,
  //       }
  //     }

  //     fetchData = url => {
  //       fetch(url)
  //       .then(response => response.json())
  //       .then(data => 
  //           this.setState({
  //             data,
  //           }),
  //       );
  //     };

  //     render() {
  //       console.log('state', this.state.data)
  //       return this.state.component(this.state.data);
  //     }
  //   }
}
