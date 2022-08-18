import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome'
// import EntypoIcon from 'react-native-vector-icons/Entypo'
import MyStack from './src/component/Stack';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}