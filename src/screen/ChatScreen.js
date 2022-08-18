import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  BackHandler,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import DATA from '../Data/UserProfileData';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
// import WhatsAppTextInput from 'react-native-whatsapp-textinput'
// import Icon from 'react='
const ChatScreen = ({route, navigation}) => {
  const {Id} = route.params;
  const [data, setData] = useState(null);
  const [InputText, setInputText] = useState('');
  const [marginBottom, setmarginBottom] = useState(0);
  const [typing, setTyping] = useState(false);
  const [date, setDate] = useState(new Date());
  const [keyboard, setkeyboard] = useState(0);

  const [msg, setmsg] = useState([
    {
      reciveTo: 3,
      sendBy: 1,
      msg: 'hello ',
      id: 1,
      sendTime: date,
    },
    {
      reciveTo: 1,
      sendBy: 3,
      msg: 'hey ',
      id: 1,
      sendTime: date,
    },
    {
      reciveTo: 2,
      sendBy: 1,
      msg: 'hey lsakflskajn osan fjkanfkab kfajsb iakjfak',
      id: 1,
      sendTime: date,
    },
  ]);
  useEffect(() => {
    DATA.map(a => {
      if (a.Id === Id) {
        setData(a);
      }
    });
    if (InputText.length >= 1) {
      setTyping(true);
    } else {
      setTyping(false);
    }
  }, [InputText]);

  BackHandler?.addEventListener('hardwareBackPress', () => {
    navigation.navigate('CHATS');
  });

  const Send = () => {
    const newMsg = {
      reciveTo: Id,
      sendBy: 1,
      msg: InputText,
      id: 1,
      sendTime: date,
    };
   msg.push(newMsg)
    // setmsg([newMsg, ...msg]);
    setInputText('')
    console.log( msg)
  };

  const Record = () => {};

  Keyboard.addListener('keyboardDidHide', () => setkeyboard(0));
  Keyboard.addListener('keyboardDidShow', () => setkeyboard(0));

  return (
    <View style={{flex:1,}}>
      <View style={styles.ChatScreen}>
        <AntDesignIcon
          name="arrowleft"
          size={20}
          color="white"
          onPress={() => {
            navigation.navigate('CHATS');
          }}
          style={styles.backButton}
        />
        {/* <Image source={{ uri: '', }} /> */}
        <View style={styles.HeaderUserNameBox}>
          <Image
            source={{uri: data?.imgUrl}}
            style={styles.chatScreenProfileImage}
          />
          <View style={[styles.HeaderUserName]}>
            <Text style={[styles.username, {color: 'white'}]}>
              {data?.UserName}
            </Text>
          </View>
        </View>

        <View style={styles.iconBox}>
          <Icon name="video-camera" size={25} color="white" />
          <MaterialIconsIcon name="call" size={20} color="white" />
          <EntypoIcon
            name="dots-three-vertical"
            size={20}
            style={{marginRight: 10, color: 'white'}}
          />
        </View>
      </View>
      <SafeAreaView style={[styles.Chatbox, {marginBottom: keyboard}]}>
        <ScrollView
          style={{
            height: '10%',
            backgroundColor: '#f2ede7c2',
            margin: 0,
            padding: 10,
          }}>
          {msg.map(data => {
            return data.reciveTo === Id && data.sendBy === 1 ? (
              <View
                style={{
                  backgroundColor: '#e5f9d4',
                  width: 'auto',
                  padding: 10,
                  marginTop: 3,
                  marginBottom: 3,
                  marginLeft:'auto',
                  maxWidth:310,
                  borderRadius:8,
                }}>
                <Text style={{color: 'black'}}>{data.msg}</Text>
              </View>
            ) : data.reciveTo === 1 && data.sendBy === Id ? (
              <View
                style={{
                  backgroundColor: 'white',
                  padding: 10,
                  position:'relative',
                  marginTop: 3,
                  marginBottom: 3,
                  maxWidth:310,
                  borderRadius:8,
                  marginRight:'auto',
                }}>

                <Text style={{color: 'black'}}>{data.msg}</Text>
              </View>
            ) : (
              console.log('afjddsk')
            );
          })}
        </ScrollView>

        <View style={styles.ChatInput}>
          <View
            style={{
              width: '82%',
              padding: 0,
              margin: '2%',
              marginRight: 4,
              // marginTop: 'auto',
              
            }}>
            <TextInput
              style={styles.input}
              onChangeText={text => {
                setInputText(text);
              }}
              value={InputText}
              placeholder="Message"
            />
          </View>
          <View
            style={{
              width: '16%',
              justifyContent: 'center',
              // marginBottom: -10,
              height: '100%',
              alignItems:'center',
              position:'relative',
              right:'8%',
              // backgroundColor:'gray',
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#128C7E',
                borderRadius: 50,
                width: 52,
                height: 52,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={typing === true ? Send : Record}>
              {typing === true ? (
                <IoniconsIcon name="send" size={28} color="white" />
              ) : (
                <MaterialIconsIcon
                  name="keyboard-voice"
                  size={22}
                  color="white"
                />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  ChatScreen: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#0b7065',
  },

  backButton: {
    width: '10%',
    padding: 5,
    fontWeight: '100',
  },
  HeaderUserNameBox: {
    height: 60,
    width: '55%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  HeaderUserName: {
    color: 'white',
    height: '100%',
    width: '74%',
    // paddingTop: 30,
    marginLeft: 5,
    padding: 5,
    justifyContent: 'center',
  },
  username: {
    color: 'white',
    fontSize: 16,
    // height:,
  },
  iconBox: {
    height: '100%',
    width: '35%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  chatScreenProfileImage: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: 'red',
  },
  Chatbox: {
    backgroundColor: '#f2ede7c2',
    flex:1,
    width: '100%',
  },
  input: {
    height: 45,
    width: '100%',
    // margin: 20,
    // marginLeft: 8,
    backgroundColor: 'white',
    color: 'black',
    // padding: 10,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    paddingLeft: 35,
    borderRadius: 50,
    fontSize: 18,
  },
  ChatInput: {
    backgroundColor: '#f2ede7c2',
    width: '100%',
    height:55,
    padding: 0,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
});

export default ChatScreen;
