import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';

export default function App() {
  return (
    <>
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Text style={styles.text}>search</Text>
      </View>

      <View style={styles.list}>
        <Text style={styles.text}>list</Text>
      </View>

    </SafeAreaView>
    <StatusBar style="auto"/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

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
