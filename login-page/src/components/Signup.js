import React, { useRef } from "react";
//import { Alert } from "react-bootstrap";
import { Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
//import { useAuth } from "../contexts/AuthContext";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";

export default function Signup() {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  // const { signup } = useAuth();
  //const [error, setError] = useState("");
  // const [loading, setLoading] = useState(false);

  //   async function handleSubmit(e) {
  //     e.preventDefault();
  //     if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
  //       return setError("Password do not match");
  //     }
  //     try {
  //       setError("");
  //       setLoading(true);
  //       await signup(usernameRef.current.value, passwordRef.current.value);
  //     } catch {
  //       setError("Failed to create an account");
  //     }
  //     setLoading(false);
  //   }
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
                <h2 className="text-center mb-4">Sign Up</h2>
                {/* {error && <Alert varient="not correct">{error}</Alert>} */}
                <Form>
                  <Form.Group id="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="username" ref={usernameRef} required />
                  </Form.Group>
                  <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required />
                  </Form.Group>
                  <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} required />
                  </Form.Group>
                  <Form.Group id="passwordConfirmation">
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control
                      type="passwordConfirmation"
                      ref={passwordConfirmationRef}
                      required
                    />
                  </Form.Group>
                  <Button className="w-100 btn btn-info" type="submit">
                    Signup
                  </Button>
                </Form>
                <div className="w-100 text-center mt-2">
                  <Link to="/">Already have an account? Login</Link>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </AuthProvider>
    </>
  );
}
