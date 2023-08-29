import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@rneui/themed';
import axios from 'axios';

export default function Login() {
  const Navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const SignupFoam = () => {
    Navigation.navigate('Signup');
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://192.168.207.203:5000/Login', {
        email: email,
        password: password,
      });

      if (response.data.message === 'Login successful') {
        Navigation.reset({
          index:0,
          routes:[{name:'HomeScreen'}]
        })
       
      } else {
        alert('Login failed. Incorrect email or password.');
      }
    } catch (error) {
      console.error('Error logging in:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        rounded
        source={require('../Images/login1.png')}
        style={styles.avatarContainer}
      />
      <TextInput
        style={styles.inputTag}
        placeholder="Enter Your Email"
        value={email}
        onChangeText={setEmail}
      />
     

      <Button
        title="Login"
        buttonStyle={styles.buttonStyle}
        containerStyle={styles.buttonContainer}
        titleStyle={styles.buttonTitle}
        onPress={handleLogin}
      />

      <Text style={styles.accountText}>
      For Register Your Email {' '}
        <Text style={styles.signupText} onPress={SignupFoam}>
          clicking here </Text>
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
    width: 150,
    height: 150, 
    marginBottom: 50,
    borderRadius: 105,
}

});
