import React from "react";
import { Link } from "react-router-dom";

import { Grid, Segment, List } from "semantic-ui-react";

class Sidebar extends React.Component {
  state = {};

  render() {
    return (
      <Grid.Column width={4}>
        <Segment className="sideBar" textAlign="left">
          <List>
            <List.Item>
              <List.Content>
                <Link to="/">Home</Link>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <Link to="/addPost">Add Post</Link>
              </List.Content>
            </List.Item>
          </List>
        </Segment>
      </Grid.Column>
    );
  }
}

export default Sidebar;
