import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAWEcYqHAS_ShC9mAe_6na9j7rHjgXjlAI',
      authDomain: 'manager-39bc6.firebaseapp.com',
      databaseURL: 'https://manager-39bc6.firebaseio.com',
      projectId: 'manager-39bc6',
      storageBucket: 'manager-39bc6.appspot.com',
      messagingSenderId: '772223621566'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
