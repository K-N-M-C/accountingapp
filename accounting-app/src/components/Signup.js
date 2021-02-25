import logo from "./logo.png";
import { Link } from "react-router-dom";
import { Button, Form, Grid, Header, Image, Segment } from "semantic-ui-react";
import { db, auth } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";

export default function Signup() {
  const [test] = useCollection(db.collection("user"));

  //post request

  const addUserToDB = () => {
    const fName = document.getElementById("firstName").value;
    const lName = document.getElementById("lastName").value;
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;
    const date = new Date();
    var month = ("0" + (date.getMonth() + 1)).slice(-2);
    var year = date.getFullYear();
    const userName = fName.charAt(0) + lName + month + year;

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(user);
        db.collection("user")
          .doc(user.uid)
          .set({
            address: document.getElementById("address").value,
            email: email,
            firstName: fName,
            lastName: lName,
            password: password,
            userName: userName,
            type: "accountant",
          });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });

    alert("User Added Successfully!");
  };

  return (
    <div>
      <Image
        className="img"
        src={logo}
        alt="logo"
        style={{
          textAlign: "Center",
          justifyContent: "Center",
          display: "block",
          alignItems: "center",
          margin: "Auto",
        }}
      ></Image>
      <Grid
        className="d-flex align-items-center justify-content-center"
        style={{ height: "1vh" }}
        textAlign="center"
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 600 }}>
          <Header as="h2" color="black" textAlign="center">
            <h2 className="text-center mb-4">Sign Up</h2>
          </Header>

          <Form size="large">
            <Segment stacked>
              <Form.Input id="firstName" fluid placeholder="First Name" />
              <Form.Input id="lastName" fluid placeholder="Last Name" />
              <Form.Input id="address" fluid placeholder="Address" />
              <Form.Input id="userName" fluid placeholder="Username" />
              <Form.Input id="email" fluid placeholder="Email " required />
              <Form.Input
                id="password"
                fluid
                placeholder="Password"
                type="password"
                required
              />
              <Form.Input
                fluid
                placeholder="Confirm Password"
                type="password"
                required
              />

              <Button onClick={addUserToDB} color="blue" fluid size="large">
                Signup
              </Button>
            </Segment>
          </Form>
          <div className="w-100 text-center mt-2">
            <Link to="/">Already have an account? Login</Link>
          </div>
        </Grid.Column>
      </Grid>
    </div>
  );
}
