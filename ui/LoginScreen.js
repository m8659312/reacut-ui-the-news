

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, SafeAreaView } from 'react-native';


import { Stack, Button ,TextInput} from "@react-native-material/core";
import { Colors } from 'react-native/Libraries/NewAppScreen';

import {Dimensions} from 'react-native';
import { Divider } from "@react-native-material/core";

import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';


export default function LoginScreen() {


  const [username, setUsername] = useState("username");
  const [password, setPassword] = useState("password");

  const handleUsernameChange = (e) => {
    setUsername(e)
  }

  const handlePasswordChange = (e) => {
    setPassword(e);
  }

  const handleLoginButton = () => {
    console.log("jjjj: " + username)
    console.log("password: " + password)
  }

  return (

    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>
          Welcome to the app
        </Text>
        <Divider style={{ marginBottom: 25 }} leadingInset={16} color="black" />
        <TextInput 
            value={username} 
            style={styles.textField}
            placeholder="Enter email"
            variant="outlined"
            onChangeText={handleUsernameChange}
         />
        <View style={{ marginBottom: 25 }}/>
        <TextInput
          value={password}
          style={styles.textField}
           placeholder="Enter Password" 
           variant="outlined"
           onChangeText={handlePasswordChange}
         />
        <Button onPress={handleLoginButton} title="Login" style={styles.loginButton}/>
      </View>
    </SafeAreaView>
  );
}

const windowWidth = Dimensions.get('window').width;


const styles = StyleSheet.create({

  title: {
    marginBottom: 25
  },

  loginButton: {
    marginTop: 25
  },

  textField: {

  },
  
  container: {
    backgroundColor: '#fff',
    padding: 25
  },


  containerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width : 300 

  },

  input: {
    height: 40,
    margin: 12,
    width : windowWidth,
    padding: 10,

  }
});



