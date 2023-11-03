import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import ApodImage from '../ApodImage/ApodImage';
import { ffffff } from '../../utils/utils';

const LastFiveDayImages = () => {

    const apodFiveDays = useSelector((state) => state.apodFiveDays);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Últimos 5 días</Text>
            <ScrollView style={styles.content}>
                {apodFiveDays?.map((apod, index) => (
                    <ApodImage key={index} {...apod} index={index} />
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 10,
        paddingHorizontal: 24
    },
    content: {
        flex: 1,
        columnGap: 20
    },
    text: {
        color: ffffff,
        fontSize: 16,
        marginBottom: 8
    }
});

export default LastFiveDayImages;