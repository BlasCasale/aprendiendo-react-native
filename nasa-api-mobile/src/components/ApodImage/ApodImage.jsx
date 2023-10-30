import React from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import { blueCard, ffffff } from '../../utils/utils';

const ApodImage = ({ title, date }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
            <TouchableOpacity style={styles.btnContainer}>
                <Text style={styles.date}>Vista</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: blueCard,
        borderRadius: 30,
        padding: 10,
        marginVertical: 20,
        justifyContent: "center",
        alignItems: "center",
        gap: 10
    },
    title: {
        color: ffffff,
        fontSize: 18
    },
    date: {
        color: ffffff,
        fontSize: 16
    },
    btnContainer: {
        alignSelf: "flex-end"
    }
});

export default ApodImage;