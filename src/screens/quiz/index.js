import React, { Component } from 'react';
import QuizContainer from './QuizContainer';

export default class QuizIndex extends Component {
  render() {
    const { navigation } = this.props;
    return <QuizContainer navigation={navigation} />;
  }
}
