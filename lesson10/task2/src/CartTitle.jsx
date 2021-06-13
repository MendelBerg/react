import React from 'react';

const CartTitle = ({userName, count}) => {
  return (
    <div className="card-title">
      {`${userName}, you added ${count} items`}
    </div>
  );
}

export default CartTitle;