import React, {Component} from 'react';
import { Text, View, Button } from 'react-native';


export default class Settings extends Component {
    static navigationOptions = {
        title: 'Settings',
      };
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Settings!</Text>
        </View>
      );
    }
  }