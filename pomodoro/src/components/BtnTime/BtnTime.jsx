import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const BtnTime = ({ isWorking, handlePress }) => {

    const text = isWorking ? "Detener" : "Iniciar";

    return (
        <TouchableOpacity onPress={() => handlePress()} style={styles.btn}>
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