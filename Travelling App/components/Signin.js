import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Text, Image } from 'react-native';
import { Button } from '@rneui/themed';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const Navigation=useNavigation();

  const handleSubmit = () => {
    const userData = {
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword
    };

    if (!name || !email || !password || !confirmPassword) {
      Toast.show({
        type: 'error',
        text1: 'Fields Required',
        text2: 'Please fill out all the required fields',
        position: 'top',
        visibilityTime: 3000,
        autoHide: true
      });
      return;
    }
  

    axios.post('http://192.168.207.203:5000/Signup', userData)
      .then(response => {
        console.log('Data sent successfully:', response.data);
        Toast.show({
          type: 'success',
          text1: 'User Added Successfully',
          position: 'top',
          visibilityTime: 3000,
          autoHide: true,
          onHide: () => {
            clearFields();
          }
        });
      })
      .catch(error => {
        console.error('Error sending data:', error);
        Toast.show({
          type: 'error',
          text1: 'User Not Added',
          text2: 'Email or password is already used',
          position: 'top',
          visibilityTime: 3000,
          autoHide: true
        });
      });
  };

  const clearFields = () => {
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const LoginFoam=()=>{
    Navigation.navigate("Login")
  }

  return (
    <View style={styles.container}>
    <Toast ref={(ref) => Toast.setRef(ref)} /> 
      <Image
        rounded
        source={require('../Images/sign5.png')}
        style={styles.avatarContainer}
      />
      <TextInput
        style={styles.inputTag}
        placeholder="Enter Your name"
        value={name}
        onChangeText={setName}
        
      />
      <TextInput
        style={styles.inputTag}
        placeholder="Enter Your Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.inputTag}
        placeholder="Enter Your Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.inputTag}
        placeholder="Enter Your confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

    

      <Button
        title="Submit"
        buttonStyle={styles.buttonStyle}
        containerStyle={styles.buttonContainer}
        titleStyle={styles.buttonTitle}
        onPress={handleSubmit}
      />
      <Text style={styles.accountText}>
        Already Have an Account? <Text style={styles.signupText} onPress={LoginFoam}>Login </Text>
      </Text>
      
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#252B48',
  },
  inputTag: {
    width: '85%',
    height: 45,
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 15,
    backgroundColor: '#4A5789',
    fontSize: 16,
    color: 'white', 
  },
  forgottenPassword: {
    color: 'white',
    marginVertical: 10,
    fontSize: 12
  },
  buttonStyle: {
    backgroundColor: 'rgba(127, 220, 103, 1)',
  },
  buttonContainer: {
    height: 40,
    width: 200,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 35,
  },
  buttonTitle: {
    color: 'white',
    marginHorizontal: 10,
    fontSize: 16,
  },
  accountText: {
    color: 'white',
    fontSize: 13,
    marginTop: 10,
  },
  signupText: {
    color: '#7FDC67', // Signup text color
    fontWeight: 'bold',
  },

  avatarContainer:{
    width: 200, // Adjust the width as needed
    height: 200, // Adjust the height as needed
    marginBottom: 10,
  borderRadius: 75,
  }
});
