import React from "react";
import {View, Text, Button, TouchableOpacity} from "react-native";
import {styles} from './styles';
import PopupSpinner from '../../components/PopupSpinner'

export default class Home extends React.Component {

  render(){
    return (
      <View style={styles.container}>
        <PopupSpinner loadingSpinnerVisible={this.props.showLoading} textDisplay={"Loading ..."}/>
        <View style={styles.sectionTop}>
          <Text>Welcome to Trivia Challenge</Text>
        </View>

        <View style={styles.sectionCenter1}>
          <Text>You will be presented with 10 True or False questions.</Text>
        </View>

        <View style={styles.sectionCenter2}>
          <Text>Can you Score 100%?</Text>
        </View>

        <View style={styles.sectionBottom}>
        <TouchableOpacity
          onPress={() => this.props.beginGame()}
          style={{width : 300, height : 50, borderRadius : 20, justifyContent : 'center', alignItems : 'center',
                  backgroundColor : 'blue'}}>
            <Text style={{color : 'white'}}>Begin Game</Text>
        </TouchableOpacity>
        </View>

      </View>
    );
  }
}
