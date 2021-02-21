import logo from "./logo.png";
import { db } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";

import { Link } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";

export default function Signup() {
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
                placeholder="Username"
                required
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                required
              />

              <Button onClick={addUser} color="blue" fluid size="large">
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
