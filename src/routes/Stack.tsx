import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import Tabs from './Tabs';

const Stack = createStackNavigator();

export default function StackNavigator() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Stack.Navigator>
      {!isLoggedIn ? (
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      ) : (
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
}
