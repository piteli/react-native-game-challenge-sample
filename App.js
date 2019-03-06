import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppStack from './src/navigations/StackNavigator';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import friendReducer from './src/services/redux/reducer';

const store = createStore(friendReducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
          <AppStack />
      </Provider>
    );
  }
}

