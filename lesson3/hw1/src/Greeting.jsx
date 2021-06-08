import React from 'react';

export default (props) => (
  <div className="greeting">{`My name is ${props.firstName} ${props.lastName}. I'm ${props.birthDate} years old`}</div>
);
