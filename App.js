// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './ui/HomeScreen';
import LoginScreen from './ui/LoginScreen';
import DetailsScreen from './ui/DetailScreen';

const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Login user' }}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />

        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: 'Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
