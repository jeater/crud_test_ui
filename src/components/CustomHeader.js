import React from "react";
import { Header } from "semantic-ui-react";

function CustomHeader(props) {
  return (
    <div style={{ minHeight: "15vh", display: "flex", alignItems: "center" }}>
      <Header as="h1" icon textAlign="center">
        <Header.Content>Users</Header.Content>
      </Header>
    </div>
  );
}
export default CustomHeader;
