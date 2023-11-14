import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import Routes from './src/Routes/Routes';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Routes />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}