import React, {Component} from 'react';
import { Text, View, Button } from 'react-native';


export default class Detail extends Component {
    static navigationOptions = {
        title: 'Detail',
      };
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Detail</Text>

          <Button
             title="Go back to Product2"
             onPress={() => this.props.navigation.popToTop()}
           /> 


        </View>
      );
    }
  }