import React from "react";
import Home from "./Home";
import ApiMain from "../../services/Api";
import {BackHandler} from "react-native";
import Env from "../../../environments";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addQuiz } from '../../services/redux/action';

class HomeContainer extends React.Component {

  constructor(props){
    super(props);
    this.initiateStates();
    this.initiateInstances();
    this.overrideNativeConfig();
  }

  initiateStates(){
    this.state = {
      gameDifficulty : 'hard',
      showLoading : false
    };
  }

  initiateInstances(){
    this.beginGame = this.beginGame.bind(this);
  }

  overrideNativeConfig(){
    BackHandler.addEventListener('hardwareBackPress', () => {
        this.props.navigation.popToTop();
        return true;
           });
  }

  componentDidMount(){
  }

  autoNavigateQuizScreen(){
    this.props.navigation.push('quiz');
  }

  beginGame(){
    this.setState({showLoading : true}, () => this.getAllQuestionAndAnswer());
  }

  getAllQuestionAndAnswer(){
        new ApiMain().getApiWithParams(new Env().getBaseUrl(),new Env().getPath()['initiateApi'], null,
        {amount : '10', difficulty : 'hard', type : 'boolean'}, false, false, null)
        .then((response) => response.json())
          .then((responseJson) => {
              this.props.addQuiz(responseJson.results);
              this.setState({showLoading : false}, () =>  this.autoNavigateQuizScreen());
            })
            .catch((error) => {
              console.log(error);
            });
  }

  render(){
    return <Home showLoading={this.state.showLoading} beginGame={this.beginGame} />;
  }
}

const mapStateToProps = (state) => {
  const { quizs } = state
  return { quizs }
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addQuiz,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
