import React from 'react';
import ReactDOM from 'react-dom';
import MailBox from './MailBox.jsx';
import './index.scss';

const rootElement = document.querySelector('#root');

ReactDOM.render(<MailBox unreadMessages={[]} />, rootElement);
