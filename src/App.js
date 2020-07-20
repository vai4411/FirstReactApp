import React from 'react';
import TopBar from './topBar';
import Price from './Price';
import Subs from './plans';
import Details from './about';

function App() {
  return (
    <div>
    <TopBar />
    <Price />
    <Subs />
    <Details />
    </div>
  );
}

export default App;
