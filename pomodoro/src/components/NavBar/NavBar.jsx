import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const NavBar = ({ currentTime, setCurrentTime, setTime }) => {

    const handlePress = (index) => {
        const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
        setCurrentTime(index);
        setTime(newTime * 60);
    };

    const options = ["Pomodoro", "Short break", "Long break"];

    return (
        <View style={styles.view}>
            {
                options.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[styles.itemStyle, currentTime !== index && styles.itemStyleInactive]}
                        onPress={() => handlePress(index)}>
                        <Text style={styles.text}>{item}</Text>
                    </TouchableOpacity>))
            }
        </View >
    );
};

const styles = StyleSheet.create({
    itemStyle: {
        width: "33%",
        padding: 5,
        borderWidth: 3,
        borderColor: "white",
        marginVertical: 20,
        borderRadius: 10,
        alignItems: "center"
    },
    itemStyleInactive: {
        borderColor: "transparent"
    },
    view: {
        display: "flex",
        flexDirection: "row"
    },
    text: {
        fontWeight: "bold"
    }
})

export default NavBar;