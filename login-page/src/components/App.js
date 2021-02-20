//import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import ForgotPassword from "./ForgotPassword";
import securityQuestions from "./SecurityQuestions";
import Navbar from "../components/Navbar";
//import Home from "../components/pages/Home"
//import UIContainer from "./UIContainer";
//import RouTer from "./RouTer";
//import { Container } from "react-bootstrap";
//import { AuthProvider } from "../contexts/AuthContext";

//import ReactDOM from "react-dom";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

//Routing
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/signup" component={Signup}></Route>
          <Route exact path="/forgotpassword" component={ForgotPassword}></Route>
          <Route exact path="/securityquestions" component={securityQuestions}></Route>
          </Switch>
      </Router>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/home"></Route>
          <Route exact path="/profile"></Route>
          <Route exact path="/admin"></Route>
          <Route exact path="/messages"></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
