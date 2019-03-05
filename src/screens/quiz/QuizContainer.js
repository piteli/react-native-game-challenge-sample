import React from "react";
import Quiz from "./Quiz"

export default class QuizContainer extends React.Component {

  constructor(props){
    super(props);
    this.initiateStates();
    this.initiateInstances();
  }

  initiateStates(){
    this.state = {
      gameDifficulty : 'hard'
    };
  }

  initiateInstances(){}

  componentDidMount(){

  }

  beginGame(){
    this.props.navigation.push('quiz');
  }

  render(){
    return <Home />;
  }
}
