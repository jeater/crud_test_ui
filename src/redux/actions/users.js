export const GET_USERS_DATA = "GET_USERS_DATA";
export const SUCCESS_GET_USERS_DATA = "SUCCESS_GET_USERS_DATA";
export const ADD_NEW_USER = "ADD_NEW_USER";
export const SUCCESS_ADD_NEW_USER = "SUCCESS_ADD_NEW_USER";
export const EDIT_USER = "EDIT_USER";
export const SUCCESS_EDIT_USER = "SUCCESS_EDIT_USER";
export const DELETE_USER = "DELETE_USER";
export const SUCCESS_DELETE_USER = "SUCCESS_DELETE_USER";

export const getUsersData = () => ({
  type: GET_USERS_DATA,
});

export const addNewUser = (userData) => ({
  type: ADD_NEW_USER,
  userData,
});

export const editUser = (userData) => ({
  type: EDIT_USER,
  userData,
});

export const deleteUser = (userData) => ({
  type: DELETE_USER,
  userData,
});
