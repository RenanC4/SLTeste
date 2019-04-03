import {
    ACTION_CREATE_TASK,
    ACTION_DELETE_TASK,
    ACTION_UPDATE_TASK,
    ACTION_GET_ALL_TASK,
    ACTION_GET_TASK,
    ACTION_IS_ON_REQUEST,
    ACTION_ERROR_MESSAGE
    
  } from "../actions/task"
  
  import Immutable from 'seamless-immutable';
  
  const initialState = Immutable({
    allTasks: false,
    individualTask: null,
    message: null,
    error:null,
    isOnRequest:null
  });
  
  export default function task(state = initialState, action) {
    switch (action.type) {
      case ACTION_CREATE_TASK:
        return state.merge({
          message: action.payload.message,
          error: null
        });
      case ACTION_IS_ON_REQUEST:
        return state.merge({
          isOnRequest: action.payload,
          error: null
        });
      case ACTION_DELETE_TASK:
        return state.merge({
            message: action.payload.message,
            error: action.payload.error
        });
        case ACTION_UPDATE_TASK:
        return state.merge({
            message: action.payload.message,
            error: null
        });
      case ACTION_ERROR_MESSAGE:
        return state.merge({
          error: action.payload.error,
          message: action.payload.message
        });
        case ACTION_GET_ALL_TASK:
        return state.merge({
          allTasks:action.payload,
          error: null,
          message: null
        });
        case ACTION_ERROR_MESSAGE:
        return state.merge({
          individualTask: action.payload,
          error: null,
          message: null
        });
      default:
        return state;
    }
  }

  

  
  
  export function isOnRequest(state) {
    return state.task.isOnRequest;
  }
  
  export function getRequestError(state) {
    return state.task.error
  }
  
  export function getRequestMessage(state) {
    return state.task.message
  }

  export function getAllTasks(state) {
    return state.task.allTasks
  }

  export function getIndividualTask(state) {
    return state.task.individualTask
  }