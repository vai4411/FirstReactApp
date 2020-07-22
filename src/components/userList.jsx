import React from 'react';

class Users extends React.Component {

	render(){
	const {users} = this.props;
	  return (
		<div className=''>
			<td>name</td>
			<td>email</td>
			<td>status</td>
			<td>role</td>
			<td>lastLogin</td>
			<td>permission</td>
		  {users.map((data) => {
		  return(
			<div className='table1'>
				<tr>
					<td>{data.name}</td>
					<td>{data.email}</td>
					<td>{data.status}</td>
					<td>{data.role}</td>
					<td>{data.lastLogin}</td>
					<td>{data.permission}</td>
				</tr>
			</div>
		  );
		  })}
		</div>
	  );
	}
  }

  export default Users;
