import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";
import axios from "axios";

class ListEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
      searchtext: "",
    };
    // this.addEmployee = this.addEmployee.bind(this);
    // this.editEmployee = this.editEmployee.bind(this);
    // this.deleteEmployee = this.deleteEmployee.bind(this);
  }

  changeProjects = (e) => {
    this.setState({ searchtext: e.target.value });
  };

  deleteEmployee(id) {
    EmployeeService.deleteEmployee(id).then((res) => {
      this.setState({
        employees: this.state.employees.filter(
          (employee) => employee.id !== id
        ),
      });
    });
  }
  viewEmployee(id) {
    this.props.history.push(`/view-employee/${id}`);
  }
  editEmployee(id) {
    this.props.history.push(`/add-employee/${id}`);
  }

  componentDidMount() {
    EmployeeService.getEmployees().then((res) => {
      this.setState({ employees: res.data });
    });
    console.log(this.state.employees);

    //         const element = document.querySelector('#get-request-error-handling .axios .total');
    // axios.get('localhost:8080//SkillEmployees')
    //     .then(response => element.innerHTML = response.data.total)
    //     .catch(error => {
    //         element.parentElement.innerHTML = `Error: ${error.message}`;
    //         console.error('There was an error!', error);
    //     });
  }

  addEmployee() {
    this.props.history.push("/add-employee/_add");
  }

  render() {
    const searchingText = this.state.searchtext;
    const employees = this.state.employees;
    // let apps = allApps.filter(app =>
    //     app.title.toLowerCase().includes(searchString)
    const filteringEmployees = employees.filter((employee) =>
      employee.projectname.includes(searchingText)
    );
    console.log(filteringEmployees);

    return (
      //   <div>
      //     <h2 className="text-center">Admin Page</h2>
      //     <div className="row">
      //       <label htmlFor="projects">Projects:</label>

      //       <select
      //         value={this.state.searchtext}
      //         id="projects"
      //         onChange={this.changeProjects}
      //         className="form-control"
      //       >
      //         <option value="choose">Choose Projects</option>
      //         <option value="brh">BRH</option>
      //         <option value="sms">SMS</option>
      //         <option value="biotech">BIOTECH</option>
      //         <option value="vfs">VFS</option>
      //         <option value="other">Other</option>
      //       </select>
      //     </div>
      //     <br />
      //     <div className="row">
      //       <table className="table table-striped table-bordered">
      //         <thead>
      //           <tr>
      //             <th> Employee Name</th>
      //             <th> Employee Code</th>
      //             <th> Technologies Known</th>
      //             <th> Year of Experience</th>
      //             <th>Project Name</th>
      //           </tr>
      //         </thead>
      //         <tbody>
      //           {filteringEmployees.map((employee) => (
      //             <tr key={employee.id}>
      //               <td> {employee.empname} </td>
      //               <td> {employee.empcode}</td>
      //               <td> {employee.technologies}</td>
      //               <td> {employee.yearofexperience}</td>
      //               <td> {employee.projectname}</td>

      //               {/* <button onClick={() => this.editEmployee(employee.id)} className="btn btn-info">
      // 										Update{' '}
      // 									</button>
      // 									<button
      // 										style={{ marginLeft: '10px' }}
      // 										onClick={() => this.deleteEmployee(employee.id)}
      // 										className="btn btn-danger"
      // 									>
      // 										Delete{' '}
      // 									</button>
      // 									<button
      // 										style={{ marginLeft: '10px' }}
      // 										onClick={() => this.viewEmployee(employee.id)}
      // 										className="btn btn-info"
      // 									>
      // 										View{' '}
      // 									</button> */}
      //             </tr>
      //           ))}
      //         </tbody>
      //       </table>
      //     </div>
      //   </div>
      // );
      <div className="bg-3">
        <form className="bg-9 zoomIn shadow-lg">
          <h1>Admin Page</h1>

          <label htmlFor="projects" className="label2">
            Projects:
          </label>

          <select
            value={this.state.searchtext}
            id="projects"
            onChange={this.changeProjects}
            className="selected"
          >
            <option value="choose">Choose Projects</option>
            <option value="brh">BRH</option>
            <option value="sms">SMS</option>
            <option value="biotech">BIOTECH</option>
            <option value="vfs">VFS</option>
            <option value="other">Other</option>
          </select>
          <div className="firstname mt-3">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th> Employee Name</th>
                  <th> Employee Code</th>
                  <th> Technologies Known</th>
                  <th> Year of Experience</th>
                  <th>Project Name</th>
                </tr>
              </thead>
              <tbody>
                {filteringEmployees.map((employee) => (
                  <tr key={employee.id}>
                    <td> {employee.empname} </td>
                    <td> {employee.empcode}</td>
                    <td> {employee.technologies}</td>
                    <td> {employee.yearofexperience}</td>
                    <td> {employee.projectname}</td>

                    {/* <button onClick={() => this.editEmployee(employee.id)} className="btn btn-info">
											Update{' '}
										</button>
										<button
											style={{ marginLeft: '10px' }}
											onClick={() => this.deleteEmployee(employee.id)}
											className="btn btn-danger"
										>
											Delete{' '}
										</button>
										<button
											style={{ marginLeft: '10px' }}
											onClick={() => this.viewEmployee(employee.id)}
											className="btn btn-info"
										>
											View{' '}
										</button> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </form>
      </div>
    );
  }
}

export default ListEmployeeComponent;
