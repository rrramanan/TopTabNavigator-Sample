import React, {Component} from 'react';
import { Text, View, Button } from 'react-native';


export default class Settings extends Component {
    static navigationOptions = {
        title: 'Contact',
        
      };
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Contact</Text>
          <Button
             title="Go to info"
             onPress={() => this.props.navigation.navigate('Getinfo')}
           /> 
        </View>
      );
    }
  }