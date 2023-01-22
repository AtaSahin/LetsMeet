import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity,StyleSheet, Button } from 'react-native';
import HomeScreen from '../../HomePage/homeScreen';

import { useNavigation } from '@react-navigation/native';

const FriendsList = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    console.log(`Searching for ${searchText}`);
  }
  const navigation=useNavigation()
  return (
    <View>
              <TouchableOpacity 
                style={styles.undoButton} 
                onPress={()=>  navigation.goBack()}
            >
                <Text style={styles.undoButtonText}>Undo</Text>
            </TouchableOpacity>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for friends"
          value={searchText}
          onChangeText={text => setSearchText(text)}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.usersContainer}>
        { /* here you can map through your data and render the users*/}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
  },
  searchButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 10,
    marginLeft: 10,
  },
  searchButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  usersContainer: {
    flex: 1,
    margin: 10,
    backgroundColor:'#F6D2BA',
  },
  undoButtonText: {
    fontSize: 16,
    color: 'blue',
    alignSelf:"center",
    top:200,
    borderWidth:4,
    width:100,
},
});

 export default FriendsList;
