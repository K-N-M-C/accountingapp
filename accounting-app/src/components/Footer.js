import React from "react";
import { Container, Grid, Header, List, Segment } from "semantic-ui-react";

function Footer() {
  return (
    <div className="footer-container">
      <Segment
        inverted
        vertical
        style={{ marginTop: "30em", padding: "5em 0em" }}
      >
        <Container>
          <Grid inverted stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column textAlign="center">
                <Header inverted as="h2" content="Team 5" />
                <List link inverted>
                  <List.Item as="a">Kevin Nolan</List.Item>
                  <List.Item as="a">Nishik Patel</List.Item>
                  <List.Item as="a">Munia Rahman</List.Item>
                  <List.Item as="a">Carter Richter</List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </div>
  );
}

export default Footer;
