import React from "react";
import { Header, Form, Button } from "semantic-ui-react";

function EditUserForm(props) {
  const { handleSubmit, handleChange, cancelEdit, formState } = props;

  return (
    <Form onSubmit={handleSubmit}>
      <Header as="h3" textAlign="center" content="Edit user" />
      <Form.Field>
        <label>Name</label>
        <input
          placeholder="Name"
          name="name"
          value={formState.name}
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Field>
        <label>Email</label>
        <input
          placeholder="Email"
          name="email"
          value={formState.email}
          onChange={handleChange}
        />
      </Form.Field>
      <Button type="submit" color="green" content="Edit user" />
      <Button color="red" content="Cancel Edit" onClick={cancelEdit} />
    </Form>
  );
}

export default EditUserForm;