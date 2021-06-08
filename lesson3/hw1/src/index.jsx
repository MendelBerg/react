import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './Greeting.jsx';
import './index.scss';

const rootElement = document.querySelector('#root');

const getAge = (date) => {
  const ageDate = new Date(new Date() - date.getTime());
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

const date = new Date('2001-06-09T11:11:11.819Z');

ReactDOM.render(
  <Greeting firstName="John" lastName="Doe" birthDate={getAge(date)} />,
  rootElement
);
