import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const Head = ({name , navi}) => {
    const navigation = useNavigation();
  return (
    <View style={styles.navigationBar}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(navi);
        }}
        style={{}}>
        <AntDesignIcon
          name="arrowleft"
          size={20}
          color="white"
          style={styles.backButton}
        />
      </TouchableOpacity>
      <Text style={[styles.Header]}>{name}</Text>
    </View>
    // <View></View>
  );
};

const styles = StyleSheet.create({
  navigationBar: {
    width: '100%',
    height: 55,
    backgroundColor: '#0b7065',
    flexDirection: 'row',
    padding: 8,
    alignItems: 'center',
  },
  Header: {
    fontSize: 19,
    marginLeft: '5%',
    color: 'white',
  },
  backButton: {
    padding: 10,
  },
});

export default Head;
