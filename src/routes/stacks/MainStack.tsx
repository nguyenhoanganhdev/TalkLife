import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from '@scenes/Homepage';
import SignUp from '@scenes/SignUp';
import UserDetails from '@scenes/UserDetails';
import UsersList from '@scenes/UsersList';
// import customTheme from '@theme';
import { FC } from 'react';
import * as React from 'react';

export type MainStackParamList = {
  Home: undefined;
  UsersList: undefined;
  UserDetails: {
    userId: number;
  };
  SignUp: undefined;
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
    </MainStack.Navigator>
  );
};
