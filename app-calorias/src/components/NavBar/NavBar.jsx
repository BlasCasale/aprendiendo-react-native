import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { staticInfo } from '../../utils/staticInfo';

const NavBar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Text style={styles.textName}>Hola {staticInfo.name}</Text>
                <Text style={styles.text}>Bienvenido a tus objetivos</Text>
            </View>
            <View style={styles.rightContainer}>
                <Image source={{ uri: staticInfo.uri }} style={styles.image} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {

    },
    leftContainer: {

    },
    rightContainer: {

    },
    textName: {

    },
    text: {

    },
    image: {

    }
});

export default NavBar