import React, {Component} from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class Logout extends Component {
    
    constructor() {
        super();
        this.logout();
      }

      logout = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('AuthScreen');
      }

    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        </View>
      );
    }
  }