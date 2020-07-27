import React from 'react';

export default class Display extends React.Component{

    render(){
        return <div className="row">
            <div className="col-md-12">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
							<th>Role</th>
							<th>Last login</th>
							<th>Permission</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.allUsers.map((obj,index) => {
                            return <tr key={index}>
                                <td>{index+1}</td>
                                <td>{obj.name}</td>
                                <td>{obj.email}</td>
                                <td>{obj.status}</td>
								<td>{obj.role}</td>
								<td>{obj.login}</td>
								<td>{obj.permission}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    }
}