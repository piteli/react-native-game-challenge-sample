import React from "react";
import {View, Text, Button} from "react-native";
import {styles} from './styles';

export default class Quiz extends React.Component {

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.sectionTop}>
            <Text>{this.props.question[this.props.currentQuestionIndex].category}</Text>
        </View>
        <View style={styles.sectionCenter}>
            <Text>{this.props.question[this.props.currentQuestionIndex].question}</Text>
        </View>
        <View style={styles.sectionBottom}>
        <Button
          onPress={() => this.props.setAnswer(this.props.currentQuestionIndex,true)}
          title="True"
          color="green"
          style={{padding : 10 , width : '90%', borderRadius : 20, margin: 20}}
          />
        <Button
          onPress={() => this.props.setAnswer(this.props.currentQuestionIndex, false)}
          title="False"
          color="red"
          style={{padding : 10 , width : '90%', borderRadius : 20}}
          />
        </View>
      </View>
    );
  }
}
