import React from 'react';

export default class UserForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { name: '', email: '', status: '', role: '', login: '', permission: ''};
    }

    onTextValueChange = (event) => {
        switch (event.target.name) {
            case 'name':
                this.setState({
                    name:event.target.value
                });
                break;

            case 'email':
                this.setState({
                    email:event.target.value
                });
                break;

            case 'status':
                this.setState({
                    status:event.target.value
                });
                break;

			case 'role':
                this.setState({
                    role:event.target.value
				});
				break;

			case 'login':
                this.setState({
                    login:event.target.value
				});
				break;

			case 'permission':
                this.setState({
                    permission:event.target.value
				});
				break;

				default:
                break;
        }
    }


    onFormSubmitted = (event) => {
        this.props.handleData(this.state);
    }

    render() {
        return <div className='user-form'>
            <div>
                <form onSubmit={this.onFormSubmitted}>
                    <div>
                        <label>Name:</label>
                        <input type="text" name="name" placeholder="Enter name"
                            value={this.state.name} onChange={this.onTextValueChange}
                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" name="email" placeholder="Enter email"
                            value={this.state.email} onChange={this.onTextValueChange}
                        />
                    </div>
                    <div>
                        <label>Status:</label>
						<select name="status" value={this.state.status} onChange={this.onTextValueChange}>
							<option>pending</option>
							<option>active</option>
							<option>inactive</option>
						</select>
						</div>
						<div>
						<label>Role:</label>
						<select name="role" value={this.state.role} onChange={this.onTextValueChange}>
							<option>none</option>
							<option>user</option>
							<option>admin</option>
						</select>
						</div>
						<div>
						<label>Last login:</label>
                        <input type="login" name="login" placeholder="Enter last login"
                            value={this.state.login} onChange={this.onTextValueChange}
                        />
						</div>
						<div>
						<label>Permission:</label>
						<select name="permission" value={this.state.permission} onChange={this.onTextValueChange}>
							<option>none</option>
							<option>valid</option>
							<option>invalid</option>
						</select>
                    </div>
                    <button className='save-button' type="submit">Save</button>
                </form>
            </div>
        </div>

    }
}
