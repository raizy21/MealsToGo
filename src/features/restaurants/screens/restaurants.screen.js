import React from 'react';
import { Searchbar } from 'react-native-paper'; 
import { StyleSheet, SafeAreaView, View, StatusBar, } from 'react-native';
import { RestaurantInfoCard } from '../components/restaurants-info-card.components';


export const RestaurantsScreem = () => (

  <SafeAreaView style={styles.container}>
  <View style={styles.search}>
    <Searchbar />
  </View>

  <View style={styles.list}>
    <RestaurantInfoCard />
  </View>

</SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },

  search :{
    padding: 16,
    backgroundColor: "yellow",
  },

  list: {
    flex: 1,
    padding:  16,
    backgroundColor: "black",
  },

  text: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
  },

});
