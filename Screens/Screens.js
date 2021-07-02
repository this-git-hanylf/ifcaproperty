import React from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';

import {AuthContext} from './_context';
import ScreenHome from './Home/index';
import ScreenProfile from './Profile/index';
import ScreenAmenities from './Amenities/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});

const ScreenContainer = ({children}) => (
  <View style={styles.container}>{children}</View>
);

export const SignIn = ({navigation}) => {
  //   const {signIn} = React.useContext(AuthContext);

  return (
    <ScreenContainer>
      <Text>Sign In Screen</Text>
      <Button title="Sign In" onPress={() => navigation.push('SignIn')} />
      <Button
        title="Create Account"
        onPress={() => navigation.push('CreateAccount')}
      />
    </ScreenContainer>
  );
};

export const Home = ({navigation}) => {
  //   const {signIn} = React.useContext(AuthContext);

  return (
    <ScreenContainer>
      <ScreenHome></ScreenHome>
    </ScreenContainer>
  );
};

export const Profile = ({navigation}) => {
  //   const {signIn} = React.useContext(AuthContext);
  return (
    <ScreenContainer>
      <ScreenProfile></ScreenProfile>
    </ScreenContainer>
  );
};

export const CreateAccount = () => {
  //   const {signUp} = React.useContext(AuthContext);

  return (
    <ScreenContainer>
      <Text>Create Account Screen</Text>
      <Button title="Sign Up" onPress={() => navigation.push('SignUp')} />
    </ScreenContainer>
  );
};

export const Amenities = () => {
  return (
    <ScreenContainer>
      <ScreenAmenities></ScreenAmenities>
    </ScreenContainer>
  );
};