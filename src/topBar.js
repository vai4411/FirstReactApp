import React from 'react';
import './topBar.css';

function topBar() {
  return (
    <div className="top-bar">
        <h3 id='company-name'>Company name</h3>
        <h5 id='features'>FATURES</h5>
        <h5>ENTERPRISE</h5>
        <h5>SUPPORT</h5>
        <button id='login'>LOGIN</button>
    </div>
  );
}

export default topBar;
