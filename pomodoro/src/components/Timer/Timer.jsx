import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Timer = ({ time }) => {

    const formattedTime = `${Math.floor(time / 60)
    .toString().padStart(2, "0")}:${(time % 60).toString().padStart(2, "0")}`;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{formattedTime}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 0.3,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F2F2F2",
        padding: 15,
        borderRadius: 20
    },
    text: {
        fontSize: 75,
        fontWeight: "bold",
        color: "#333333"
    }
})
export default Timer