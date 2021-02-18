import React, { useRef } from "react";
//import { Alert } from "react-bootstrap";
import { Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
//import { useAuth } from "../contexts/AuthContext";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import logo from "../components/logo.png";

export default function Signup() {
  const firstNameRef =  useRef();
  const lastNameRef =  useRef();
  const addressRef =  useRef();
  const dateOfBirthRef =  useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const securityQuestion1Ref = useRef();
  const securityQuestion2Ref = useRef();
  const securityQuestion3Ref = useRef();
/*
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
      if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
        return setError("Passwords don't match");
      }
      try {
        setError("");
        setLoading(true);
        await signup(usernameRef.current.value, passwordRef.current.value);
      } catch {
         setError("Failed to create an account");
        }
    setLoading(false);
  }
*/
  return (
    <>
      <AuthProvider>
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}>

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
                <h2 className="text-center mb-4">Sign Up</h2>
                {/* {error && <Alert varient="not correct">{error}</Alert>} */}
                <Form>
                  <Form.Group id="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="firstName" ref={firstNameRef} required />
                  </Form.Group>

                  <Form.Group id="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="lastName" ref={lastNameRef} required />
                  </Form.Group>

                  <Form.Group id="address">
                  <Form.Label>Address</Form.Label>
                    <Form.Control type="address" ref={addressRef} required />
                  </Form.Group>

                  <Form.Group id="dateOfBirth">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control type="dateOfBirth" ref={dateOfBirthRef} required />
                  </Form.Group>

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
                    <span className="passwordRules"
                    style={{ fontSize: "13px" }}>
                    <br/>*Password must start with a letter and contain at least 8 characters, a letter, a number, and a special character.</span>
                    <Form.Control type="password" ref={passwordRef} required />
                  </Form.Group>

                  <Form.Group id="passwordConfirmation">
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control
                      type="passwordConfirmation"
                      ref={passwordConfirmationRef} required />
                  </Form.Group>

                  <Form.Group id="securityQuestion1">
                    <Form.Label>Security Question 1</Form.Label>
                    <select
                      id="securityQuestions"
                      className="justify-content-md-center"
                      style={{ maxwidth: "60px" }}
                    >
                    <option value="securityQuestionOption1">What school did you attend for sixth grade?</option>
                    <option value="securityQuestionOption2">What is your grandmother's first name?</option>
                    <option value="securityQuestionOption3">What is your oldest sibling's middle name?</option>
                    <option value="securityQuestionOption4">What street did you live on in third grade?</option>
                    <option value="securityQuestionOption5">What was the name of your first stuffed animal?</option>
                    </select>
                    <Form.Control type="securityQuestion1" ref={securityQuestion1Ref} required />
                  </Form.Group>

                  <Form.Group id="securityQuestion2">
                    <Form.Label>Security Question 2</Form.Label>
                    <select
                      id="securityQuestions"
                      className="justify-content-md-center"
                      style={{ maxwidth: "60px" }}
                    >
                    <option value="securityQuestionOption1">What school did you attend for sixth grade?</option>
                    <option value="securityQuestionOption2">What is your grandmother's first name?</option>
                    <option value="securityQuestionOption3">What is your oldest sibling's middle name?</option>
                    <option value="securityQuestionOption4">What street did you live on in third grade?</option>
                    <option value="securityQuestionOption5">What was the name of your first stuffed animal?</option>
                  </select>
                    <Form.Control type="securityQuestion2" ref={securityQuestion2Ref} required />
                  </Form.Group>

                  <Form.Group id="securityQuestion3">
                    <Form.Label>Security Question 3</Form.Label>
                    <select
                      id="securityQuestions"
                      className="justify-content-md-center"
                      style={{ maxwidth: "60px" }}
                    >
                    <option value="securityQuestionOption1">What school did you attend for sixth grade?</option>
                    <option value="securityQuestionOption2">What is your grandmother's first name?</option>
                    <option value="securityQuestionOption3">What is your oldest sibling's middle name?</option>
                    <option value="securityQuestionOption4">What street did you live on in third grade?</option>
                    <option value="securityQuestionOption5">What was the name of your first stuffed animal?</option>
                    </select>
                    <Form.Control type="securityQuestion3" ref={securityQuestion3Ref} required />
                  </Form.Group>

                  <Button className="w-100 btn btn-info" type="submit" Link to="/securityquestions">
                    Signup
                  </Button>
                </Form>

                <div className="w-100 text-center mt-2">
                  <Link to="/">Already have an account? Login</Link>
                </div>

                <div className="w-100 text-center mt-2">
                  <Link to="/forgotpassword">Forget Password?</Link>
                </div>

              </Card.Body>
            </Card>
          </div>
        </Container>
      </AuthProvider>
    </>
  );
}
