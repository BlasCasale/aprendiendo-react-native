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

    const [isActive, setIsActive] = useState(false);

    const [time, setTime] = useState(25 * 60);

    const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "LONG");

    useEffect(() => {
        let interval = null;

        if (isActive) {
            interval = setInterval(() => {
                setTime(time - 1);
            }, 1000);
        } else {
            clearInterval(interval);
        };

        if (time === 0) {
            setIsActive(false);
            setIsWorking(prev => !prev);
            setTime(isWorking ? 300 : 1500);
        }

        return () => clearInterval(interval);
    }, [isActive, time]);

    const playSound = async () => {
        const { sound } = await Audio.Sound.createAsync(require("../assets/click.mp3"));
        await sound.playAsync();
    };

    const handleStartStop = () => {
        playSound();
        setIsActive(!isActive);
    };

    return (
        <View style={[styles.container, { backgroundColor: colors[currentTime] }]}>
            <Text style={styles.pomodoro}>Pomodoro</Text>
            <NavBar
                currentTime={currentTime}
                setCurrentTime={setCurrentTime}
                setTime={setTime}
            />
            <Timer time={time} />
            <BtnTime isActive={isActive} handleStartStop={handleStartStop} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 10,
        paddingHorizontal: 15,
        borderWidth: 3
    },
    pomodoro: {
        fontWeight: "bold",
        fontSize: 30,
        textAlign: "center",
        marginTop: 20
    }
})

export default Main;