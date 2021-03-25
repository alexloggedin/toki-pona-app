import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Portal } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Portal.Host>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
        </Portal.Host>
      </SafeAreaProvider>
    );
  }
}
