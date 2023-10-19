import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [boolean, setBoolean] = useState(false);

  const response = boolean ? "Soy falso" : "Soy verdadero";

  const changeState = () => setBoolean(!boolean);

  return (
    <View style={styles.container}>
      <Text>{response}</Text>
      <Button onPress={() => changeState()} title='Cambiar estado'></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
