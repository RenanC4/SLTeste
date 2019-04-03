import React from 'react';
import {Provider as StoreProvider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import Store from './src/store/store';
import {AppNavigator} from './src/actions/navigator';
import firebase from 'firebase';
const store = Store;

export default class App extends React.Component {
  
  state = {
    areResourcesReady: false
  };

  constructor(props) {
    super(props);
  }
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAMoHcm-k3CByF2xPWDdzeTu_iozZ5sJTQ",
      authDomain: "slauth-5e266.firebaseapp.com",
      databaseURL: "https://slauth-5e266.firebaseio.com",
      projectId: "slauth-5e266",
      storageBucket: "slauth-5e266.appspot.com",
      messagingSenderId: "771333889337"
    });
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <StoreProvider store={store}>
        <PaperProvider>
          <AppNavigator/>
        </PaperProvider>
      </StoreProvider>
    );
  }
}