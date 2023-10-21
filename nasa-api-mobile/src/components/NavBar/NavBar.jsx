import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { ccc } from '../../utils/utils'

const NavBar = () => {

    return (
        <View style={styles.header}>
            <View style={styles.leftContainer}>
                <Text style={styles.text}>Explore</Text>
            </View>
            <View style={styles.rigthContainer}>
                <Image source={require('../../../assets/logo-nasa.png')} style={styles.img} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center"
    },
    leftContainer: {
        flex: 1,
        alignItems: "flex-start"
    },
    text: {
        fontSize: 22,
        color: ccc
    },
    rigthContainer: {
        flex: 1,
        alignItems: "flex-end",
    },
    img: {
        width: 80,
        height: 80
    },
});

export default NavBar;