import {
    ACTION_IS_ON_REQUEST,
    ACTION_LOG_IN,
    ACTION_LOG_OUT,
    ACTION_ERROR_MESSAGE,
    ACTION_IS_LOGGED,
    ACTION_RESET_PASSWORD
  } from "../actions/user"
  
  import Immutable from 'seamless-immutable';
  
  const initialState = Immutable({
    isOnRequest: false,
    error: null,
    message: null,
    isLogged: false,
    userToken: null,
    userLogin: null,
    resetPassword: false,
  });
  
  export default function user(state = initialState, action) {
    switch (action.type) {
      case ACTION_LOG_IN:
        return state.merge({
          isLogged: action.payload.isLogged,
          userToken: action.payload.userToken,
          userLogin: action.payload.userLogin,
          error: action.payload.error
        });
      case ACTION_IS_ON_REQUEST:
        return state.merge({
          isOnRequest: action.payload,
          error: null
        });
      case ACTION_LOG_OUT:
        return state.merge({
          isLogged: false,
          userToken: null,
          userLogin: null
        });
        case ACTION_RESET_PASSWORD:
        return state.merge({
          isLogged: false,
          userToken: null,
          userLogin: null,
          resetPassword: true,
          message: action.payload.message
        });
      case ACTION_ERROR_MESSAGE:
        return state.merge({
          error: action.payload.error,
          message: action.payload.message
        });
      default:
        return state;
    }
  }

  
  export function getUserLogin(state) {
    return state.user.userLogin;
  }
  
  export function isLogged(state) {
    return state.user.isLogged;
  }
  
  export function isReseting(state) {
    return state.user.resetPassword;
  }
  export function isOnRequest(state) {
    return state.user.isOnRequest;
  }
  
  export function getRequestError(state) {
    return state.user.error
  }
  
  export function getRequestMessage(state) {
    return state.user.message
  }