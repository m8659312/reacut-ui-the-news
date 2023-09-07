// HomeScreen.js
import { Button } from '@react-native-material/core';
import React from 'react';
import { View, Text } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />


<Button
        title="Go to Login Screen"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}

export default HomeScreen;
