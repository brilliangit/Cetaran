/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// Screens

import Story from './screens/story/Story'
import StoryList from './screens/story/StoryList'
import StoryDetail from './screens/story/StoryDetail'
import Qna from './screens/qna/Qna'

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Story}
            options={{ title: 'Beranda' }}
          />
          <Stack.Screen
            name="story-list"
            component={StoryList}
            options={{ title: 'Daftar Cerita' }} />
          <Stack.Screen
            name="story-detail"
            component={StoryDetail}
            options={{ title: 'Dongeng' }} />
          <Stack.Screen
            name="qna"
            component={Qna}
            options={{ title: 'Latihan Soal' }} />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Routes />
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
