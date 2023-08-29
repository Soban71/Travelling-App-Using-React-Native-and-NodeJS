import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import Toast from 'react-native-toast-message';
import axios from 'axios';

const BookingComponent = ({ route, navigation }) => {
  const place = route.params;
  const [days, setDays] = useState('');
  const calculatedPrice = 100 * days;
  const [contact, setContact] = useState('');
  const [contactType, setContactType] = useState('email');
  const [paymentType, setPaymentType] = useState(''); 

  

  const handleBooking = () => {
    if (!place.location || !days || !contact || !contactType || !paymentType) {
      Toast.show({
        type: 'error',
        text1: 'All fields are required',
        position: 'top',
      });
      return;
    }
    if (contactType === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(contact)) {
          Toast.show({
            type: 'error',
            text1: 'Please enter a valid email address',
            position: 'bottom',
          });
          return;
        }
      }
  
      
      if (contactType === 'phone') {
        const phoneRegex = /^[0-9]{11}$/; 
        if (!phoneRegex.test(contact)) {
          Toast.show({
            type: 'error',
            text1: 'Please enter a valid phone number',
            position: 'top',
          });
          return;
        }
      }

    if (paymentType === 'online') {
      Toast.show({
        type: 'info',
        text1: 'Online Payment Not Available',
        position: 'top',
      });
      return;
    }

    const bookingData = {
      place: place.location,
      days,
      contact,
      contactType,
      paymentType,
      price: calculatedPrice.toString(),
    };

    axios
      .post('http://192.168.207.203:5000/bookings', bookingData)
      .then((response) => {
        console.log('Booking response:', bookingData);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  
    
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.header}  placeholderTextColor="white">Book Your Spot</Text>

      <Image
        rounded
        source={require('../.././Images/booking.png')}
        style={styles.avatarContainer}
      />


      <TextInput
        style={styles.input}
        placeholder="Place"
        value={place.location}
        editable={false}
      />
      <TextInput
        style={styles.input}
        placeholder="Number of Days"
        value={days.toString()} 
        onChangeText={setDays}
        keyboardType="numeric"
        placeholderTextColor="rgba(255, 255, 255, 0.6)" 
      />
      <Toast ref={(ref) => Toast.setRef(ref)} /> 
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={`${calculatedPrice.toString()}$`} 
        editable={false} 
      />
      <View style={styles.radioContainer}>
        <TouchableOpacity
          style={[styles.radioOption, contactType === 'email' && styles.selectedRadio]}
          onPress={() => setContactType('email')}
        >
          <Text>Email</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.radioOption, contactType === 'phone' && styles.selectedRadio]}
          onPress={() => setContactType('phone')}
        >
          <Text style={{ textAlign: 'center',}}>Phone </Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.input}
        placeholder={`Contact ${contactType === 'email' ? 'Email' : 'Number'}`}
        value={contact}
        onChangeText={setContact}
        keyboardType={contactType === 'email' ? 'email-address' : 'phone-pad'}
        placeholderTextColor="rgba(255, 255, 255, 0.6)" 
      />
      <View style={styles.radioContainer}>
        <TouchableOpacity
          style={[styles.radioOption, paymentType === 'online' && styles.selectedRadio]}
          onPress={() => setPaymentType('online')}
        >
          <Text>Online Payment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.radioOption, paymentType === 'offline' && styles.selectedRadio]}
          onPress={() => setPaymentType('offline')}
        >
          <Text>Offline Payment</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleBooking}>
        <Text style={styles.buttonText}>Book Now</Text>
      </TouchableOpacity>
    
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#04555c',

  },
  header: {
    marginTop: 30,
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10, // Reduced margin for spacing
    letterSpacing: 1,
    color: 'white', // Match the color to your design
    textAlign: 'center', 
  },
  
  input: {
    width: '85%',
    height: 45,
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 15,
    backgroundColor: '#04555c',
    fontSize: 16,
    color: 'white',
    borderColor:'white',
    borderWidth:1,
    
  },
  
  
  radioContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  radioOption: {
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
   
  },
  radioText: {
    color: 'white',
    
  },
  selectedRadio: {
    backgroundColor: '#F5F5DC',
    borderColor: 'black',
  },
  
  button: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    marginBottom:20
  },
  buttonText: {
    color: '#2B2730',
    fontSize: 12,
    fontWeight: 'bold',
  },
  avatarContainer:{
    width: 150,
    height: 150, 
    marginBottom: 50,
    borderRadius: 105,
  }
});

export default BookingComponent;
