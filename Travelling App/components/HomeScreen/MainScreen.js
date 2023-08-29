import React from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView, TextInput, ImageBackground, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import places from '../const/places';
const { width } = Dimensions.get('screen');

const MainScreen = () => {
  const Navigation = useNavigation();

  const CategoriesItem = () => [
    <Icon name="flight" size={25} color="#04555c" />,
    <Icon name="beach-access" size={25} color="#04555c" />,
    <Icon name="near-me" size={25} color="#04555c" />,
    <Icon name="place" size={25} color="#04555c" />,
  ];

  const RecommendedCard = ({ place }) => {
    return (
      <ImageBackground style={styles.rmCardImage} source={place.image}>
        <Text
          style={{
            color: "white",
            fontSize: 22,
            fontWeight: "bold",
            marginTop: 10,
          }}
        >
          {place.name}
        </Text>

        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <View style={{ width: "100%", flexDirection: "row", marginTop: 10 }}>
            <View style={{ flexDirection: "row" }}>
              <Icon name="place" size={22} color="white" />
              <Text style={{ color: "white", marginLeft: 5 }}>
                {place.location}
              </Text>
            </View>
          </View>
        
        </View>
      </ImageBackground>
    );
  };
  
  //places detail list redenering
  const Card = ({ place }) => {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={()=> Navigation.navigate("DetailScreen",place)}>
        <ImageBackground
          style={styles.cardImage}
          source={place.image}
        >
          <Text 
            style={{
              fontSize: 20,
              color: 'white',
              fontWeight: 'bold',
              marginTop: 10
            }}> 
            {place.name}
          </Text>
  
          <View style={{
            flex: 1,
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'flex-end'
          }}>
            <View style={{ flexDirection: 'row' }}> 
              <Icon name='place' size={20} color="white"/>
              <Text style={{ color: 'white', marginLeft: 5 }}>
                {place.location}
              </Text>
            </View>
  
            <View style={{ flexDirection: 'row' }}> 
              <Icon name='star' size={20} color="white"/>
              <Text style={{ color: 'white', marginLeft: 5 }}>
                5.0
              </Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };
  

 

  const ListCategories = () => {
    const icons = CategoriesItem();
        return (
            <View style={styles.categoriesControl}>
              {icons.map((icon, index) => (
                <View key={index} 
                style={styles.containers}>
                {icon}
                
                </View>
              ))}
            </View>
          );
          
      };
      



  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar translucent={false} backgroundColor="#04555c" />
      <View style={styles.header}>
        <Icon name='sort' size={28} color="white" />
        <Icon name='notifications-none' size={28} color="white" />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ backgroundColor: "#04555c", height: 120, paddingHorizontal: 20 }}>
          <View>
            <Text style={styles.headerTitle}>Explore the</Text>
            <Text style={styles.headerTitle}>beautiful places</Text>
            <View style={styles.inputContainer}>
              <Icon name='search' size={28} color="gray" />
              <TextInput placeholder='Search the place' style={styles.input} placeholderTextColor="gray" />
            </View>
          </View>
        </View>
      <ListCategories />
      <Text style={styles.sectionTitle}>Places</Text>
      

      <View>
          <FlatList
          contentContainerStyle={{paddingLeft:20}}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={places}
            renderItem={({ item }) => <Card place={item} />} 
          />

          <Text style={styles.sectionTitle}>
            Recommended
          </Text>
          <FlatList
        snapToInterval={width - 20}
          contentContainerStyle={{paddingLeft:20 ,paddingBottom:20}}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={places}
            renderItem={({ item }) => <RecommendedCard place={item} />} 
          />

        </View>
      </ScrollView>
     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#04555c',
  },
  headerTitle: {
    color: 'white',
    fontSize: 23,
    fontWeight: 'bold',
  },
  inputContainer: {
    height: 60,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 10,
    position: 'absolute',
    top: 90,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    elevation: 12, 
  },
  input: {
    color: "gray",
    marginLeft: 10,
    flex: 1, // Expand to take remaining space
  },
  categoriesControl:{
    marginTop:60,
    marginHorizontal:20,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  containers:{
    height:60,
    width:60,
    backgroundColor:"#e1e8e9",
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10
  },
  sectionTitle:{
    marginHorizontal:20,
    marginVertical:20,
    fontWeight:'bold',
    fontSize:18
  },
  cardImage:{
    height:220,
    width:width /2,
    marginRight:20,
    padding:10,
    overflow:'hidden',
    borderRadius:10

  },
  rmCardImage:{
    width:width-40,
    height:200,
    marginRight:20,
    borderRadius:20,
    overflow: 'hidden',
    padding:10,
  }
});

export default MainScreen;
