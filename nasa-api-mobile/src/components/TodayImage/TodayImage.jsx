import React from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { ccc, blueCard, ffffff } from '../../utils/utils';

const TodayImage = () => {

    const apod = useSelector((state) => state.apod);

    return (
        <View style={styles.container}>
            <Image source={{ uri: apod?.url }} style={styles.image} />
            <Text style={styles.title}>{apod?.title}</Text>
            <Text style={styles.date}>Fecha: {apod?.date}</Text>
            <TouchableOpacity style={styles.btnContainer}>
                <Text style={styles.date}>Vista</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        padding: 20,
        borderRadius: 30,
        margin: 20,
        backgroundColor: blueCard,
        gap: 10
    },
    image: {
        height: 200,
        borderRadius: 30,
        borderColor: ccc,
        borderWidth: 2,
    },
    title: {
        color: ffffff,
        fontWeight: "bold",
        fontSize: 18
    },
    date: {
        color: ffffff,
        fontSize: 15
    },
    btnContainer: {
        alignItems: "flex-end"
    }
});

export default TodayImage;