import React from "react";
import Quiz from "./Quiz"
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addAnswer } from '../../services/redux/action';

class QuizContainer extends React.Component {

  constructor(props){
    super(props);
    this.initiateStates();
    this.initiateInstances();
  }

  initiateStates(){
    this.state = {
      currentQuestionIndex : 1,
      questions : this.props.screenProps.storeFunctions.getState().quizs.quizs
    };
  }

  initiateInstances(){
    this.setAnswer = this.setAnswer.bind(this);
  }

  componentDidMount(){
  }

  setAnswer(){}

  render(){
    return <Quiz question={this.state.questions} setAnswer={this.setAnswer} 
                  currentQuestionIndex={this.state.currentQuestionIndex} />;
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addQuiz,
  }, dispatch)
);

export default connect(mapDispatchToProps)(QuizContainer);
