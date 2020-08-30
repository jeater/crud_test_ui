const initialState = {
  loading: true,
  users: [],
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERS_DATA":
      return {
        ...state,
        loading: true,
      };
    case "SUCCESS_GET_USERS_DATA":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default users;
