import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const Account = ({navigation}) => {
  const list = [
    {
      Icon: MaterialCommunityIcons,
      Name: 'lock',
      ListName: 'Privacy',
    },
    {
      Icon: MaterialCommunityIcons,
      Name: 'security',
      ListName: 'Security',
    },
    {
      Icon: MaterialIcons,
      Name: 'send-to-mobile',
      ListName: 'Change number',
    },
    {
      Icon: MaterialCommunityIcons,
      Name: 'file-document',
      ListName: 'Request account info',
    },
    {
      Icon: MaterialCommunityIcons,
      Name: 'delete',
      ListName: 'Delete my account',
    },
  ];
  return (
    <View>
      <View style={styles.AccountHeader}>
        <TouchableOpacity>
          <AntDesignIcon
            name="arrowleft"
            size={20}
            color="white"
            onPress={() => {
              navigation.navigate('Setting');
            }}
          />
        </TouchableOpacity>
        <Text style={{color: 'white', fontSize: 18, paddingLeft: 30}}>
          Account
        </Text>
      </View>
      <ScrollView>
        {list.map(dt => {
          return (
            <TouchableOpacity style={styles.list}>
                <View style={{ justifyContent:'center' , alignItems:'center',height:40 , width:70, }}>
              <dt.Icon name={dt.Name} size={22} color="gray"/>
              </View>
              <Text style={{fontSize:14,  color:'black',}}>{dt.ListName}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  AccountHeader: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#0b7065',
    alignItems: 'center',
    height: 60,
  },
  list: {
    flexDirection:'row',
    // padding:20,
    height:60,
    alignItems:'center',
  },
});

export default Account;
