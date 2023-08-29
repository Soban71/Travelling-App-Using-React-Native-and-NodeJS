import React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './components/Signin';
import Login from './components/Login';
import HomeScreen from './components/HomeScreen/Home';
import MainScreen from './components/HomeScreen/MainScreen';
import DetailScreen from './components/HomeScreen/Detailscreen';
import BookingComponent from './components/HomeScreen/Booking';
import Toast from 'react-native-toast-message'; // Import the ToastProvider


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#04555c',
        },
        headerTintColor: 'white',
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "OnBoard Screen",
        }}
      />
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
      />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{
          title: "Details",
        }}
      />
     <Stack.Screen
  name="BookingComponent"
  component={BookingComponent}
  options={{
    title: "Booking",
  }}
/>

    </Stack.Navigator>
    <Toast ref={(ref) => Toast.setRef(ref)} />
  </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({
  container: {
 
  },
});
