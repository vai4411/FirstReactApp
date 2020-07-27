import React from 'react';
import UserForm from './userForm';
import Display from './display';

export default class List extends React.Component{

  constructor(props){
    super(props);
    this.state = {showForm:false, users:[]}
  }


  addButtonPressed = () => {
    this.setState({
      showForm:true
    });
  }

  closeButtonPressed = () => {
    this.setState({
      showForm:false
    });
  }

  onDataReady = (userData) => {
    let newUserArray = [...this.state.users,userData];
    this.setState({
      users:newUserArray,
      showForm:false
    })
  }

  render(){
    return <div>
      <div className='buttons'>
        <div>
          <button className='user-button' onClick={this.addButtonPressed}>Add Users</button>
        </div>
        <div>
          <button  className='user-button' onClick={this.closeButtonPressed}>Close</button>
        </div>
      </div>
      <hr></hr>
      {this.state.showForm ? <UserForm handleData={this.onDataReady.bind(this)}/> : ''}
      {this.state.showForm ? '' : <Display allUsers={this.state.users}/>}
    </div>
  }
}