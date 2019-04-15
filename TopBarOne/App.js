
import React, {Component} from 'react';
import { Icon } from 'native-base';
import { createSwitchNavigator, 
  createStackNavigator, 
  createAppContainer,
  createDrawerNavigator,  
  createMaterialTopTabNavigator } from "react-navigation";

import Home from './src/Home';
import Settings from './src/Settings';
import Product1 from './src/Product1';
import Product2 from './src/Product2';
import Detail from './src/Detail';
import Contact from './src/Contact';
import Getinfo from './src/Getinfo';
import Entry from './src/Entry';
import AuthLoader from './src/AuthLoader';
import ModalScreen from './src/ModalScreen';
import Logout from './src/Logout'

class App extends Component {
  render() {
    return (
      <SwitchNavigator/>
    );
  }
}


const Toptab = createMaterialTopTabNavigator({

  Product1: {screen: Product1},
  Product2: {screen: Product2},
  
},{
  navigationOptions:({navigation})=> {
    const {routeName} = navigation.state.routes[navigation.state.index]
    return{
      headerTitle: routeName
    }
    
  }
})

const Stack = createStackNavigator({

  Toptab: {screen: Toptab },
  Settings:{screen: Settings,navigationOptions:{headerLeft:false}},
  Home:{screen: Home,navigationOptions:{headerLeft:false}},
  Detail:{screen:Detail,navigationOptions:{headerLeft:false}}

}
,{
  defaultNavigationOptions: ({ navigation }) => {
    return {      
      headerLeft: (
        <Icon
          style={{ paddingLeft: 10 }}
          onPress={() => navigation.openDrawer()}
          name="ios-menu"
          size={30}
        />
      )
    };
  }
})


const Stack1 = createStackNavigator({
  Contact: {screen: Contact},
  Getinfo: {screen: Getinfo,navigationOptions:{headerLeft:false}},
}
,{
  defaultNavigationOptions: ({ navigation }) => {
    return {      
      headerLeft: (
        <Icon
          style={{ paddingLeft: 10 }}
          onPress={() => navigation.openDrawer()}
          name="ios-menu"
          size={30}
        />
      )
    };
  }
  
})

const Drawer = createDrawerNavigator({

  Main:{screen: Stack},
  Contact: {screen: Stack1},
  Logout:{screen: Logout}
  
})

const AuthStack = createStackNavigator({
  Entry: {screen: Entry},
  ModalScreen: {screen: ModalScreen}
},
  {mode: 'modal',headerMode:'none'}
  
  );

const SwitchNavigator = createSwitchNavigator({
  
  AuthLoader:{screen: AuthLoader},
  Homescreen: {screen: Drawer},
  AuthScreen: {screen: AuthStack}

},{
  initialRouteName: 'AuthLoader',
})

export default createAppContainer(SwitchNavigator);








