import React from 'react';
import ReactDOM from 'react-dom';
import TopBar from './topBar';
import Price from './price';
import Subs from './plans';

ReactDOM.render(
  <React.StrictMode>
    <TopBar />
    <Price />
    <Subs />
  </React.StrictMode>,
  document.getElementById('root')
);
