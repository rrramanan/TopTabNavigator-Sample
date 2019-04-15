import React, {Component} from 'react';
import { Text, View, Button } from 'react-native';


export default class Settings extends Component {
    static navigationOptions = {
        title: 'Info',
      };
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Info</Text>
        </View>
      );
    }
  }