import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import TabsStack from './TabsStack';

export type RootStackParamList = {
  HomeScreen: undefined;
  TicketsScreen: undefined;
  TabsStack: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export type HomeScreenPageProps = NativeStackScreenProps<
  RootStackParamList,
  'HomeScreen'
>;
export type TicketsScreenPageProps = NativeStackScreenProps<
  RootStackParamList,
  'TicketsScreen'
>;

const RootStackNavigation = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1C357F',
        },
        headerTintColor: '#FFF',
      }}>
      <RootStack.Group screenOptions={{headerShown: false}}>
        <RootStack.Screen name="TabsStack" component={TabsStack} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootStackNavigation;
