import React, { Component } from 'react';
import { Text, View, Button}from 'react-native'

export default class ModalScreen extends Component {

   render() {
    return (
      //<Modal visible={ props.display } animationType = "slide" onRequestClose={ () => console.log('closed') }>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
     // </Modal>
    );
  }
}


