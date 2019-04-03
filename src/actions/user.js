import {AsyncStorage} from "react-native"
import UserService from './../services/user';

export const ACTION_IS_ON_REQUEST = 'ACTION_IS_ON_REQUEST:user';
export const ACTION_LOG_IN = 'ACTION_LOG_IN:user';
export const ACTION_LOG_OUT = 'ACTION_LOG_OUT:user';
export const ACTION_IS_LOGGED = 'ACTION_IS_LOGGED:user';
export const ACTION_ERROR_MESSAGE = 'ACTION_ERROR_MESSAGE:user';

export const ACTION_RESET_PASSWORD = 'ACTION_RESET_PASSWORD:user';

export function logIn(username, password) {
  return async (dispatch) => {
    try {
      dispatch({type: ACTION_IS_ON_REQUEST, payload: true});

      const user = await UserService.logIn(username, password);
      dispatch({type: ACTION_IS_ON_REQUEST, payload: false});

      if(user.error && user.error == 1){
        dispatch({
            type: ACTION_LOG_IN,
            payload: {isLogged: false, userName: username, passWord: password, error: user.status}
          });
      } else {
        dispatch({
            type: ACTION_LOG_IN,
            payload: {isLogged: true, userName: username, passWord: password, error: null}
          });
      }
      
    } catch (error) {
      dispatch({type: ACTION_IS_ON_REQUEST, payload: false});
      dispatch({
        type: ACTION_LOG_IN,
        payload: {isLogged: false, userName: null, passWord: null, error: error.message}
      });
    }
  };
}

export function logOut() {
  return async (dispatch) => {
    try {
      dispatch({type: ACTION_LOG_OUT});
    } catch (error) {
      console.error(error);
    }
  };
}

export function resetPassword(username) {
  return async (dispatch) => {
    try {
      const reset = await UserService.reset(username);
      dispatch({
        type: ACTION_RESET_PASSWORD,
        payload: {isLogged: false, userName: username, message: reset.message}
      });
    } catch (error) { dispatch({
      type: ACTION_RESET_PASSWORD,
      payload: {isLogged: false, userName: username, error: error}
    });
    }
  };
}


export function showError(error) {
  return (dispatch) => {
    dispatch({type: ACTION_ERROR_MESSAGE, payload: {message: null, error: error}});
  };
}