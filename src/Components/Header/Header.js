import React from "react";
import { View, StyleSheet, TouchableOpacity,Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const MyHeader = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Image
    style={styles.logo}
    source={require('./logo.png')}
    />
      <TouchableOpacity onPress={handleBackPress}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
  <Ionicons name="ios-arrow-back" size={24} color="black" style={{ right: 80,top:5 }} />
  
</View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F6D2BA",
    width: "100%",
    height: 90,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 10,
    elevation:5
  },
  logo:{
    width: 100,
    height: 100,
    left:(135)
  }
});

export default MyHeader;
