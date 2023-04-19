import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import FormRCC from './src/FormRCC';
import FormRFC from './src/FormRFC';
import SignInBasic from './src/SignIn';
import CardMenu from './src/GUI/CardMenu';
import CalendarFirstWeek from './src/GUI/MyCalendar';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={SignInBasic}></Stack.Screen>
        <Stack.Screen name="Page1" component={FormRFC}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
 
  );
}
