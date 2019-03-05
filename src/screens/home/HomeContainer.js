import React from "react";
import Home from "./Home";

export default class HomeContainer extends React.Component {

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

  initiateInstances(){}

  componentDidMount(){

  }

  beginGame(){

    this.props.navigation.push('quiz');
  }

  render(){
    return <Home showLoading={this.state.showLoading} />;
  }
}
