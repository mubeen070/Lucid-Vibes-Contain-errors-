
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './Screens/BottomTabNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import Login from './Screens/Login';
import HomeStack from './StackNavigator';
const Stack = createStackNavigator();
export default function App() {
  return (
    <>
      <NavigationContainer>
        <HomeStack />

      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "white"
  },
});
