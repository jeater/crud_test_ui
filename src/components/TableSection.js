import React from "react";
import { Header, Table, Button } from "semantic-ui-react";

function TableSection(props) {
  const { users, deleteUser, editUser } = props;

  return (
    <>
      <Header as="h3" textAlign="center" content="Users Table" />
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign="center">Id</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Name</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Email</Table.HeaderCell>
            <Table.HeaderCell />
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {users.map((user, index) => {
            return (
              <Table.Row key={index}>
                <Table.Cell textAlign="center">{index + 1}</Table.Cell>
                <Table.Cell>{user.name}</Table.Cell>
                <Table.Cell>{user.email}</Table.Cell>
                <Table.Cell width={3} textAlign="center">
                  <Button
                    icon="edit"
                    color="yellow"
                    onClick={() => editUser(user)}
                  />
                  <Button
                    icon="trash"
                    color="red"
                    onClick={() => deleteUser(user)}
                  />
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </>
  );
}

export default TableSection;
