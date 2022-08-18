import { useNavigationState } from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, Text, BackHandler} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
const Cam = ({navigation}) => {
  const [CameraImag, setCameraImag] = useState('');
  const routesLength = useNavigationState(state => state.routes.length);
  console.log(routesLength)
  useEffect(() => {
  }, []);
  BackHandler?.addEventListener(
    "hardwareBackPress",()=>{
        navigation?.navigate('CHATS')
    }
  );
  //   openCam;
  return (
    <View>
      {/* <Text>Number of routes: {routesLength.toString()}</Text>; */}
    </View>

  );
};

export default Cam;
