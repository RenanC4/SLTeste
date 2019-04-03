import {
  createStackNavigator,
} from 'react-navigation'

import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers'

import {connect} from 'react-redux'


import LoginScreen from './../view/containers/login/index'
import HomeScreen from './../view/containers/home/index'
import CreateTaskScreen from './../view/containers/task/create/index'
export const ACTION_OPEN_LOGIN = {
  action: 'ACTION_OPEN_LOGIN',
  routeName: 'LoginScreen'
};
export const ACTION_OPEN_HOME = {
  action: 'ACTION_OPEN_HOME',
  routeName: 'HomeScreen'
};
export const ACTION_OPEN_CREATE_TASK = {
  action: 'ACTION_OPEN_CREATE_TASK',
  routeName: 'CreateTaskScreen'
};
const NavigationMiddleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.navigation
);

const RootNavigator = createStackNavigator({
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }    
  },
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }    
  },
  CreateTaskScreen: {
    screen: CreateTaskScreen,
    navigationOptions: {
      header: null
    }    
  },
  
});

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
  state: state.navigation,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export {RootNavigator, AppNavigator, NavigationMiddleware};