import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from '@scenes/Categories ';
import Homepage from '@scenes/Homepage';
import SignUp from '@scenes/SignUp';
import UserDetails from '@scenes/UserDetails';
import UsersList from '@scenes/UsersList';
// import customTheme from '@theme';
import { FC } from 'react';
import * as React from 'react';

export type MainStackParamList = {
  SignUp: undefined;
  Categories: undefined;
};

const MainStack = createNativeStackNavigator<MainStackParamList>();

export const MainStackScreen: FC = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="SignUp">
      <MainStack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          gestureEnabled: false, // To disable the swipe back on each separated screen
        }}
      />
      <MainStack.Screen
        name="Categories"
        component={Categories}
        options={{
          gestureEnabled: false, // To disable the swipe back on each separated screen
        }}
      />
    </MainStack.Navigator>
  );
};
