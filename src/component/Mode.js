import React, {useState} from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {useDispatch} from 'react-redux';
import {ActionCreate} from '../../state';
import Data from '../Data/UserProfileData';
import {useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';

const Mode = ({Id}) => {
  const [ModalData, setModalData] = useState('');
  let navigation=useNavigation()
  const iconData = [
    {name: 'android-messages', Icon: MaterialCommunityIcons, Id_: 'Message'},
    {name: 'call', Icon: MaterialIconsIcon, Id_: 'Call'},
    {name: 'video-camera', Icon: FontAwesome, Id_: 'Video-call'},
    {name: 'info', Icon: FeatherIcon, Id_: 'Info'},
  ];
  const dispatch = useDispatch();

  useEffect(() => {
    Data.map(data => {
      if (data.Id === Id) {
        console.log(data);
        setModalData(data);
      }
    });
  }, []);

  const press = () => {
    // console.log(Id,'jkkkkkkkkkkkkkkkkkkkk')
      navigation.navigate('Setting' , {Id:Id});
    
  };
  return (
    <View style={styles.modalOuter}>
      <Pressable
        style={styles.modalOuter}
        onPress={() => {
          dispatch(ActionCreate.ShowModal([false, 0]));
        }}></Pressable>
      <View style={styles.modal}>
        <Image
          source={{
            uri: ModalData.imgUrl,
          }}
          style={styles.modal_image}
        />
        <View style={styles.modal_icons}>
          {iconData.map(data => {
            return (
              <View style={styles.icon}>
                <TouchableOpacity
                  onPress={() => press()}
                  style={{
                    height: '100%',
                    // backgroundColor:"red",
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <data.Icon
                    name={data.name}
                    size={20}
                    color="#0b9870"
                    style={
                      data.name === 'android-messages' ? styles.messageIcon : ''
                    }
                  />
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  modalOuter: {
    backgroundColor: '#00000073',
    width: '100%',
    height: '101%',
    position: 'absolute',
    top: 0,
    // justifyContent:'space-between',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: 'white',
    width: '65%',
    height: '39%',
    // padding:10,
    marginTop: 95,
  },
  modal_image: {
    width: '100%',
    height: '85%',
  },
  modal_icons: {
    backgroundColor: 'black',
    height: '15%',
    width: '100%',
    flexDirection: 'row',
  },
  icon: {
    backgroundColor: 'white',
    height: '100%',
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  messageIcon: {
    transform: [{scaleX: -1}],
  },
});
export default Mode;
