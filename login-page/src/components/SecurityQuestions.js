import React, { useRef } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import logo from "../components/logo.png";

export default function SecurityQuestions() {
  const securityQuestion1Ref = useRef();
  const securityQuestion2Ref = useRef();
  const securityQuestion3Ref = useRef();

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
                <h2 className="text-center mb-4">Security Questions</h2>
                <Form>
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