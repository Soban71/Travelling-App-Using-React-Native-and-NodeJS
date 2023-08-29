import { Icon } from '@rneui/base';
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, ImageBackground, ScrollView , TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DetailScreen = ({route,navigation}) => {
    const place=route.params;

    const Navigation = useNavigation();
    const BookingPage=()=> {
      Navigation.navigate('BookingComponent',place);
    }
  return (
    <SafeAreaView style={{ flex: 1, backGroundColor: "white" }}>
      <StatusBar translucent={true} style={{ backgroundColor: "white" }} />

      <ImageBackground style={{ flex: 0.7 }} source={place.image}>
        <View style={styles.header}>
          <Icon name="" size={28} color="white" />
          <Icon name="more-vert" size={28} color="white" />
        </View>
        <View style={styles.imageDetail}>
          <Text
            style={{
              width: "70%",
              fontSize: 30,
              fontWeight: "bold",
              color: "white",
              marginBottom: 20,
            }}
          >
            {place.name}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Icon name="star" size={30} color="orange" />
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
              5.0
            </Text>
          </View>
        </View>
      </ImageBackground>

      <View style={styles.detailContainers}>
        <View style={styles.iconContainer}>
          <Icon name="favorite" size={30} color="red" />
        </View>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Icon name="place" size={28} color="#04555c" />
          <Text
            style={{
              marginLeft: 5,
              fontSize: 20,
              fontWeight: "bold",
              color: "#04555c",
            }}
          >
            {place.location}
          </Text>
        </View>

        <ScrollView  showsHorizontalScrollIndicator={false}>
        <Text style={{ marginTop: 20, fontWeight: "bold", fontSize: 20 }}>
          About the trip
        </Text>

        <Text
          style={{
            marginTop: 10,
            lineHeight: 22,
            marginBottom:20,
          }}
        >
          {place.details}
        </Text>
        </ScrollView>
      </View>

      <View style={styles.footer}>

         <View style={{flex:1,flexDirection:"row",alignItems:"center"}}>

         <Text 
         
         style={{
          fontSize:18,
          fontWeight:"bold",
          color:"white"
         }}>
          $100
         </Text>

         <Text 
         
         style={{
          fontSize:12,
          fontWeight:"bold",
          color:"gray",
          marginLeft:2

         }}>
          /PER DAY
         </Text>
         </View>

         <TouchableOpacity style={styles.bookNowBtn}  onPress={BookingPage}>

         <Text style={{
          color:"#04555c",
          fontSize:16,
          fontWeight:"bold"
         }} >
          Book Now
         </Text>
         </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bookNowBtn:{

    height:50,
    width:150,
    backgroundColor:"white",
    borderRadius:10,
    justifyContent:'center',
    alignItems:"center"
  },
  iconContainer:{
    height:60,
    width:60,
    position:'absolute',
    top:-30,
    backgroundColor:'white',
    borderRadius:30,
    right:20,
    elevation:10,
    justifyContent:'center',
    alignItems:"center"
  },
  detailContainers:{
    top:-30,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    paddingVertical:40,
    paddingHorizontal:20,
    backgroundColor:"white",
    flex:0.3

  },
    header:{
        marginTop:60,
        flexDirection:'row',
        justifyContent:"space-between",
        paddingHorizontal:20,
    },
    imageDetail:{
        padding:20,
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        position:'absolute',
        bottom:30,
    },
    footer: {
      flexDirection: 'row',
      backgroundColor: "#04555c",
      height: 70,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 20,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      flex: 0,
    },
    
});

export default DetailScreen;
