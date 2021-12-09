import { StatusBar as ExpoStatusBar} from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, Text, View,StatusBar, Platform } from 'react-native';

const isAndroid =  Platform.OS === 'android';
const isIos =  Platform.OS === 'ios';

console.log(StatusBar.currentHeight);

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
    <ExpoStatusBar />

    </>
  );
}

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
