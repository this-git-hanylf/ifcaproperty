import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {useFetch} from './components/useFetch';
import {urlApis} from '@Config';
import {sessions} from './_helpers';
import {Alert} from 'react-native';

import {
  SignIn,
  CreateAccount,
  Profile,
  Home,
  Splash,
  EmergencyCall,
} from '../Screens/Screens';

const AuthStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const EmergencyCallStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} />
  </HomeStack.Navigator>
);

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Profile} />
  </ProfileStack.Navigator>
);

const EmergencyCallStackScreen = () => (
  <EmergencyCallStack.Navigator>
    <EmergencyCallStack.Screen
      name="Emergency Call"
      component={EmergencyCall}
    />
  </EmergencyCallStack.Navigator>
);

export default props => {
  //declare state
  const [isLoading, setisLoading] = React.useState(true);
  const [email, setEmail] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [token, setToken] = React.useState('');
  const [userId, setUserId] = React.useState('');
  const [isLogin, setIsLogin] = React.useState('');
  const [mounted, setMounted] = React.useState('');
  const [promo, setPromo] = React.useState([]);
  const [profile, setProfile] = React.useState([]);
  const [fotoProfile, setFotoProfile] = React.useState('');
  // close declare state

  const getDataSession = async () => {
    //get session data
    const email = await sessions.getSess('@User');
    const username = await sessions.getSess('@Name');
    const token = await sessions.getSess('@Token');
    const userId = await sessions.getSess('@UserId');
    // const isLogin = await sessions.getSess('@isLogin');
    const isLogin = true;
    const mounted = true;

    //set session data
    setEmail(email);
    setUsername(username);
    setToken(token);
    setUserId(userId);
    setIsLogin(isLogin);
    setMounted(mounted);
  };

  // getProfile = () => {
  //   console.log('urlapis', urlApis);
  //   fetch(
  //     urlApis + 'c_profil/getData/IFCAMOBILE' + email + '/' + userId,
  //     // "https://my.api.mockaroo.com/news.json",
  //     {
  //       method: 'GET',
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //         Token: token,
  //       },
  //     },
  //   )
  //     .then(response => response.json())
  //     .then(res => {
  //       if (!res.Error) {
  //         let resData = res.Data[0];
  //         console.log('res', res);
  //         console.log('resdata profile', resData);

  //         // ? Agar Gambar Tidak ter cache
  //         let url = resData.pict + '?random_number=' + new Date().getTime();
  //         setProfile(resData, () => {
  //           if (resData.pict) {
  //             setFotoProfile({uri: url});
  //           }
  //         });
  //       } else {
  //         setisLoading(false, () => {
  //           alert(res.Pesan);
  //         });
  //       }
  //       console.log('getProfile', res);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };

  React.useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 2000);
    //call const async or something cost
    getDataSession();
    // getProfile();
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  // console.log('dataprofil', dataProfile);
  return (
    <NavigationContainer>
      {isLogin == true ? (
        <Tabs.Navigator>
          <Tabs.Screen name="Home" component={HomeStackScreen} />
          <Tabs.Screen
            name="EmergencyCall"
            component={EmergencyCallStackScreen}
          />
          <Tabs.Screen name="Profile" component={ProfileStackScreen} />
        </Tabs.Navigator>
      ) : (
        <Tabs.Navigator>
          <Tabs.Screen name="Home" component={HomeStackScreen} />
          <Tabs.Screen name="Profile" component={ProfileStackScreen} />
        </Tabs.Navigator>
        // <AuthStack.Navigator>
        //   <AuthStack.Screen
        //     name="SignIn"
        //     component={SignIn}
        //     options={{
        //       title: 'Sign In',
        //     }}
        //   />
        //   <AuthStack.Screen name="CreateAccount" component={CreateAccount} />
        // </AuthStack.Navigator>
      )}
    </NavigationContainer>
  );
};
