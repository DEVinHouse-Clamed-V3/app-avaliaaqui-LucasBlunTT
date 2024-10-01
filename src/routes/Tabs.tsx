import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListPtoduct from '../pages/ListPtoduct';
import Avliation from '../pages/Avliation';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Produtos" component={ListPtoduct} />
      <Tab.Screen name="Avaliacao" component={Avliation} />
    </Tab.Navigator>
  );
}
