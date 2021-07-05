// import { Navigation } from "react-native-navigation";
import {Navigation} from '@react-navigation/native';

export const nav = {
  push,
  pop,
  navigate,
};

function push(componentId, screenName, pass) {
  Navigation.push(componentId, {
    component: {
      name: screenName,
      passProps: pass,
    },
  });
}

function pop(componentId) {
  Navigation.pop(componentId);
}

function navigate({screenName, params}) {
  navigation.dispatch(
    Navigation.navigate({
      name: screenName,
      params: {params},
    }),
  );
}

// navigation.dispatch(
//   CommonActions.navigate({
//     name: 'Profile',
//     params: {},
//   }),
// );
