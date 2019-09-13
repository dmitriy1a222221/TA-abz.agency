import { apiUsers } from 'api/users';
import { apiPositions } from 'api/position';
import { GET_USERS, GET_USER, POST_USER, GET_POSITION } from 'constansts/users';

export const getUsers = (params) => dispatch => {
  apiUsers.getUsers(params)
      .then(res => {
        dispatch({
          type: GET_USERS,
          payload: res
        })
      })
      .catch(err => {
          console.log(err)
      })
};

export const getHeaderUser = (id) => dispatch => {
    apiUsers.getUser(id)
        .then(res => {
            dispatch({
                type: GET_USER,
                payload: res
            })
        })
        .catch(err => {
            console.log(err)
        })
};

export const postDataUser = (data) => dispatch => {
  apiUsers.postUser(data)
      .then(res => {
          dispatch({
              type: POST_USER,
              payload: res
          })
      })
      .catch(err => {
          console.log(err)
      })
};

export const getPositions = () => dispatch => {
    apiPositions.getPositions()
        .then(res => {
            dispatch({
                type: GET_POSITION,
                payload: res
            })
        })
        .catch(err => {
            console.log(err)
        });
};
