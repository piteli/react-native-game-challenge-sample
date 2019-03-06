import React from "react";
import Quiz from "./Quiz"
import {BackHandler} from "react-native";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addAnswer, removeAllQuiz } from '../../services/redux/action';

class QuizContainer extends React.Component {

  constructor(props){
    super(props);
    this.initiateStates();
    this.initiateInstances();
    this.overrideNativeConfig();
  }

  initiateStates(){
    this.state = {
      currentQuestionIndex : 0,
      questions : this.props.screenProps.storeFunctions.getState().quizs.quizs,
      correctAnswers : 0
    };
  }

  initiateInstances(){
    this.setAnswer = this.setAnswer.bind(this);
  }

  overrideNativeConfig(){
    BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.removeAllQuiz();
      this.props.navigation.goBack();
        return true;
           });
  }

  componentDidMount(){
    this.listeningIfAllQuestionAnswered();
  }

  setAnswer(index, answer, question, correctQuestionAnswer){
    console.log(answer)
    console.log(correctQuestionAnswer);
    const get_answer = this.state.questions[index].correct_answer === answer ? this.state.correctAnswers + 1 : this.state.correctAnswers;
    console.log(get_answer);
    this.state.currentQuestionIndex + 1 == this.state.questions.length ? null : this.setState({currentQuestionIndex : index + 1, correctAnswers : get_answer});
    this.props.addAnswer({questionIndex : index, answer : answer, correctAnswers : get_answer, question : question, correctQuestionAnswer : correctQuestionAnswer});
    this.state.currentQuestionIndex + 1 == this.state.questions.length ? this.props.navigation.navigate('result') : null;
    console.log(this.props.screenProps.storeFunctions.getState());
  }

  listeningIfAllQuestionAnswered(){
 
  }

  render(){
    return <Quiz question={this.state.questions} setAnswer={this.setAnswer} 
                  currentQuestionIndex={this.state.currentQuestionIndex} />;
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addAnswer, removeAllQuiz
  }, dispatch)
);

export default connect(null, mapDispatchToProps)(QuizContainer);
