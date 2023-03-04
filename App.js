import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import homeScreen from './src/pages/HomePage/homeScreen';
import InputExample from './src/pages/SplashPage/splashScreen';
import FriendList from './src/pages/menu/myFriendsPage/friendList';
import WorldMap from './src/pages/menu/map/worldMap';
import searchFriend from './src/pages/searchFriend/searchFriend';
import DatePick from './src/pages/DatePick/DatePick';
import SelectedDateTime from './src/pages/Plans/SelectedDateTime';
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
<NavigationContainer>
      <Stack.Navigator initialRouteName='splash'
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="SelectedDateTime" component={SelectedDateTime} />
        <Stack.Screen name="datePick" component={DatePick} />
        <Stack.Screen name="searchFriend" component={searchFriend} />
        <Stack.Screen name="map" component={WorldMap} />
        <Stack.Screen name="friend" component={FriendList} />
        <Stack.Screen name="Home" component={homeScreen} />
        <Stack.Screen name="splash" component={InputExample} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
