import React, { useEffect, useReducer, useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Dimmer, Loader, Grid } from "semantic-ui-react";

import TableSection from "../components/TableSection";
import NewUserForm from "../components/NewUserForm";
import EditUserForm from "../components/EditUserForm";
import CustomHeader from "../components/CustomHeader";
import {
  getUsersData,
  addNewUser,
  editUser,
  deleteUser,
} from "../redux/actions/users";
import { useSelector, useDispatch } from "react-redux";

function DashboardScreen() {
  const dispatch = useDispatch();
  const { loading, users } = useSelector((state) => state.users);
  const [showEditForm, setShowEditForm] = useState(false);
  const [formState, setFormState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name: "",
      email: "",
      id: null,
    }
  );

  useEffect(() => {
    dispatch(getUsersData());
  }, [dispatch]);

  const handleChange = (event) => {
    const input = event.target.name;
    const value = event.target.value;

    setFormState({ [input]: value });
  };

  const handleCreateUser = () => {
    const { name, email } = formState;

    if (name !== "" && email !== "") {
      dispatch(addNewUser(formState));
      setFormState({
        email: "",
        name: "",
      });
    }
  };

  const handleEditUser = () => {
    const { name, email } = formState;

    if (name !== "" && email !== "") {
      dispatch(editUser(formState));
      cancelEdit();
    }
  };

  const handleDeleteUser = (user) => {
    dispatch(deleteUser(user));
  };

  const onClickEditUser = (user) => {
    setShowEditForm(true);
    setFormState(user);
  };

  const cancelEdit = () => {
    setShowEditForm(false);
    setFormState({
      name: "",
      email: "",
    });
  };

  let userFrom = null;

  if (showEditForm) {
    userFrom = (
      <EditUserForm
        formState={formState}
        handleChange={handleChange}
        handleSubmit={handleEditUser}
        cancelEdit={cancelEdit}
      />
    );
  } else {
    userFrom = (
      <NewUserForm
        formState={formState}
        handleChange={handleChange}
        handleSubmit={handleCreateUser}
        cancelEdit={cancelEdit}
      />
    );
  }

  let tableSection = null;

  if (loading) {
    tableSection = (
      <Dimmer active inverted>
        <Loader />
      </Dimmer>
    );
  } else {
    tableSection = (
      <TableSection
        users={users}
        editUser={onClickEditUser}
        cancelEdit={cancelEdit}
        deleteUser={handleDeleteUser}
      />
    );
  }

  return (
    <>
      <CustomHeader />
      <Grid container columns={2}>
        <Grid.Column width={10}>{tableSection}</Grid.Column>
        <Grid.Column width={6}>{userFrom}</Grid.Column>
      </Grid>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    subscriptions: state.subscriptions,
  };
};

export default compose(connect(mapStateToProps, null))(DashboardScreen);
