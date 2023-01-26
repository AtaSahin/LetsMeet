import React, { useState } from 'react';
import {
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  RefreshControl,
  StyleSheet,
  Button
} from 'react-native';
import searchFriend from '../searchFriend/searchFriend';
import { useNavigation } from '@react-navigation/native';
import { withNavigation } from 'react-navigation';
import styles from './homeScreen.styles';
import SplashScreen from 'react-native-splash-screen';


const MyComponent = () => {
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('searchFriend');
  };



  const onRefresh = () => {
    setRefreshing(true);
    // do some refreshing logic here
    setTimeout(() => setRefreshing(false), 200);
  };

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={styles.boxContainer}>
        {[1, 2, 3, 4, 5, 6].map(i => (
          <TouchableOpacity
          key={i}
          style={[styles.box, styles.shadow]}
          onPress={index == 0 ? handlePress : () => this.props.navigation.navigate('splash')}
        >
        <Text>{index == 0 ? "Go to searchFriendPage" : "Go to SplashPage"}</Text>
        <Text style={styles.header}>Box {i}</Text>
            <Text style={styles.body}>
              {index == 0 ? "Friend List" : "Check for friends "+ i }
            </Text>
      </TouchableOpacity>
        ))}


      </View>
    </ScrollView>
  );
};


export default MyComponent;
