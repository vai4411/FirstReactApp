import React, { Component } from 'react';
import TopBar from './components/topBar.jsx';
import Price from './components/price.jsx';
import Plans from './components/plans.jsx';
import About from './components/about.jsx';
import UsersList from './components/userList.jsx'
import './App.css';

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      PlanTypes :[
      {
        "title":"Free",
        "info":"",
        "priceTag":"$0",
        "users":"10",
        "storage":"2GB",
        "support":"Email",
        "button":"SIGN UP FOR FREE"
      },
      {
        "title":"Pro",
        "info":"Most popular",
        "priceTag":"$15",
        "users":"20",
        "storage":"10GB",
        "support":"Priority email",
        "button":"GET STARTED"
      },
      {
        "title":"Enterprise",
        "info":"",
        "priceTag":"$30",
        "users":"50",
        "storage":"30GB",
        "support":"Phone & email",
        "button":"CONTACT US"
      }
    ],

    HeadersItems:["FATURES","ENTERPRISE","SUPPORT"],

    PricingDesc:["Quickly build an effective pricing table for your potential",
                "customers with this layout. It's built with default",
                "Material-UI components with little customization."],

    AboutInfo:[{
      "heading":"Company",
      "subHeading":["Team","History","Contact us","Locations"]
    },
    {
      "heading":"Features",
      "subHeading":["Cool stuff","Random feature","Team feature","Developer stuff","Another one"]
    },
    {
      "heading":"Resources",
      "subHeading":["Resource","Rosource Name","Another resource","Final resource"]
    },
    {
      "heading":"Legal",
      "subHeading":["Privacy Policy","Terms of use"]
    }],

    Users : [{
      name: "abc",
      email: "abc@gmail.com",
      status: "Active",
      role: "Administrator",
      lastLogin: "2d ago",
      permission: "Valid"
  }, {
      name: "def",
      email: "def@gmail.com",
      status: "Inactive",
      role: "User",
      lastLogin: "3d ago",
      permission: "Valid"
  }, {
      name: "ghi",
      email: "ghi@gmail.com",
      status: "Active",
      role: "Administrator",
      lastLogin: "2d ago",
      permission: "Valid"
  }, {
      name: "abc",
      email: "abc@gmail.com",
      status: "Inactive",
      role: "User",
      lastLogin: "3d ago",
      permission: "Valid"
  }, {
      name: "def",
      email: "def@gmail.com",
      status: "Active",
      role: "Administrator",
      lastLogin: "2d ago",
      permission: "Valid"
  }, {
      name: "ghi",
      email: "ghi@gmail.com",
      status: "Inactive",
      role: "User",
      lastLogin: "3d ago",
      permission: "Valid"
  }, {
      name: "abc",
      email: "abc@gmail.com",
      status: "Active",
      role: "Administrator",
      lastLogin: "2d ago",
      permission: "Valid"
  }, {
      name: "def",
      email: "def@gmail.com",
      status: "Inactive",
      role: "User",
      lastLogin: "3d ago",
      permission: "Valid"
  }, {
      name: "ghi",
      email: "ghi@gmail.com",
      status: "Active",
      role: "Administrator",
      lastLogin: "2d ago",
      permission: "Valid"
  }, {
      name: "abc",
      email: "abc@gmail.com",
      status: "Inactive",
      role: "User",
      lastLogin: "3d ago",
      permission: "Valid"
  }, {
      name: "def",
      email: "def@gmail.com",
      status: "Inactive",
      role: "User",
      lastLogin: "3d ago",
      permission: "Valid"
  }, {
      name: "ghi",
      email: "ghi@gmail.com",
      status: "Active",
      role: "Administrator",
      lastLogin: "2d ago",
      permission: "Valid"
  }]
  }
}


  render(){

    const {PlanTypes} = this.state;
    const {HeadersItems} = this.state;
    const {PricingDesc} = this.state;
    const {AboutInfo} = this.state;
    const {Users} = this.state;

    return (
      <div>
        <div className='app-header'>
          <p id='topbar-company-name'>CompanyName</p>
            <div className='topbar-options'>
            <TopBar items={HeadersItems}/>
            <button id='topbar-login-button'>USERS</button>
            </div>
        </div>
        <div>
        <div className='pricing-heading'>
        <UsersList users={Users}/>
          <h4 id='pricing'>Pricing</h4>
          <div className='pricing-desc-div'>
          <p>
          <Price desc={PricingDesc}/></p>
        </div>
        </div>
        <div>
        <Plans plan={PlanTypes}/>
        </div>
        </div>
        <div>
        <About about={AboutInfo}/>
        </div>
      </div>
    )
  }
}

export default App;
