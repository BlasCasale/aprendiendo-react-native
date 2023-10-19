import Main from './src/Main';
import { View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.view}>
      <Main />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingTop: 25
  }
})