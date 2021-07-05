import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Alert,
  Dimensions,
} from 'react-native';
import nbStyle from './Style';
// import DeviceInfo from 'react-native-device-info';
// import {urlApi} from '@Config';
// import {sessions, nav} from '../../_helpers';
// import colors from '../../Theme/Colors';
// import FlatListMenu from '../../components/FlatListMenu/FlatListMenu';

export default class Profile extends React.Component {
  // static options(passProps) {
  //   return {
  //     topBar: {
  //       visible: false,
  //       height: 0,
  //     },
  //     // statusBar :{
  //     //     style : 'light',
  //     //     backgroundColor :'#2c9993',
  //     // },
  //   };
  // }

  constructor(props) {
    super(props);

    this.state = {
      mounted: false,
      isDisabled: false,

      username: '',
      email: '',
      token: '',
      userId: '',

      fotoProfildefault: require('@Asset/icons/profile.png'),

      dataProfile: [],
      modalVisible: false,
      dataMenu: [
        {id: '1', menu: 'info personal'},
        {id: '2', menu: 'help'},
        {id: '3', menu: 'about us'},
        {id: '4', menu: 'sign out'},
      ],
    };
  }

  render() {
    return (
      <View>
        <Text>ini profile</Text>
      </View>
    );
  }
}
