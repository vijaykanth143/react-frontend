import React, { Component } from "react";
import { BiUserCircle } from "react-icons/bi";
import { MdOutlineEmail, MdOutlinePassword } from "react-icons/md";
import "./UserRegistration.css";

class UserRegister extends Component {
  constructor() {
    super();
    this.state = {
      ename: "",
      email: "",
      username: "",
      password: "",
      role: "",
    };
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email : " + this.state.email);
    console.log("Password : " + this.state.password);
    console.log("Role : " + this.role);

    const url = "http://localhost:8080/addemployees";
    const data = {
      ename: this.state.ename,
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      role: this.state.role,
    };

    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));
    this.props.history.push("/success");
  };

  render() {
    return (
      <div className="bg-3">
        <form className="bg-1 zoomIn shadow-lg" onSubmit={this.handleSubmit}>
          <h1>Create Account</h1>
          <label htmlFor="firstName" className="label">
            first name
          </label>
          <div className="d-flex ">
            <BiUserCircle className="icon" />
            <input
              type="text"
              placeholder="Firstname"
              name="ename"
              onChange={this.handleChange}
              className="inputname"
            />
          </div>
          <label htmlFor="lastName" className="label2">
            Last Name
          </label>
          <div className="d-flex ">
            <BiUserCircle className="icon" />
            <input
              type="text"
              placeholder="Lastname"
              name="username"
              onChange={this.handleChange}
              className="inputname"
            />
          </div>
          <label htmlFor="email" className="label2">
            Email
          </label>
          <div className="d-flex ">
            <MdOutlineEmail className="icon" />
            <input
              type="email"
              placeholder="email"
              name="email"
              onChange={this.handleChange}
              className="inputname"
            />
          </div>
          <label htmlFor="password" className="label2">
            Password
          </label>
          <div className="d-flex ">
            <MdOutlinePassword className="icon" />
            <input
              type="password"
              placeholder="password"
              name="password"
              onChange={this.handleChange}
              className="inputname"
            />
          </div>
          <div className="firstname">
            <label for="cars" className="label2">
              Choose a role:
            </label>

            <select
              name="role"
              id="cars"
              onChange={this.handleChange}
              className="selected"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button className="btn btn-info mt-4">Register</button>
        </form>
      </div>
    );
  }
}

export default UserRegister;
