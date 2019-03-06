import React from "react";
import {View, Text, Button, TouchableOpacity} from "react-native";
import {styles} from './styles';

export default class Quiz extends React.Component {

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.sectionTop}>
            <Text>{this.props.question[this.props.currentQuestionIndex].category}</Text>
        </View>
        <View style={styles.sectionCenter1}>
            <Text>{this.props.question[this.props.currentQuestionIndex].question}</Text>
        </View>
        <View style={styles.sectionCenter2}>
            <Text>{`${this.props.currentQuestionIndex + 1}/${this.props.question.length}`}</Text>
        </View>
        <View style={styles.sectionBottom}>
        <TouchableOpacity
          onPress={() => this.props.setAnswer(this.props.currentQuestionIndex, 'True',
          this.props.question[this.props.currentQuestionIndex].question, this.props.question[this.props.currentQuestionIndex].correct_answer)}
          style={{width : 300, height : 50, borderRadius : 20, justifyContent : 'center', alignItems : 'center',
                  backgroundColor : 'green'}}>
            <Text style={{color : 'white'}}>True</Text>
        </TouchableOpacity>
        <View style={{height : 10}}></View>
        <TouchableOpacity
          onPress={() => this.props.setAnswer(this.props.currentQuestionIndex, 'False', 
          this.props.question[this.props.currentQuestionIndex].question, this.props.question[this.props.currentQuestionIndex].correct_answer)}
          style={{width : 300, height : 50, borderRadius : 20, justifyContent : 'center', alignItems : 'center',
          backgroundColor : 'red'}}>
            <Text style={{color : 'white'}}>False</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
