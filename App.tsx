import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Routes } from './src/routes';
import * as ScreenOrientation from 'expo-screen-orientation';


export default function App() {
  useEffect(() => {
    async function lockScreenOrientation() {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    }

    lockScreenOrientation();   
  }, []);

  return (
    <>
      <StatusBar
        style='light'
      />
      <Routes />
    </>
  );
}
