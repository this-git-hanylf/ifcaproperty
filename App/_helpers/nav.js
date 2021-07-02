// import { Navigation } from "react-native-navigation";
import {Navigation} from '@react-navigation/native';

export const nav = {
  push,
  pop,
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
