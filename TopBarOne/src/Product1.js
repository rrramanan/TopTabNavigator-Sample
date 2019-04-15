import React, {Component} from 'react';
import { Text, View, Button } from 'react-native';
import { Container, Header, Content, Icon } from 'native-base';

export default class Product1 extends Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Product1</Text>

          <Button
             title="Go to Settings"
             onPress={() => this.props.navigation.navigate('Settings')}
           /> 
        </View>
      );
    }
  }