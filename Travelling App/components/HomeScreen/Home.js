import React from 'react';
import { View, Text, StyleSheet, ImageBackground, StatusBar, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {

    const Navigation = useNavigation();
    const MainScreen=()=>{
        Navigation.navigate('MainScreen');
    }
  return (
    <View style={{ flex: 1 }}>
    <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
    <ImageBackground
      style={{ flex: 1 }} 
      source={require('../../Images/Boardimage.jpg')}
    >
      <View style={styles.details}>
        <Text style={styles.textStyling}>
            Discover
        </Text>
        <Text style={styles.textStyling}>
            world with us
        </Text>
        <Text style={styles.quotes}>
        Embark on unforgettable journeys with us, as we curate adventures that blend exploration and
         relaxation
        </Text>

        <TouchableOpacity activeOpacity={0}>
            <View style={styles.btn}>
            <Text style={{fontWeight:'bold' }} onPress={MainScreen}>Get Started</Text>
            </View>
        </TouchableOpacity>
      </View>
      
    </ImageBackground>
  </View>
  );
};

const styles = StyleSheet.create({
  
  details:{
    height:'50%',
    bottom:0,
    position:'absolute',
    paddingHorizontal:40,
  },
  textStyling:{
    color:'white',
    fontSize:35,
    fontWeight:'bold'
  },
  quotes:{
    color:'white',
    lineHeight:25,
    marginTop:15
  },
  btn:{
    height:50,
    width:120,
    backgroundColor:'white',
    marginTop:20,
    justifyContent:'center',
    alignItems:'center'
  }
});

export default HomeScreen;
