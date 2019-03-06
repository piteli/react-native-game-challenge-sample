import React, { Component } from 'react';
import ResultContainer from './ResultContainer';

export default class ResultIndex extends Component {
  render() {
    const { navigation } = this.props;
    return <ResultContainer navigation={navigation} screenProps={this.props.screenProps} />;
  }
}
