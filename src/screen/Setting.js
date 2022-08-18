import React, {useState} from 'react';
import {
  BackHandler,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import UserProfileData from '../Data/UserProfileData';
import {useEffect} from 'react';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Head from '../component/Header';
const Setting = () => {
  const navigation = useNavigation();
  const [DATA, setDATA] = useState('');
  const [SettingList, setSettingList] = useState([
    {
      iconName: 'key',
      LibName: FontistoIcon,
      ListName: 'Account',
      Discribtion: 'Privacy, security, change number',
      navigate: 'Account',
    },
    {
      iconName: 'android-messages',
      LibName: MaterialCommunityIcons,
      ListName: 'Chats',
      Discribtion: 'Theme, Wallpapers, chat history',
    },
    {
      iconName: 'notifications',
      LibName: IoniconsIcons,
      ListName: 'Notifications',
      Discribtion: 'Message, group & call tones',
    },
    {
      iconName: 'user',
      LibName: MaterialCommunityIcons,
      ListName: 'Storage and data',
      Discribtion: 'Network usage auto-download',
    },
    {
      iconName: 'md-help-circle-outline',
      LibName: IoniconsIcons,
      size: 28,
      ListName: 'Help',
      Discribtion: 'Help center, contact us, privacy policy',
    },
  ]);
  BackHandler?.addEventListener('hardwareBackPress', () => {
    navigation.navigate('CHATS');
  });
  useEffect(() => {
    UserProfileData.filter(data => {
      // console.log(ids, 'lllllllllllll');
      if (data.Id === 4) {
        // console.log(ids, 'this is');
        setDATA(data);
      }
    });
  }, []);
  return (
    <ScrollView>
      <Head name={'Settings'} navi={'CHATS'} />
      <TouchableOpacity
        style={styles.ProfileBox} 
        onPress={() => {
          navigation.navigate('Profile');
        }}>
        <Image source={{uri: DATA.imgUrl}} style={styles.ProfileImage} />
        <View style={styles.ProfileNamebox}>
          <Text style={styles.ProfileName}>{DATA.UserName}</Text>
          <Text style={{color: 'gray'}}>Hey there i am Using WhatsApp</Text>
        </View>
        {/* <View style={styles.Scan}></View> */}
      </TouchableOpacity>
      <View>
        {SettingList.map(dt => {
          return (
            <TouchableOpacity
              style={[styles.ListBox]}
              onPress={() => {
                navigation.navigate(dt.navigate);
              }}>
              <View style={styles.iconBox}>
                <dt.LibName
                  name={dt.iconName}
                  size={dt?.size ? dt.size : 20}
                  style={
                    dt.iconName === 'android-messages'
                      ? styles.flipIcon
                      : dt.iconName === 'key'
                      ? styles.rotateIcon
                      : ''
                  }
                />
              </View>
              <View style={[styles.listNameBox]}>
                <Text style={styles.listName}>{dt.ListName}</Text>
                <Text>{dt.Discribtion}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
      <TouchableOpacity style={styles.inviteFriend}>
        <FontAwesome5 name="user-friends" size={18} />
        <Text style={{paddingLeft: 30, color: 'black'}}>Invite a friend</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ProfileBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 1,
    borderColor: '#ababab33',
  },
  ProfileImage: {
    borderRadius: 50,
    width: 70,
    height: 70,
  },
  ProfileNamebox: {
    padding: 10,
  },
  ProfileName: {
    color: 'black',
    fontSize: 20,
  },
  ListBox: {
    flexDirection: 'row',
    padding: 8,
  },
  listNameBox: {
    padding: 10,
    paddingLeft: 15,
  },
  listName: {
    color: 'black',
  },
  iconBox: {
    padding: 15,
    // paddingLeft: 20,
    width: 60,
    // height:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:'red',
  },
  flipIcon: {
    transform: [{scaleX: -1}],
  },
  rotateIcon: {
    transform: [{rotate: '-45deg'}],
  },
  inviteFriend: {
    padding: 22,
    paddingTop: 15,
    flexDirection: 'row',
  },
});
export default Setting;
