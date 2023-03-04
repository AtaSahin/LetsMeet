import React, { useEffect } from "react";
import { ScrollView, Text, TouchableOpacity, View, Animated, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyHeader from "../../Components/Header/Header";

const Box = ({ onPress, title, index, animatedValue }) => {
  const boxStyle = {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [500, 0],
          extrapolate: "clamp",
        }),
      },
    ],
  };
  return (
    <Animated.View style={[styles.box, boxStyle]} key={index}>
      <TouchableOpacity onPress={onPress} style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>{title}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const HomeScreen = ({ onBoxPress }) => {
  const navigation = useNavigation();
  const animatedValue1 = new Animated.Value(0);
  const animatedValue2 = new Animated.Value(0);
  const animatedValue3 = new Animated.Value(0);
  const animatedValue4 = new Animated.Value(0);


  useEffect(() => {
    Animated.timing(animatedValue1, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [animatedValue1]);

  useEffect(() => {
    Animated.timing(animatedValue2, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, [animatedValue2]);
  useEffect(() => {
    Animated.timing(animatedValue3, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [animatedValue3]);
  useEffect(() => {
    Animated.timing(animatedValue4, {
      toValue: 1,
      duration: 2500,
      useNativeDriver: true,
    }).start();
  }, [animatedValue4]);

  return (
    <ScrollView>
      <MyHeader>

      </MyHeader>
    
      <Box  onPress={() => navigation.navigate("datePick")} title="Schedule a New Date" index={1} animatedValue={animatedValue1} />
      <Box  onPress={() => navigation.navigate("friend")} title="My Friends" index={2} animatedValue={animatedValue2} />
      <Box onPress={() => navigation.navigate("SelectedDateTime")} title="Plans" index={3} animatedValue={animatedValue3} />
      <Box onPress={() => navigation.navigate("map")} title="Where is my friends at?" index={4} animatedValue={animatedValue4} />
    
    </ScrollView>
  );
};

const styles = {
  box: {
    height: 100,
    width: "50%",
    marginVertical: 10,
    backgroundColor: "orange",
    alignSelf: "center",
    borderRadius: 20,
  },
};

export default HomeScreen;