import React from "react";
import { StatusBar as ExpoStatusBar} from 'expo-status-bar';
import { ThemeProvider } from "styled-components/native";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


import { useFonts as useOswald, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { Navigation } from './src/infrastructure/navigation';

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

const firebaseConfig = {
  apiKey: "AIzaSyD6_rrZLpgzWPkPZ5JxdcvKUHeXj0p0wFs",
  authDomain: "mealstogo-df0f9.firebaseapp.com",
  projectId: "mealstogo-df0f9",
  storageBucket: "mealstogo-df0f9.appspot.com",
  messagingSenderId: "861248965127",
  appId: "1:861248965127:web:d15ecabf11715a9a49b8a2"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
    <ExpoStatusBar />
   </>
  );
}

