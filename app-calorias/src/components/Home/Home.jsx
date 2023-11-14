import React from 'react';
import { View, StyleSheet } from 'react-native';
import NavBar from '../NavBar/NavBar';

const Home = () => {
    return (
        <View style={styles.container}>
            <NavBar />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {

    }
})

export default Home;