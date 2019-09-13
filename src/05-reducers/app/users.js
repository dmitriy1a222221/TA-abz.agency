import { GET_USERS, GET_USER, POST_USER, GET_POSITION, UPDATE_USERS } from 'constansts/users';

const initialState = {
    data: null,
    users: null,
    headerUser: null,
    registerInfo: null,
    positionUser: null,
    updateUsers: false
};

export default (state = initialState, { type, payload }) => {
  switch(type) {
    case GET_USERS:
      return {
        ...state,
        data: payload.data,
        users: payload.data.users
      };
      case GET_USER:
          return {
              ...state,
              headerUser: payload.data.user
          };
      case POST_USER:
          return {
              ...state,
              registerInfo: payload
          };
      case GET_POSITION:
          return {
              ...state,
              positionUser: payload.data
          };
      case UPDATE_USERS:
          return {
              ...state,
              updateUsers: payload
          };
    default: return state
  }
}
