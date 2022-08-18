import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, } from 'react-native';
const Status = () => {
  // const navigation=  useNavigation()
  console.log('nffn');
  // BackHandler.addEventListener('hardwareBackPress', () => {
  //   navigation.navigate('CHATS');
  // });
  return (
    <View>
      <Text style={{color: 'red'}}> Status</Text>
    </View>
  );
};

export default Status;
