import { combineReducers } from 'redux';

import users from '05-reducers/app/users';

export const reducers = {
  users: users
};

export default combineReducers(reducers);
