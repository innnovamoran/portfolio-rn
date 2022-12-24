import React, {lazy} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';

const {Navigator, Group, Screen} = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="home">
        <Screen name="home" component={Home} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
