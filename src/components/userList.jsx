import React from 'react';

class Users extends React.Component {

	render(){
	const {users} = this.props;
	  return (
		<div>
			<div className='table-row'>
			<td>name</td>
			<td>email</td>
			<td id='table-status'>status</td>
			<td  id='table-role'>role</td>
			<td  id='table-login'>lastLogin</td>
			<td>permission</td>
			<td></td>
			</div>
			<div className='table'>
		  {users.map((data) => {
		  return(
			<div className='table1'>
				<tr className='table-row'>
					<td>{data.name}</td>
					<td>{data.email}</td>
					<td>{data.status}</td>
					<td>{data.role}</td>
					<td>{data.lastLogin}</td>
					<td>{data.permission}</td>
					<td>...</td>
				</tr>
			</div>
		  );
		  })}
		  </div>
		</div>
	  );
	}
  }

  export default Users;
