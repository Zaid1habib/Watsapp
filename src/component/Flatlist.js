import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';
import {ActionCreate} from '../../state';
import {useSelector} from 'react-redux';
import Mode from './Mode';

const Item = ({
  item,
  backgroundColor,
  onPress,
  textColor,
  navigation,
  screen,
  show,
}) => {
  const dispatch = useDispatch();
const state = useSelector(state => state.Search);

  return (
    <View style={{flexDirection: 'row', backgroundColor: 'white'}}>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: 80,
          padding: 10,
        }}
        onPress={() => {
          dispatch(ActionCreate.ShowModal([true, item.Id]));
          console.log(state);
        }}>
        <Image source={{uri: item.imgUrl}} style={styles.ProfileImage} />
      </TouchableOpacity>
      <TouchableOpacity
        onLongPress={() => {
          alert('long pressed');
        }}
        onPress={() => {
          screen === 'Chat'
            ? navigation.navigate('ChatScreen', {Id: item.Id})
            : screen === 'calls'
            ? navigation.navigate('CHATS')
            : '';
        }}
        style={[
          styles.item,
          backgroundColor,
          // {alignItems: 'center', justifyContent: 'center'},
        ]}
        key={item.Id}>
        <View>
          <Text style={[styles.title, textColor]}>{item.UserName}</Text>
          <Text style={[styles.LastMsg]}>
            {screen === 'Chat'
              ? item.UserName
              : screen === 'calls'
              ? 'item?.callTime'
              : ''}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.callIcon}>
        {screen === 'calls' ? (
          <MaterialIconsIcon
            name="call"
            size={25}
            color="#0b7065"
            style={{
              position: 'relative',
              top: 25,
            }}
          />
        ) : (
          console.log('..')
        )}
      </TouchableOpacity>
    </View>
  );
};

const Flatlist = ({Data, navigation, screen, show}) => {
  const [dt, setdt] = useState(Data.data);
  const state = useSelector(state => state.Search);

  useEffect(() => {
    // if (state.length >= 0) {
      dt.map((d) => {
        console.log(d.Id)
        });

    // }
  }, []);
  const renderItem = ({item}) => {
    return (
      <Item
        item={item}
        screen={screen}
        navigation={navigation}
        backgroundColor={{backgroundColor: 'white'}}
        textColor={{color: 'black'}}                                                                                                                           
        style={{width: '100%', height: '100%', padding: 0, margin: 0}}
        show={show}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={dt} renderItem={renderItem} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 1,
  },
  item: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingLeft: 5,
  },
  title: {
    fontSize: 19,
  },
  ProfileImage: {
    padding: 10,
    backgroundColor: 'black',
    borderRadius: 100,
    width: 50,
    height: 50,
  },
  LastMsg: {
    color: 'gray',
  },
  callIcon: {
    marginLeft: 'auto',
    marginRight: 10,
    height: '100%',
    width: 55,
    alignItems: 'center',
  },
});

export default Flatlist;
