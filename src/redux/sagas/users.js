import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchUsers,
  addUser,
  editUser,
  deleteUser,
} from "../../services/HttpService";
import {
  GET_USERS_DATA,
  ADD_NEW_USER,
  EDIT_USER,
  DELETE_USER,
  SUCCESS_GET_USERS_DATA,
} from "../actions/users";

export function* requestUsersFromApi() {
  try {
    const usersResponse = yield call(fetchUsers);

    yield put({
      type: SUCCESS_GET_USERS_DATA,
      payload: usersResponse.data,
    });
  } catch (error) {}
}

export function* addUserApi(userData) {
  try {
    const addUserResponse = yield call(addUser, userData);

    yield put({
      type: SUCCESS_GET_USERS_DATA,
      payload: addUserResponse.data,
    });
  } catch (error) {}
}

export function* editUserApi(userData) {
  try {
    const editUserResponse = yield call(editUser, userData);

    yield put({
      type: SUCCESS_GET_USERS_DATA,
      payload: editUserResponse.data,
    });
  } catch (error) {}
}

export function* deleteUserApi(userData) {
  try {
    const deleteUserResponse = yield call(deleteUser, userData);

    yield put({
      type: SUCCESS_GET_USERS_DATA,
      payload: deleteUserResponse.data,
    });
  } catch (error) {}
}

export default function* watchRequestFetchApi() {
  yield takeLatest(GET_USERS_DATA, requestUsersFromApi);
  yield takeLatest(ADD_NEW_USER, addUserApi);
  yield takeLatest(EDIT_USER, editUserApi);
  yield takeLatest(DELETE_USER, deleteUserApi);
}
