import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity,StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import HomeScreen from '../../HomePage/homeScreen';
import styles from '../../SplashPage/splashScreen.styles';

const WorldMap = () => {
const [coordinates, setCoordinates] = useState({
latitude: 37.78825,
longitude: -122.4324,
latitudeDelta: 0.0922,
longitudeDelta: 0.0421,
});

const handleButtonPress = () => {
// get current location coordinates
navigator.geolocation.getCurrentPosition(position => {
setCoordinates({
latitude: position.coords.latitude,
longitude: position.coords.longitude,
latitudeDelta: 0.0922,
longitudeDelta: 0.0421,
});
});
};

return (
<View style={styles.container}>
<MapView
     style={styles.map}
     initialRegion={coordinates}
     showsUserLocation={true}
   >
<Marker
       coordinate={coordinates}
     />
</MapView>
<TouchableOpacity style={styles.locationButton} onPress={handleButtonPress}>
<View style={styles.locationDot} />
</TouchableOpacity>
</View>
);
};



export default WorldMap;