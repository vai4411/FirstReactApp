import React from 'react';
import ReactDOM from 'react-dom';
import TopBar from './topBar';
import Price from './Price';
import Subs from './plans';
import Details from './about';

ReactDOM.render(
  <React.StrictMode>
    <TopBar />
    <Price />
    <Subs />
    <Details />
  </React.StrictMode>,
  document.getElementById('root')
);
