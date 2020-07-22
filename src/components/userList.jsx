import React from 'react';

class Users extends React.Component {

	render(){
	const {users} = this.props;
	  return (
		<div>
		  {users.map((data) => {
		  return(
			<div>
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
