import { Ionicons, Fontisto, FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import DictionaryScreen from '../screens/Dictionary';
import LessonScreen from '../screens/LessonScreen';
import LessonListScreen from '../screens/LessonListScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, DictionaryParamList, LessonsParamList, PracticeParamList } from '../types';
import PracticeMenu from '../screens/PracticeMenu';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Dictionary"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Dictionary"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Lessons"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="brain" size={24} color={color} />,
        }}
      />
      <BottomTab.Screen 
        name="Practice"
        component={TabThreeNavigator}
        options={{
          tabBarIcon: ({ color }) => <Fontisto name="lightbulb" size={30} color={color}/>,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<DictionaryParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="Dictionary"
        component={DictionaryScreen}
        options={{ headerShown: true }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<LessonsParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="LessonList"
        component={LessonListScreen}
        options={{ headerTitle: 'Lessons' }}
      />
      <TabTwoStack.Screen
        name="Lesson"
        component={LessonScreen}
        options={({route}) => ({ headerTitle: `Lesson  ${route.params.LessonId+1}` })}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator<PracticeParamList>();

function TabThreeNavigator(){
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen 
        name='PracticeMenu'
        component={PracticeMenu}
        options={{ headerTitle: 'Practice' }}
      />
    </TabThreeStack.Navigator>
  )
}
