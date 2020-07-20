import React, { Component } from 'react';
import TopBar from './TopBar';
import Price from './Price';
import Subs from './plans';
import Details from './about';
import './App.css';

class App extends Component{
  render(){
    return (
      <div className='app-header'>
        <p id="topbar-company-name">Company Name</p>
        <div className='topbar-options'>
        <TopBar>FATURES</TopBar>
        <TopBar>ENTERPRISE</TopBar>
        <TopBar>SUPPORT</TopBar>
        <button id='topbar-login-button'>USERS</button>
        </div>
      </div>
    )
  }
}

export default App;
