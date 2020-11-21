import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Icon from '@expo/vector-icons/Ionicons';

import HomeScreen from '../screens/home';
import SectionScreen from '../screens/section';
import CourseScreen from '../screens/course';
import ProjectScreen from '../screens/project';

const colorIcon = {
  active: '#4775f2',
  inactive: '#b8bece'
};

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator mode='modal'>
      <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Section' component={SectionScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function TabBarIcon({ name, focused }) {
  return <Icon name={name} size={26} color={focused ? colorIcon.active : colorIcon.inactive} />;
}

export default function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Home'
        component={HomeStack}
        options={({ route }) => ({
          tabBarVisible: getFocusedRouteNameFromRoute(route) !== 'Section',
          tabBarIcon: props => <TabBarIcon name='ios-home' {...props} />
        })}
      />
      <Tab.Screen
        name='Courses'
        component={CourseScreen}
        options={{
          tabBarIcon: props => <TabBarIcon name='ios-albums' {...props} />
        }}
      />
      <Tab.Screen
        name='Projects'
        component={ProjectScreen}
        options={{
          tabBarIcon: props => <TabBarIcon name='ios-folder' {...props} />
        }}
      />
    </Tab.Navigator>
  );
}
