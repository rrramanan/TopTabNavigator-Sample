import React, {Component} from 'react';
import { Text, View, Button } from 'react-native';


export default class Product2 extends Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Product2</Text>

          <Button
             title="Go to Home #"
             onPress={() => this.props.navigation.navigate('Home')}
           /> 


        </View>
      );
    }
  }