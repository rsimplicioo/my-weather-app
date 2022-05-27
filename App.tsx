import React from 'react';
// import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import {
  useFonts,
  Oswald_200ExtraLight,
  Oswald_300Light,
  Oswald_400Regular,
  Oswald_700Bold,
} from '@expo-google-fonts/oswald';

import { Routes } from './src/routes';
import { AppProvider } from './src/hooks';
import theme from './src/styles/theme';
import { Load } from './src/components/Load';

export default function App(){
  const [fontsLoaded] = useFonts({
    Oswald_200ExtraLight,
    Oswald_300Light,
    Oswald_400Regular,
    Oswald_700Bold,
  });

  if(!fontsLoaded){
    return <Load />
  }

  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <Routes />
      </AppProvider>
    </ThemeProvider>
  )
}