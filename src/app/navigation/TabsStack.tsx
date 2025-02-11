import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../../shared/screens/HomeScreen';
import TicketsScreen from '../../shared/screens/TicketsScreen';
import {View} from 'react-native';

const Tab = createBottomTabNavigator();

const TabsStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'О приложении',
          tabBarIcon: () => {
            return (
              <View
                style={{
                  borderColor: 'red',
                  borderWidth: 1,
                  width: 30,
                  height: 30,
                  borderRadius: 10,
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="TicketsScreen"
        component={TicketsScreen}
        options={{
          title: 'Котировки',
          tabBarIcon: () => {
            return (
              <View
                style={{
                  borderColor: 'green',
                  borderWidth: 1,
                  width: 30,
                  height: 30,
                  borderRadius: 10,
                }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsStack;
