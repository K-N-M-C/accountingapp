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
  var test = document.getElementById("address");
  if (test) {
    console.log(test);
  }

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
            <h2 className="text-center mb-4">Forgot Password</h2>
          </Header>

          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Email"
                required
              />

              <Button color="blue" fluid size="large">
                Submit
              </Button>
            </Segment>
          </Form>

          <div className="w-100 text-center mt-2">
            <Link to="/signup"> Need an Account? Signup</Link>
          </div>
          <div className="w-100 text-center mt-2">
            <Link to="/">Already have an account? Login?</Link>
          </div>
        </Grid.Column>
      </Grid>
    </div>
  );
}