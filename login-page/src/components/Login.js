//import Signup from "./Signup";
//import { Alert } from "react-bootstrap";
//import { useAuth } from "../contexts/AuthContext";
//import { Link } from "react-router-dom";
import React, { useRef } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";

export default function Login() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  //const passwordConfirmRef = useRef();
  //const { login } = useAuth();
  //const [error, setError] = useState("");
  //const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("Username: ", usernameRef, "\nPassword: ", passwordRef);
  }

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
                <img className="img" src={"/logo.png"} alt="logo"
                  style={{ 
                    textAlign:"Center",
                    justifyContent: "Center",
                    display: "block",
                    alignItems: "center",
                    margin: "Auto",
                  }}
                ></img>
                <h2 className="text-center mb-4">Login</h2>
                {/* {error && <Alert varient="not correct">{error}</Alert>} */}
                <Form>
                  <Form.Group id="username">
                    <Form.Label>
                      Username
                      <select
                        id="users"
                        className="justify-content-md-center"
                        style={{ maxwidth: "40px" }}
                      >
                        <option value="user">User</option>
                        <option value="administrator">Administrator</option>
                        <option value="manager">Manager</option>
                      </select>
                    </Form.Label>
                    <Form.Control
                      type="username"
                      ref={usernameRef}
                      required
                    >
                    </Form.Control>
                  </Form.Group>

                  <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} required />
                  </Form.Group>
                  <Button onClick={handleSubmit} className="w-100">
                    Login
                  </Button>
                </Form>
                <div className="w-100 text-center mt-2">
                  <Link to="/signup">Don't have an account? Sign Up</Link>
                </div>
                <div className="w-100 text-center mt-2">
                  <Link to="/forgotpassword">Forgot Password?</Link>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </AuthProvider>
    </>
  );
}
