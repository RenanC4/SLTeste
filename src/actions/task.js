import TaskService from './../services/task';

export const ACTION_IS_ON_REQUEST = 'ACTION_IS_ON_REQUEST:task';
export const ACTION_CREATE_TASK = 'ACTION_CREATE_TASK:task';
export const ACTION_DELETE_TASK = 'ACTION_DELETE_TASK:task';
export const ACTION_UPDATE_TASK = 'ACTION_UPDATE_TASK:task';
export const ACTION_ERROR_MESSAGE = 'ACTION_ERROR_MESSAGE:task';
export const ACTION_GET_TASK = 'ACTION_GET_TASK:task';
export const ACTION_GET_ALL_TASK = 'ACTION_GET_ALL_TASK:task';

export function createTask(taskData) {
  return async (dispatch) => {
    try {
      dispatch({type: ACTION_IS_ON_REQUEST, payload: true});
      const createTask = await TaskService.createTask(taskData);
      dispatch({type: ACTION_IS_ON_REQUEST, payload: false});

      if(createTask){
        dispatch({
            type: ACTION_CREATE_TASK,
            payload: {message: 'Task Criada com sucesso' }
          });
      } 
      
    } catch (error) {
      dispatch({type: ACTION_IS_ON_REQUEST, payload: false});
      dispatch({
        type: ACTION_ERROR_MESSAGE,
        payload: {error: error.message}
      });
    }
  };
}

export function getAllTasks() {
  return async (dispatch) => {
    try {
      dispatch({type: ACTION_IS_ON_REQUEST, payload: true});
      const getAllTasks = await TaskService.getAllTasks();
      dispatch({type: ACTION_IS_ON_REQUEST, payload: false});

      if(getAllTasks){
        for(var i in getAllTasks){
          
        }

        dispatch({
            type: ACTION_GET_ALL_TASK,
            payload: getAllTasks
          });
      } 
      
    } catch (error) {
      dispatch({type: ACTION_IS_ON_REQUEST, payload: false});
      dispatch({
        type: ACTION_ERROR_MESSAGE,
        payload: {error: error.message}
      });
    }
  };
}

export function showError(error) {
  return (dispatch) => {
    dispatch({type: ACTION_ERROR_MESSAGE, payload: {message: null, error: error}});
  };
}