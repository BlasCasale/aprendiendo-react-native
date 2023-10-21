import { StyleSheet, SafeAreaView, Platform } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import NavBar from './src/components/NavBar/NavBar';
import { blue } from './src/utils/utils'
import Home from './src/components/Home/Home';

export default function App() {

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <NavBar />
        <Home />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: blue,
    flex: 1,
    paddingTop: Platform.OS === "android" && 30,
    paddingHorizontal: 10
  }
});
