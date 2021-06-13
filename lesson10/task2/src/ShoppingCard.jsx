import React, { Component } from 'react';
import ProductsList from './ProductsList.jsx';
import CartTitle from './CartTitle.jsx';


class ShoppingCard extends Component {
  state = {
    cardItems: [
      {
        id: '1',
        name: 'iPhone 11',
        price: 999,
      },
      {
        id: '2',
        name: 'iPad Pro',
        price: 799,
      },
    ],
  };

  render(){
    const count = this.state.cardItems.length;

    return(
      <div className="column">
        <CartTitle userName={this.props.userData.firstName} count={count} />
        <ProductsList cardItems={this.state.cardItems} />
      </div>
    )
  }
};

export default ShoppingCard;
