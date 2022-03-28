import React, { Component } from "react";
import "./UserRegistration.css";
import axios from "axios";
import EmployeeService from "../services/EmployeeService";
import Select from "react-select";
import { arrayExpression } from "@babel/types";
import { BiUserCircle } from "react-icons/bi";
import { SiSinglestore } from "react-icons/si";
import { __spreadArrays } from "tslib";

const options = [
  { value: "reac", label: "React JS" },
  { value: "mysql", label: "MySql" },
  { value: "java", label: "JAVA" },
  { value: "springboot", label: "SpringBoot" },
  { value: "python", label: "Python" },
  { value: "angular", label: "Angular" },
];

class SkillMatrixRegistration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // step 2
      id: this.props.match.params.id,
      empname: "",
      empcode: "",
      technologies: [].map(({ value }) => `${value}`).join("|"),
      yearofexperience: "",
      projectname: "",
      newTechnologies: "",
    };
  }

  // step 3
  // componentDidMount() {
  // 	// step 4
  // 	if (this.state.id === '_add') {
  // 		return;
  // 	} else {
  // 		EmployeeService.getEmployeeById(this.state.id).then((res) => {
  // 			let employee = res.data;
  // 			this.setState({
  // 				firstName: employee.user_fname,
  // 				lastName: employee.user_lname,
  // 				emailId: employee.user_email,
  // 				role: employee.user_role,
  // 				username: employee.user_username,
  // 				password: employee.user_pass
  // 			});
  // 		});
  // 	}
  // }
  saveOrUpdateEmployee = (e) => {
    //debugger;
    e.preventDefault();
    let empDetails = {
      empname: this.state.empname,
      empcode: this.state.empcode,
      // yourArray.map(({lat, lon}) => `${lat},${lon}`).join('|');
      technologies: this.state.technologies
        .map(({ value }) => `${value}`)
        .join(" | "),
      // technologies: this.state.technologies.toString(),

      yearofexperience: this.state.yearofexperience,
      projectname: this.state.projectname,
    };

    console.log(empDetails);

    axios
      .post("http://localhost:8080/AddSkillEmployees", empDetails)
      .then((response) => {
        //debugger;
        console.log(response.data);
        if (response.data != null) {
          this.setState({ show: true });
          setTimeout(() => this.setState({ show: false }), 3000);
          this.props.history.push("/success");
        } else {
          this.setState({ show: false });
          this.props.history.push("/failed");
        }
      });
    this.setState(this.initialState);

    // EmployeeService.createEmployee('Employee', user);
    // console.log('user => ' + JSON.stringify(user));

    // step 5
  };

  // changeHandler = (e) => {
  // 	if (e.target.name === 'ename') {
  // 		this.setState({ ename: e.target.value });
  // 	}
  // 	if (e.target.emailId === 'emailId') {
  // 		this.setState({ emailId: e.target.value });
  // 	}
  // 	if (e.target.username === 'username') {
  // 		this.setState({ username: e.target.value });
  // 	}
  // 	if (e.target.password === 'password') {
  // 		this.setState({ password: e.target.value });
  // 	}
  // 	if (e.target.role === 'role') {
  // 		this.setState({ emailId: e.target.value });
  // 	}
  // };
  handleChange = (technologies) => {
    this.setState({ technologies });
    console.log(
      `Option selected:`,
      technologies.map(({ value }) => `${value}`).join("|")
    );
  };
  changeHandler = (e) => {
    this.setState({ empname: e.target.value });
  };
  changeempcode = (e) => {
    this.setState({ empcode: e.target.value });
  };
  changeProjects = (e) => {
    this.setState({ projectname: e.target.value });
  };
  changeyearsofexperience = (e) => {
    this.setState({ yearofexperience: e.target.value });
  };

  render() {
    const { selectedOption } = this.state;
    return (
      <div className="bg-3">
        <form className="bg-1 zoomIn shadow-lg">
          <h1>Skill Matrix Registration</h1>
          <label htmlFor="firstName" className="label">
            Employee name
          </label>
          <div className="d-flex ">
            <BiUserCircle className="icon" />
            <input
              placeholder="EmployeeName"
              name="empname"
              value={this.state.empname}
              onChange={this.changeHandler}
              className="inputname"
            />
          </div>
          <label htmlFor="lastName" className="label2">
            Employee Code
          </label>
          <div className="d-flex ">
            <SiSinglestore className="icon" />
            <input
              placeholder="Employee code"
              name="empcode"
              type="email"
              value={this.state.empcode}
              onChange={this.changeempcode}
              className="inputname"
            />
          </div>
          <label htmlFor="tech" className="label2">
            Choose Technologies
          </label>
          <Select
            onChange={this.handleChange}
            value={this.state.technologies}
            isMulti={true}
            options={options}
            name="tech"
            id="tech"
          />
          <div className="firstname">
            <label htmlFor="projects" className="label2">
              Projects:
            </label>

            <select
              value={this.state.projectname}
              id="projects"
              onChange={this.changeProjects}
              className="selected"
            >
              <option value="brh">BRH</option>
              <option value="sms">SMS</option>
              <option value="biotech">BIOTECH</option>
              <option value="vfs">VFS</option>
              <option value="other" default>
                Other
              </option>
            </select>
          </div>
          <div className="firstname">
            <label htmlFor="years" className="label2">
              yearofexperience:
            </label>

            <select
              onChange={this.changeyearsofexperience}
              value={this.state.yearofexperience}
              name="years"
              id="years"
              className="selected"
            >
              <option value="choose">Experience do you have </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>

          <button
            className="btn btn-info mt-4"
            onClick={this.saveOrUpdateEmployee}
          >
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default SkillMatrixRegistration;
