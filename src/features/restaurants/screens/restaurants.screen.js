import React from 'react';
import { Searchbar } from 'react-native-paper'; 
import { StyleSheet, SafeAreaView, View, StatusBar, } from 'react-native';
import { RestaurantInfo } from '../components/restaurants-info.components';


export const RestaurantsScreem = () => (

  <SafeAreaView style={styles.container}>
  <View style={styles.search}>
    <Searchbar />
  </View>

  <View style={styles.list}>
    <RestaurantInfo />
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
