import React, {useEffect, useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Calls from '../screen/Calls';
import CHATS from '../screen/Chats';
import Status from '../screen/Status';
import Cam from '../screen/Cam';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import ImagePicker from 'react-native-image-crop-picker';
import Mode from './Mode';
import {Pressable, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Search} from '../../state/Action';
import * as Animatable from 'react-native-animatable';
const Tab = createMaterialTopTabNavigator();

function MyTabs({navigation}) {
  const [showModal, setShowModal] = useState(false);
  const [ShowSearchInput, setShowSearchInput] = useState(false);
  const [OpenMenu, setOpenMenu] = useState(false);
  const [search, setSearch] = useState('');
  const ShowModal_ = useSelector(state => state);
  const menu = [
    {
      name: 'New group',
    },
    {
      name: 'New broadcast',
    },
    {
      name: 'Linked devices',
    },
    {
      name: 'Starred messages',
    },
    {
      name: 'Settings',
      navigate: 'Setting',
    },
  ];
  const dispatch = useDispatch();
  const Menu = () => {
    setOpenMenu(true);
  };

  const onChange = e => {
    dispatch(Search(e));
  };

  return (
    <View style={{flex: 1}}>
      {ShowSearchInput === false && (
        <View
          style={{
            backgroundColor: '#0b7065',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              height: 55,
              padding: 20,
              paddingBottom: 5,
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            WhatsApp
          </Text>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              width: '100%',
              height: 55,
              paddingTop: 15,
            }}>
            <TouchableOpacity
              onPress={() => {
                setShowSearchInput(true);
              }}
              style={{
                marginRight: 27,
                height: 30,
                justifyContent: 'center',
              }}>
              <Icon
                name="search"
                size={18}
                style={{color: 'white', fontWeight: 'lighter'}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={Menu}
              style={{marginRight: 10, width: 30}}>
              <EntypoIcon
                name="dots-three-vertical"
                size={20}
                style={{color: 'white'}}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}

      {ShowSearchInput === true && (
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{
              padding: 10,
              width: 45,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => {
              setShowSearchInput(false);
            }}>
            <AntDesignIcon name="arrowleft" size={20} color="#0b7065" />
          </TouchableOpacity>
          <TextInput
            placeholder="Search"
            style={{padding: 10, paddingLeft: 15, width: '100%'}}
            onChangeText={onChange}
          />
        </View>
      )}

      <Tab.Navigator
        initialRouteName="CHATS"
        screenOptions={{
          tabBarLabelStyle: {fontSize: 12},
          // headerTitle: 'WhatsApp',
          tabBarStyle: {backgroundColor: '#0b7065'},
          tabBarLabelStyle: {color: 'white'},
          tabBarIndicatorStyle: {backgroundColor: 'white'},
          lazy: true,
          tabBarContentContainerStyle: {
            display: ShowSearchInput === true ? 'none' : 'flex',
          },
        }}>
        <Tab.Screen
          name="cam"
          component={Cam}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: tabInfo => (
              <Icon
                name="camera"
                size={tabInfo.focused ? 22 : 22}
                color={'white'}
              />
            ),
          }}
          listeners={() => {
            // ImagePicker.openCamera({
            //   width: 300,
            //   height: 400,
            //   cropping: true,
            // })
            //   .then(image => {
            //     // console.log(image)
            //     setCameraImag(image.path);
            //   })
            //   .catch(error => {
            //     alert(error);
            //     navigation.navigate('CHATS');
            //   });
          }}
        />
        <Tab.Screen name="CHATS" component={CHATS} />
        <Tab.Screen name="STATUS" component={Status} />
        <Tab.Screen name="CALLS" component={Calls} />
      </Tab.Navigator>

      {ShowModal_.ShowModal[0] === true ? (
        <Mode Id={ShowModal_.ShowModal[1]} />
      ) : (
        console.log('')
      )}

      {OpenMenu === true ? (
        <Pressable
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            alignItems: 'flex-end',
            padding: 5,
          }}
          onPress={() => {
            setOpenMenu(false);
          }}>
          <Animatable.Text
            animation="zoomIn"
            direction="alternate"
            easing="ease"
            duration={100}
            style={{
              backgroundColor: 'white',
              width: 200,
              height: 235,
              elevation: 10,
              shadowColor: '#171717',
              shadowOffset: {width: -2, height: 4},
              shadowOpacity: 2,
              shadowRadius: 3,
            }}>
            {menu.map(dt => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate(dt?.navigate, {Id: 1}),
                      setOpenMenu(false);
                  }}
                  style={{ width:200,}}
                  >
                  <Text style={{color: 'black', padding: 14, paddingLeft: 18}}>
                    {dt?.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </Animatable.Text>
        </Pressable>
      ) : (
        console.log('')
      )}
    </View>
  );
}

export default MyTabs;
