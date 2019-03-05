import React from "react";
import {View, Text, Button} from "react-native";
import {styles} from './styles';
import PopupSpinner from '../../components/PopupSpinner'

export default class Home extends React.Component {

  render(){
    return (
      <View style={styles.container}>
        {
          this.state.showLoading ? 
          <PopupSpinner /> : null
        }
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
        <Button
          onPress={() => this.props.beginGame()}
          title="Begin"
          color="blue"
          />
        </View>

      </View>
    );
  }
}
