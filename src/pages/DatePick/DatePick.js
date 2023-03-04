import React, { useState } from 'react';
import { View, Alert, Button, StyleSheet, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useNavigation } from '@react-navigation/native';
import MyFriends from '../searchFriend/searchFriend';
import MyHeader from '../../Components/Header/Header';

const DatePick = () => {
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (time) => {
    hideDatePicker();
    setSelectedTime(time);
    console.log(`Seçilen tarih: ${selectedDate}, Seçilen saat: ${time}`);

    navigation.navigate('SelectedDateTime', {
      date: selectedDate,
      time: selectedTime.toString(),
    });
  };

  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
    const markedDate = {};
    markedDate[day.dateString] = { selected: true, selectedColor: 'blue' };
    setMarkedDates(markedDate);

    Alert.alert(
      'Yeni bir planlama yapmak istediğinizden emin misiniz?',
      '',
      [
        {
          text: 'Hayır',
          onPress: () => console.log('Hayır seçildi'),
          style: 'cancel',
        },
        {
          text: 'Evet',
          onPress: () => showDatePicker(),
        },
      ],
      { cancelable: false }
    );
  };

  const [markedDates, setMarkedDates] = useState({});

  return (
    <View>
        <MyHeader></MyHeader>
      <Calendar markedDates={markedDates} onDayPress={onDayPress} />
      {selectedDate ? (
        <View style={styles.container}>

          <Button title="Re-arrange the time" onPress={showDatePicker} />
</View>
) : null}
<DateTimePickerModal
  isVisible={isDatePickerVisible}
  mode="time"
  onConfirm={handleConfirm}
  onCancel={hideDatePicker}
  textColor="#000000" // Siyah renk ayarı
   />
 {selectedTime ? (
        <Text style={styles.date}>Date time: {selectedTime.toString()}</Text>
      ) : null}
    </View>
);
};

const styles = StyleSheet.create({
container: {
alignItems: 'center',
justifyContent: 'center',
marginVertical: 20,
},
date: {
fontSize: 20,
fontWeight: 'bold',
marginBottom: 10,
alignSelf:"center"
},
});

export default DatePick;
