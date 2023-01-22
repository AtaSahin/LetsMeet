import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Home screen!</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="InputExample" component={InputExample} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default HomeScreen;
