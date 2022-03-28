import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
import UpdateEmployeeComponent from "./components/UpdateEmployeeComponent";
import ViewEmployeeComponent from "./components/ViewEmployeeComponent";
import LoginComponent from "./components/LoginComponent";
import UserRegistration from "./components/UserRegistration";
import EmployeeRegSuccess from "./components/EmployeeRegSuccess";
import EmployeeRegFailed from "./components/EmployeeRegFailed";
import SkillMatrixRegistration from "./components/SkillMatrixRegistration";

function App() {
  return (
    <div>
      <Router>
        <div className=" bgg">
          <Switch>
            <Route path="/" exact component={ListEmployeeComponent} />
            <Route path="/employees" component={ListEmployeeComponent} />
            <Route path="/UserRegistration" component={UserRegistration} />
            <Route
              path="/add-employee/:id"
              component={CreateEmployeeComponent}
            />
            <Route
              path="/view-employee/:id"
              component={ViewEmployeeComponent}
            />
            <Route
              path="/skillMatrixRegistration"
              component={SkillMatrixRegistration}
            />
            <Route path="/login" component={LoginComponent} />
            <Route path="/success" component={EmployeeRegSuccess} />
            <Route path="/failed" component={EmployeeRegFailed} />
            {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
