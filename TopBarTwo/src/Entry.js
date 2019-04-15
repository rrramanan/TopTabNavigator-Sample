import React, {Component} from 'react';
import { Text, View, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class Entry extends Component {
    // static navigationOptions = {
    //     title: 'Home',
    //   };
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>WELCOME</Text>
            <Button
             title="Login"
             onPress={this.signin}
           /> 
            <Button
             title="Nervermind"
             onPress={() => this.props.navigation.navigate('ModalScreen')}
           /> 
        </View>
      );
    }

    signin = async () => {
        await AsyncStorage.setItem('userToken', 'true');
        this.props.navigation.navigate('Homescreen');
      };

  }