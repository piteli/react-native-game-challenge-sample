import React from "react";
import { Text, ActivityIndicator } from "react-native"
import Dialog, { DialogContent } from 'react-native-popup-dialog';

export default class PopupSpinner extends React.Component {

  render(){
    return (
        <Dialog
          visible={this.props.loadingSpinnerVisible}
        >
          <DialogContent style={{marginTop : 20, flexDirection: "row", justifyContent : "center", alignItems : "center"}}>
            <ActivityIndicator size="large" color="#0000ff"/>
            <Text style={{marginLeft : 10}}>{this.props.textDisplay}</Text>
          </DialogContent>
        </Dialog>
    )
  }
}
