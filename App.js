import React from 'react';
import { StyleSheet, View } from 'react-native';
import { initializeApp } from '@firebase/app';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen  from './components/WelcomeScreen';
import LoginScreen from './components/LoginScreen';
import SignUpScreen from './components/SignUpScreen';
import SuccessScreen from './components/SuccessScreen';
import HomePageScreen from './components/HomePageScreen';
import ForgotPasswordScreen from './components/ForgotPassword';
import { GestureHandlerRootView} from 'react-native-gesture-handler'



const firebaseConfig = {
  apiKey: "AIzaSyBYebnW6Mj5TewvIKkiwDw2F2PHoV2H-GA",
  authDomain: "smartagriculture-1851c.firebaseapp.com",
  projectId: "smartagriculture-1851c",
  storageBucket: "smartagriculture-1851c.appspot.com",
  messagingSenderId: "445166044842",
  appId: "1:445166044842:web:b191b49fbd9de9a6db32d3",
  measurementId: "G-8X7CZGQR2B"
};

const app = initializeApp(firebaseConfig);

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name= "SignUp" component={SignUpScreen} options={{headerShown: false}} />
        <Stack.Screen name= "Success" component={SuccessScreen} options={{headerShown: false}} />
        <Stack.Screen name= "Home" component={HomePageScreen} options={{headerShown: false}} />
        <Stack.Screen name= "ForgotPassword" component={ForgotPasswordScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
});

export default App;
