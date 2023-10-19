import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { Audio } from 'expo-av'
import { colors } from './utils/const';
import NavBar from "./components/NavBar/NavBar";
import Timer from "./components/Timer/Timer";
import BtnTime from "./components/BtnTime/BtnTime";

const Main = () => {

    const [isWorking, setIsWorking] = useState(false);

    const [time, setTime] = useState(25 * 60);

    const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "LONG");

    useEffect(() => {
        let interval = null;

        if (isWorking) {
            interval = setInterval(() => {
                setTime(time - 1);
            }, 1000);
        } else {
            clearInterval(interval);
        };

        return () => clearInterval(interval)
    }, [isWorking, time]);

    const playSound = async () => {
        const { sound } = await Audio.Sound.createAsync(require("../assets/click.mp3"));
        await sound.playAsync();
    };

    const handlePress = () => {
        playSound();
        setIsWorking(!isWorking);
    };

    return (
        <View style={[styles.container, { backgroundColor: colors[currentTime] }]}>
            <Text>Pomodoro</Text>
            <NavBar
                currentTime={currentTime}
                setCurrentTime={setCurrentTime}
                setTime={setTime}
            />
            <Timer time={time} />
            <BtnTime isWorking={isWorking} handlePress={handlePress} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 10,
        paddingHorizontal: 15,
        borderWidth: 3
    }
})

export default Main;