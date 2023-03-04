import React from 'react';
import { View,Text } from 'react-native';

const NicknameList = ({ nicknameList }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 20 }}>
          Nickname List:
        </Text>
        {nicknameList.map((nickname, index) => (
          <Text key={index} style={{ fontSize: 16 }}>
            {nickname}
          </Text>
        ))}
      </View>
    );
  };
  
  export default NicknameList;
  