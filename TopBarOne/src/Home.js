import React, {Component} from 'react';
import { Text, View, Button } from 'react-native';

export default class Home extends Component {
    static navigationOptions = {
        title: 'Home',
      };
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Home!</Text>
            <Button
             title="Go to Detail"
             onPress={() => this.props.navigation.navigate('Detail')}
           /> 
        </View>
      );
    }
  }

