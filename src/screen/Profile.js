import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Head from '../component/Header';
import {useNavigation} from '@react-navigation/native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
const Profile = () => {
  const navigation = useNavigation();
  const list = [
    {
      Icon: FontAwesomeIcon,
      IconName: 'user',
      label: 'Name',
      name: 'Shabana',
      description:
        'This i not your username or pin. This name will be visible to your WhatsApp contacts.',
      EditIcon: true,
      key: 1,
    },
    {
      Icon: Feather,
      IconName: 'alert-circle',
      label: 'About',
      name: 'Hey there! I am using WhatsApp.',
      EditIcon: true,
      key: 2,
    },
    {
      Icon: MaterialIcons,
      IconName: 'call',
      label: 'Phone',
      name: '+92 032847924',
      EditIcon: false,
      key: 3,
    },
  ];
  return (
    <ScrollView style={{flex: 1}}>
      <Head name={'Profile'} navi={'Setting'} />
      <View style={styles.profileImage}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1657000625935-9ff8fd6e7b04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          }}
          style={{width: 150, height: 150, borderRadius: 150}}
        />
        <View
          style={{
            position: 'absolute',
            top: '64.2%',
            right: '30%',
            color: 'white',
            backgroundColor: '#0b7065',
            borderRadius: 50,
            width: 45,
            height: 45,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FontAwesome5Icon name="camera" size={20} color="white" />
        </View>
      </View>
      <View style={{marginTop: 20}}>
        {list.map(dt => {
          return (
            <TouchableOpacity
              style={{
                width: '100%',
                maxHeight: 55,
                marginBottom: dt.description ? 50 : 10,
                marginTop: 5,
              }}>
              <View
                style={{
                  width: '100%',
                  height: dt.description ? '70%' : '100%',
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    width: 60,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <dt.Icon name={dt.IconName} size={18} />
                </View>

                <View style={{maxWidth: 330}}>
                  <Text style={{fontSize: 13}}>{dt.label}</Text>
                  <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                    {dt.name}
                  </Text>
                </View>
                {dt.EditIcon && (
                  <View
                    style={{
                      marginLeft: 'auto',
                      marginRight: 25,
                      marginTop: 15,
                    }}>
                    <MaterialIcons name="edit" size={20} color="#0b7065" />
                  </View>
                )}
              </View>
              {(dt.description || dt.label === 'About') && (
                <View
                  style={{
                    marginLeft: 55,
                    paddingTop: dt.label === 'About' ? 0 : 8,
                    paddingBottom: dt.label === 'About' ? 0 : 15,
                    marginBottom: dt.label === 'About' ? 100 : 0,
                    borderBottomWidth: 1,
                    borderBottomColor: '#cacaca69',
                    width: '92.5%',
                  }}>
                  <Text style={{fontSize: 13}}>
                    {dt.label === 'About' ? '' : dt.description}
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  profileImage: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Profile;
