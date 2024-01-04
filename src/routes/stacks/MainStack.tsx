import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from '@scenes/Homepage';
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
};

const MainStack = createNativeStackNavigator<MainStackParamList>();

export const MainStackScreen: FC = () => {
  return (
    <MainStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        fullScreenGestureEnabled: true,
      }}>
      <MainStack.Screen
        name="Home"
        component={Homepage}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          gestureEnabled: false, // To disable the swipe back on each separated screen
        }}
      />
      <MainStack.Screen
        name="UsersList"
        component={UsersList}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerBackVisible: false,
        }}
      />
      <MainStack.Screen
        name="UserDetails"
        component={UserDetails}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerBackVisible: false,
        }}
      />
    </MainStack.Navigator>
  );
};
