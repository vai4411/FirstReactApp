import React from 'react';
import ReactDOM from 'react-dom';
import TopBar from './topBar';
import Price from './price';

ReactDOM.render(
  <React.StrictMode>
    <TopBar />
    <Price />
  </React.StrictMode>,
  document.getElementById('root')
);
