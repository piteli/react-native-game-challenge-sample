import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {RootStack} from './src/navigations/StackNavigator';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <RootStack />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  //for default css main container, which is optional
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
