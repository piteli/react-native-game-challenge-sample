import React from "react";
import Home from "./Home";
import ApiMain from "../../services/Api";
import Env from "../../../environments";
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const { quizs } = state
  return { quizs }
};

class HomeContainer extends React.Component {

  constructor(props){
    super(props);
    this.initiateStates();
    this.initiateInstances();
  }

  initiateStates(){
    this.state = {
      gameDifficulty : 'hard',
      showLoading : false
    };
  }

  initiateInstances(){
    this.beginGame = this.beginGame.bind(this);
    //create redux store here
  }
  

  componentDidMount(){

  }

  beginGame(){
    this.setState({showLoading : true}, () => this.getAllQuestionAndAnswer());
  }

  getAllQuestionAndAnswer(){
        new ApiMain().getApi(new Env().getBaseUrl(),new Env().getPath()['get_quiz'], null,
         false, false, null)
        .then((response) => response.json())
          .then((responseJson) => {
              console.log(responseJson.results);
               //store data to redux store

              this.props.navigation.push('quiz');


            })
            .catch((error) => {
              console.log(error);
            });
  }

  render(){
    return <Home showLoading={this.state.showLoading} beginGame={this.beginGame} />;
  }
}

export default connect(mapStateToProps)(HomeContainer);
