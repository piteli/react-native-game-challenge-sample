import React, { Component } from 'react';
import HomeContainer from './HomeContainer';

export default class HomeIndex extends Component {
  render() {
    const { navigation } = this.props;
    return (
        <HomeContainer navigation={navigation} screenProps={this.props.screenProps} />
    );
  }
}
