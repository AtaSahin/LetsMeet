import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, ScrollView, LayoutAnimation, Platform,UIManager,Animated } from 'react-native';
import { Image } from 'react-native';
import styles from './splashScreen.styles';
import { useNavigation } from '@react-navigation/native';
import { LogBox } from 'react-native';
import { AsyncStorage } from 'react-native';


LogBox.ignoreAllLogs();


const InputExample = () => {
  const handleContinueButtonPress = () => {
    navigation.navigate('friend', { nicknameList });
  };
  const saveNicknameList = async (nicknameList) => {
    try {
      await AsyncStorage.setItem('nicknameList', JSON.stringify(nicknameList));
    } catch (error) {
      console.log(error);
    }
  };

const navigation=useNavigation()
  
  const [text, setText] = useState('');
  const [nicknameList, setNicknameList] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isListVisible, setIsListVisible] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [successNickname, setSuccessNickname] = useState('');
  const [animation, setAnimation] = useState(new Animated.Value(0));


  useEffect(() => {
    if (isSuccess) {
      Animated.timing(animation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }
  }, [isSuccess]);

  const handleSubmit = () => {
    if (!text.match(/^[a-zA-Z]+$/)) {
      setErrorMessage("Invalid nickname. Only letters are allowed.");
    } else if (nicknameList.includes(text)) {
      setErrorMessage("This nickname already exists.");
    } else {
      LayoutAnimation.configureNext({
        duration: 1000,
        update: {
          type: LayoutAnimation.Types.spring,
          springDamping: 0.7,
        },
      });
      setNicknameList([...nicknameList, text]);
      setSuccessNickname(text);
      setIsSuccess(true);
      setText('');
      setErrorMessage('');
      saveNicknameList(nicknameList);
    }
  }
  const retrieveNicknameList = async () => {
    try {
      const nicknameList = await AsyncStorage.getItem('nicknameList');
      if (nicknameList !== null) {
        setNicknameList(JSON.parse(nicknameList));
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    retrieveNicknameList();
  }, []);

  const handleListPress = () => {
    setIsListVisible(!isListVisible);
    navigation.navigate('NicknameList');
  }

  const handleDeletePress =(index) => {
    LayoutAnimation.configureNext({
    duration: 1000,
    update: {
    type: LayoutAnimation.Types.spring,
    springDamping: 0.7,
    },
    });
    const newList = [...nicknameList];
    newList.splice(index, 1);
    setNicknameList(newList);
    }
    
    const handleEditPress = (index) => {
    setText(nicknameList[index]);
    handleDeletePress(index);
    }
    
    const handleContinuePress = () => {
    setIsSuccess(false);
    }
    
    return (
      
    <View style={styles.container}>
      <Animated.View style={[styles.success, {opacity: animation}]}>
      <Text style={styles.successText}>Congratulations! You have successfully registered!</Text>
   </Animated.View>
    <View style={styles.formContainer}>
    <Image
    style={styles.logo}
    source={require('./logo.png')}
    />
    <TextInput
    style={styles.input}
    placeholder="Nickname gir"
    value={text}
    onChangeText={text => setText(text)}
    />
    <View style={styles.buttonContainer}>
    <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
    <Text style={styles.buttonText}>Submit</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.submitButton} onPress={handleListPress}>
    <Text style={styles.buttonText}>Show nicknames</Text>
    </TouchableOpacity>
    </View>
    {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
    {isSuccess && (

    <View>
      
    <Text style={styles.success}>Congratulations, you've successfully registered as {successNickname}!</Text>
    <TouchableOpacity style={styles.continueButton} onPress={()=> navigation.navigate("Home",{ nicknameList })}>
    <Text style={styles.continueButtonText}>Continue as {successNickname}</Text>
    </TouchableOpacity>
    </View>
    )}
    </View>

    {isListVisible && (
    <View style={styles.listContainer}>
    <ScrollView>
    {nicknameList.map((nickname, index) => (
    <View style={styles.listItemContainer} key={index}>
    <Text style={styles.listItem}>{nickname}</Text>
    <View style={styles.listItemButtonsContainer}>
    <TouchableOpacity style={styles.listItemButton} onPress={() => handleEditPress(index)}>
    <Text style={styles.listItemButtonText}>Edit</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.listItemButton} onPress={() => handleDeletePress(index)}>
    <Text style={styles.listItemButtonText}>Delete</Text>
    </TouchableOpacity>
    </View>
    </View>
    ))}
    </ScrollView>
    </View>
    )}
    </View>
    );
    }
    
   
export default InputExample;