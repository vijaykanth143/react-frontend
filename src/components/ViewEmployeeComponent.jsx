import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ViewEmployeeComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			id: this.props.match.params.id,
			employee: {}
		};
	}

	componentDidMount() {
		EmployeeService.getEmployees().then((res) => {
			this.setState({ employee: res.data });
		});
		console.log(this.state.employee);
	}

	render() {
		return (
			<div>
				<br />
				<div className="card col-md-6 offset-md-3">
					<h3 className="text-center">Admin Page</h3>
					<div className="card-body">
						<div className="row">
							<label> Employee Name: </label>
							<div> {this.state.employee.firstName}</div>
						</div>
						<div className="row">
							<label> Employee Code: </label>
							<div> {this.state.employee.lastName}</div>
						</div>
						<div className="row">
							<label> Technology Known</label>
							<div> {this.state.employee.emailId}</div>
						</div>
						<div className="row">
							<label> Year of Experience </label>
							<div> {this.state.employee.emailId}</div>
						</div>
						<div className="row">
							<label> Project name </label>
							<div> {this.state.employee.emailId}</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ViewEmployeeComponent;
