import React, {useEffect, useState} from 'react';
import Flatlist from '../../src/component/Flatlist';
import DATA from '../Data/UserProfileData';
const CHATS = ({navigation, route, show}) => {
  const [data, setData] = useState(DATA);
  // alert(show)
  useEffect(() => {
  }, []);

  return <Flatlist Data={{data}} navigation={navigation}  show={show}screen={'Chat'} />;
};

export default CHATS;
