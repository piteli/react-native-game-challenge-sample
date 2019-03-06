import React from "react";
import {View, Text, Button, TouchableOpacity, ListView} from "react-native";
import {styles} from './styles';

export default class Result extends React.Component {

  render(){
    return (
        <View style={styles.container}>
        <View style={styles.sectionTop}>
          <Text>You Scored</Text>
          <Text>{`${this.props.storeData.quizs.correctAnswers}/${this.props.storeData.quizs.quizs.length}`}</Text>
        </View>

        <View style={styles.sectionCenter}>
        <ListView
            dataSource={this.props.dataSource}
            renderRow={(rowData) => (
                <View style={{flex : 1, flexDirection : 'row', justifyContent : 'center', 
                alignItems : 'flex-start', borderBottomWidth: 1,borderBottomColor : 'grey'}}>
                    <View style={{flex : 0.3}}>
                       <Text>{`Your answer : ${rowData.answer}`}</Text>
                    </View>
                    <View style={{flex : 0.4}}>
                       <Text>{`Question : ${rowData.question}`}</Text>
                    </View>
                    <View style={{flex : 0.3}}>
                       <Text>{`correct answer : ${rowData.correctQuestionAnswer}`}</Text>
                    </View>
                </View>
                )}
        />
        </View>

        <View style={styles.sectionBottom}>
        <TouchableOpacity
          onPress={() => this.props.restartGame()}
          style={{width : 300, height : 50, borderRadius : 20, justifyContent : 'center', alignItems : 'center',
                  backgroundColor : 'purple'}}>
            <Text style={{color : 'white'}}>Play Again?</Text>
        </TouchableOpacity>
        </View>

      </View>
    );
  }
}
