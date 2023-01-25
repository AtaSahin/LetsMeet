import React, { useState } from 'react';
import { View, TextInput, FlatList } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const searchFriend = () => {
  const [nicknameList, setNicknameList] = useState([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Bob Johnson' },
    // ... more nicknames
  ]);
  const [searchText, setSearchText] = useState('');
  const [filteredNicknameList, setFilteredNicknameList] = useState(nicknameList);

  const handleSearch = text => {
    setSearchText(text);
    if (text === '') {
      setFilteredNicknameList(nicknameList);
    } else {
      setFilteredNicknameList(
        nicknameList.filter(
          item => item.name.toLowerCase().indexOf(text.toLowerCase()) > -1
        )
      );
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Search for a nickname"
        onChangeText={handleSearch}
        value={searchText}
      />
      <FlatList
        data={filteredNicknameList}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default searchFriend;
