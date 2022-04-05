import React from 'react';
import './EmployeeRegFailed.css';
import {VscError} from 'react-icons/vsc'

export default function EmployeeRegFailed() {
	return (
		<div className="employee-registration-failed-home zoomIn">
			<VscError className="result-icon" style={{color: 'red'}} />
			<h1>Oops something went wrong</h1>
		</div>
	);
}
