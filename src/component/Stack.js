import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ChatScreen from '../screen/ChatScreen';
import MyTabs from './Tabbar';
import DATA from '../Data/UserProfileData';
import Mode from './Mode';
import Setting from '../screen/Setting';
import Account from '../screen/Account';
import Profile from '../screen/Profile';
const Stack = createStackNavigator();
 
function MyStack() {
  const [data, setData] = useState(DATA);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="WhatsApp" component={MyTabs} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
      <Stack.Screen name="Modal" component={Mode} />
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

export default MyStack;

{
  /* <View style={{ backgroundColor: '#0b7065', flexDirection: 'row', alignItems: 'center', }}>
                <Text style={{ color: 'white', height: 55, padding: 20, paddingBottom: 5, fontSize: 20, fontWeight: 'bold', }}>WhatsApp</Text>
                <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'flex-end', width: '100%', height: 55, paddingTop: 15, }}>
                    <Icon name="search" size={18} style={{ marginRight: 30, color: 'white', fontWeight: 'lighter', }} />
                    <EntypoIcon name="dots-three-vertical" size={20} style={{ marginRight: 10, color: 'white', }} />
                </View>
            </View> */
}
