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
import { createStackNavigator } from 'react-navigation-stack';
import styles from './homeScreen.styles';
import SplashScreen from 'react-native-splash-screen';
import { withNavigation } from 'react-navigation';

const MyComponent = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    // do some refreshing logic here
    setTimeout(() => setRefreshing(false), 2000);
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
          key={2}
          style={[styles.box, styles.shadow]}
          onPress={() => this.props.navigation.navigate('splash')}
      >
          <Text>Go to SplashPage</Text>
          <Text style={styles.header}>Box 2</Text>
          <Text style={styles.body}>
          This is the body text of box 2.
          </Text>
      </TouchableOpacity>
        ))}
<Button
  title="Go Back"
  onPress={() => this.props.navigation.pop()}
/>

      </View>
    </ScrollView>
  );
};


export default MyComponent;
