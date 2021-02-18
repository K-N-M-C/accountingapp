//import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import UIContainer from "./UIContainer";
//import RouTer from "./RouTer";
//import { Container } from "react-bootstrap";
//import { AuthProvider } from "../contexts/AuthContext";

//import ReactDOM from "react-dom";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";
import securityQuestions from "./SecurityQuestions";

//Routing
function App() {
  return (
    <div style={{ backgroundColor: "#2c2f33" }}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/signup" component={Signup}></Route>
          <Route exact path="/forgotpassword" component={ForgotPassword}></Route>
          <Route exact path="/securityquestions" component={securityQuestions}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
