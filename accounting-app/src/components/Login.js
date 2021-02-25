import { db, auth } from "../firebase";
import { Link } from "react-router-dom";
import { useCollection } from "react-firebase-hooks/firestore";
import { Button, Form, Grid, Header, Image, Segment } from "semantic-ui-react";

export default function Login() {
  const getUserFromDB = () => {
    const email = document.getElementById("userName").value;
    const password = document.getElementById("password").value;

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        window.location.replace("/home");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  };

  const [test] = useCollection(db.collection("user"));
  const addUser = () => {
    test?.docs.map((doc) => {
      console.log(doc.data());
    });
  };

  return (
    <div>
      <Image
        className="img"
        src={"/logo.png"}
        alt="logo"
        style={{
          textAlign: "Center",
          justifyContent: "Center",
          display: "block",
          alignItems: "center",
          margin: "auto",
        }}
      ></Image>
      <Grid
        className="d-flex align-items-center justify-content-center"
        style={{ height: "1vh" }}
        textAlign="center"
        verticalAlign="middle"
        maxHeight="100vh"
      >
        <Grid.Column style={{ maxWidth: 500 }}>
          <Header as="h2" color="black" textAlign="center">
            <h2 className="text-center mb-4">Log In</h2>
          </Header>

          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Email"
                id="userName"
                required
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                id="password"
                type="password"
                required
              />

              <Button onClick={getUserFromDB} color="blue" fluid size="large">
                Login
              </Button>
            </Segment>
          </Form>

          <div className="w-100 text-center mt-2">
            <Link to="/signup"> Need an Account? Signup</Link>
          </div>
          <div className="w-100 text-center mt-2">
            <Link to="/forgotpassword">Forgot Password?</Link>
          </div>
        </Grid.Column>
      </Grid>
    </div>
  );
}
