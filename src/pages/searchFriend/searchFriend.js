import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import MyHeader from '../../Components/Header/Header';

const MyFriends = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Perform search logic here
    console.log(`Searching for ${searchTerm}`);
  };

  return (
    <View>

      <TextInput
        placeholder="Search for a friend"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
         <MyHeader></MyHeader>
      <TouchableOpacity onPress={handleSearch}>
        <Text>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyFriends;
