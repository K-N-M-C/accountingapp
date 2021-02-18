import React, { useRef } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import logo from "../components/logo.png";

export default function ForgotPassword() {
  const usernameRef = useRef();
  const emailRef = useRef();

  return (
    <>
      <AuthProvider>
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="w-100" style={{ maxWidth: "500px" }}>
            <Card>
              <Card.Body>
                <img className="img" src={logo} alt="logo"
                  style={{ 
                    textAlign:"Center",
                    justifyContent: "Center",
                    display: "block",
                    alignItems: "center",
                    margin: "Auto",
                  }}
                ></img>
                <h2 className="text-center mb-4">Forgot Password</h2>
                <Form>
                  <Form.Group id="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="username" ref={usernameRef} required />
                  </Form.Group>

                  <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required />
                  </Form.Group>

                  <Button className="w-100 btn btn-info" type="submit">
                    Submit
                  </Button>
                </Form>

                <div className="w-100 text-center mt-2">
                  <Link to="/">Already have an account? Login</Link>
                </div>

                <div className="w-100 text-center mt-2">
                  <Link to="/signup">Don't have an account? Sign Up</Link>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </AuthProvider>
    </>
  );
}