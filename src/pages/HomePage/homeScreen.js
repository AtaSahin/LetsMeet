import React from 'react';
import { View, Text, TouchableOpacity,StyleSheet,FlatList, Button } from 'react-native';
import styles from './homeScreen.styles';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Box = ({ title, body, onPress }) => (
   
    <TouchableOpacity style={styles.boxContainer} onPress={onPress}>
      <Text style={styles.header}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
    
    </TouchableOpacity>
  );

  
  function HomeScreen() {
   
    const box1Title = "My friends";
    const box1Body = "Extict friends / Add a friend ";
    const box1Press = () => {
        navigation.navigate('friend');
    };
    const handleBox1Press = () => console.log("Arkadaşlarım bölümüne gidildi");
    const box2Title = "Meeting map";
    const box2Body = "Current meetings/ Pending meeting locations";
    const handleBox2Press = () => {
        navigation.navigate();
    };
    const box3Title = "Leader Boards";
    const box3Body = "Winners of this month according to by punctuality";
    const handleBox3Press = () => console.log("Box 3 pressed");
    const box4Title = "Previous Meeting";
    const box4Body = "See previous meetings";
    const handleBox4Press = () => console.log("Box 4 pressed");
    const box5Title = "Any Complaints about App?";
    const box5Body = "Don't be shy..Just tell me :)";
    const handleBox5Press = () => console.log("Box 5 pressed");
    const boxes = [
        {
            title: box1Title,
            body: box1Body,
            onPress:box1Press
        },
        {
            title: box2Title,
            body: box2Body,
            onPress: handleBox2Press
        },
        {
            title: box3Title,
            body: box3Body,
            onPress: handleBox3Press
        },
        {
            title: box4Title,
            body: box4Body,
            onPress: handleBox4Press
        },
        {
            title: box5Title,
            body: box5Body,
            onPress: handleBox5Press
        },
    ];
    const navigation=useNavigation()
    return (
    <View style={styles.container}>
        
        <FlatList
  
        data={boxes}
        
        renderItem={({ item }) => <Box title={item.title} body={item.body} onPress={()=>navigation.navigate("friend")}  style={{width: '100%'}} />}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{flexDirection: 'column'}}
        showsVerticalScrollIndicator={false}
    />
    
    </View>
    );
}

export default HomeScreen;