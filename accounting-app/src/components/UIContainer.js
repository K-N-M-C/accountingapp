//import React from "react";
//import { Route, Switch, BrowserRouter } from "react-router-dom";
import React from "react";
import Login from "./Login";
//import Signup from "./Signup";
//import App from "./App";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";

function UIContainer() {
  return (
    <AuthProvider>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Login />
        </div>
      </Container>
      {/* <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Signup />
        </div>
      </Container> */}
    </AuthProvider>
  );
}
export default UIContainer();
