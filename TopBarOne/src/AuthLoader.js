import React, {Component} from 'react';
import {View,ActivityIndicator,StatusBar,StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
export default class AuthLoader extends Component {

    constructor() {
      super();
      this.checkStorage();
    }
  
    checkStorage = async () => {
      const userToken = await AsyncStorage.getItem('userToken');
      this.props.navigation.navigate(userToken ? 'Homescreen' : 'AuthScreen');
    };
  
    render() {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
          <StatusBar barStyle="default" />
        </View>
      );
    }
    
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });