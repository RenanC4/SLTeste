import {combineReducers} from 'redux';

import {ACTION_LOG_OUT} from '../actions/user'

import user from './user';
import task from './task';

import navigation from './navigator';

const appReducer = combineReducers({
  user,
  task,
  navigation,
});

export default ( state, action ) => {
  if ( action.type === ACTION_LOG_OUT ) {
    state = undefined;
  }

  return appReducer(state, action)
};
