import React from "react";
import Result from "./Result"
import {BackHandler, ListView} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getResult, removeAllQuiz } from '../../services/redux/action';

class ResultContainer extends React.Component {

  constructor(props){
    super(props);
    this.initiateStates();
    this.initiateInstances();
    this.overrideNativeConfig();
  }

  initiateStates(){
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.screenProps.storeFunctions.getState().quizs.questionsAndAnswers),
    };
  }

  initiateInstances(){
    this.restartGame = this.restartGame.bind(this);
  }

  overrideNativeConfig(){
    BackHandler.addEventListener('hardwareBackPress', () => {
        this.props.removeAllQuiz();
        this.props.navigation.popToTop();
        return true;
           });
  }

  componentDidMount(){
    console.log('result here');
    console.log(this.props.screenProps.storeFunctions.getState());
  }

  restartGame(){
    this.props.removeAllQuiz();
    this.props.navigation.popToTop();
  }

  render(){
    return <Result restartGame={this.restartGame} dataSource={this.state.dataSource}
                    storeData={this.props.screenProps.storeFunctions.getState()} />;
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    getResult, removeAllQuiz
  }, dispatch)
);

export default connect(null, mapDispatchToProps)(ResultContainer);
