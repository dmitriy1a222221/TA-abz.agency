import { UPDATE_USERS } from 'constansts/users';

export const updateUsers = (state) => dispatch => {
    dispatch({
        type: UPDATE_USERS,
        payload: state
    })
};
