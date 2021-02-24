import React from "react";
import "../App.css";
import {
  Grid,
  Header,
  Image,
  Segment,
} from 'semantic-ui-react';

function Admin () {
  return (
    <>
      <Segment style={{ padding: '8em 0em' }} vertical>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={8} textAlign="center">
              <Header as='h2'>
                <Image circular src='https://react.semantic-ui.com/images/avatar/large/patrick.png' /> Patrick
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  )
}

export default Admin;
