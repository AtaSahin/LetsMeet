import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Box = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.box}>
    <Text>{title}</Text>
  </TouchableOpacity>
);

const homeScreen = ({ onBoxPress }) => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <Box onPress={() => onBoxPress(1)} title="What is this bro" />
      <Box onPress={() => onBoxPress(2)} title="Contact Us" />
      <Box onPress={() => navigation.navigate("friend")} title="My friends" />
      <Box onPress={() => navigation.navigate("map")} title="Where is my friends at?" />
      <Box onPress={() => navigation.navigate("map")} title="Where is my friends at?" />
      <Box onPress={() => navigation.navigate("map")} title="Where is my friends at?" />
      <Box onPress={() => navigation.navigate("map")} title="Where is my friends at?" />
    </ScrollView>
  );
};

const styles = {
  box: {
  
 
    height: 100,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    backgroundColor: "orange",
    alignSelf: 'center',
    borderRadius:20,
  },
};

export default homeScreen;
