import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const BtnTime = ({ isActive, handleStartStop }) => {

    const text = isActive ? "Detener" : "Iniciar";

    return (
        <TouchableOpacity onPress={() => handleStartStop()} style={styles.btn}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btn: {
        backgroundColor: "#333333",
        alignItems: "center",
        padding: 10,
        borderRadius: 15,
    },
    text: {
        color: "#fafafa",
        fontSize: 20
    }
});

export default BtnTime;