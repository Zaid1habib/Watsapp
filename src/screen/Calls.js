import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, BackHandler} from 'react-native';
// import { FlatList } from 'react-native-gesture-handler';
// import { FlatList } from 'react-native-gesture-handler'
import dataa from '../Data/UserProfileData';
import CallHistorydata from '../Data/CallHistory';
import Flatlist from '../component/Flatlist';

const Calls = ({navigation}) => {
  const [dat, setData] = useState(dataa);
  const [arrr, setarr] = useState([]);
  const data = [];
  BackHandler?.addEventListener('hardwareBackPress', () => {
    navigation?.navigate('CHATS');
  });
  // const [val, setVal] = useState();
  useEffect(() => {
    let array = [];
    const arr = CallHistorydata.map(a => {
      a.incoming === 1 || a.outgoing === 1
        ? a.incoming === 1
          ? array.push(a.outgoing)
          : array.push(a.incoming)
        : '';
    });
    array.map(val => {
      dat.map(a => {
        // console.log(val , a.Id)
        if (a.Id === val) {
          data.push(a);
        }
      });
    });
    setarr(data);
    console.log(arrr);
  }, []);

  return (
    <View style={{flex: 1}}>
      <Flatlist Data={{data}} navigation={navigation} screen={'calls'} />
    </View>
  );
};

export default Calls;

// const arr = CallHistorydata.filter(() => {
//   return (

//   )
// }) ? data.map(b => b.Id === a.incoming ? console.log(b) : b.Id === a.outgoing ? console.log(b) : '') : '');
