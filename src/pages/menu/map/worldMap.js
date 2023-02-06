import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Image, TouchableOpacity,StyleSheet,Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';




  
const WorldMap = () => {
  const navigation = useNavigation();
  const [coordinates, setCoordinates] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = () => {
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} 

      
        initialRegion={coordinates}
        showsUserLocation={true}
      >
        <Marker coordinate={coordinates} />
        </MapView>
      <TouchableOpacity style={styles.hamburger} onPress={openDrawer}>
        <Icon name="ios-menu" size={32} />
      </TouchableOpacity>
      {drawerOpen && (
        <View style={styles.drawer}>
          <TouchableOpacity  style={styles.drawerItem} onPress={() => navigation.navigate("Home")}>
            <Text>Home Page</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.drawerItem} onPress={() => navigation.navigate("friend")}>
            <Text>My Friends</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.drawerItem} onPress={closeDrawer}>
            <Text>Contact Us</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.drawerItem} onPress={closeDrawer}>
            <Text>Exit</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  hamburger: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
  },
  drawer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    flex:0.5,
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'center',
  },
  drawerItem: {
    marginVertical: 10,
  },
});

export default WorldMap;
