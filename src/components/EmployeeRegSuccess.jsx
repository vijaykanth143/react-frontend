import React from 'react';
import {IoCheckmarkDoneCircleOutline} from 'react-icons/io5';
import './EmployeeRegSucess.css';

export default function EmployeeRegSuccess() {
	return (
		<div className="employee-registration-success-home zoomIn ">
			<IoCheckmarkDoneCircleOutline className="success-icon"/>
			<h1>Employee Registered Successfully</h1>
			
		</div>
	);
}
