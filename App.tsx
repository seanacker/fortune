/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import LandingScreen from './src/screens/LandingScreen';
import FormScreen from './src/screens/Form';
import ResultScreen from './src/screens/ResultScreen';


const Stack = createStackNavigator();



function App(): React.JSX.Element {

  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen name="Landing" component={LandingScreen}/>
      <Stack.Screen name="Form" component={FormScreen}/>
      <Stack.Screen name="Result" component={ResultScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App;
