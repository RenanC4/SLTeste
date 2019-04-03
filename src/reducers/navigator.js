import * as Actions from './../actions/navigator'
import {NavigationActions} from 'react-navigation'
import {RootNavigator} from '../actions/navigator'

const router = RootNavigator.router;
const initialAction = router.getActionForPathAndParams(Actions.ACTION_OPEN_LOGIN.routeName);
const initialState = router.getStateForAction(initialAction);

export default function navigation(state = initialState, action) {
  let nextState; 

  switch (action.type) {
    case Actions.ACTION_OPEN_LOGIN.action:
      nextState = router.getStateForAction(
        NavigationActions.navigate({routeName: Actions.ACTION_OPEN_LOGIN.routeName}),
        state
      );
      break;
      case Actions.ACTION_OPEN_HOME.action:
      nextState = router.getStateForAction(
        NavigationActions.navigate({routeName: Actions.ACTION_OPEN_HOME.routeName}),
        state
      );
      break;
      case Actions.ACTION_OPEN_CREATE_TASK.action:
      nextState = router.getStateForAction(
        NavigationActions.navigate({routeName: Actions.ACTION_OPEN_CREATE_TASK.routeName}),
        state
      );
      break;
    default:
      nextState = router.getStateForAction(action, state);
      break;
  }

  return nextState || state
}