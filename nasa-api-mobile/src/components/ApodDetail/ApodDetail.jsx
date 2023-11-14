import React, { useEffect } from 'react'
import { View, Text, Image, StyleSheet, ScrollView, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { quite_apod } from '../../redux/actions';
import { blue, ffffff, ccc, blueCard } from '../../utils/utils';
import { useRoute } from '@react-navigation/native';

const ApodDetail = () => {

    // const { params: { title, url, explanation, date} } = useRoute();

    const apodDetail = useSelector((state) => state.apodDetail);

    const dispatch = useDispatch();
    useEffect(() => {
        return () => dispatch(quite_apod());
    }, []);

    return (
        <ScrollView style={styles.bigContainer}>
            <View style={styles.container}>
                <Text style={styles.title}>{apodDetail?.title}</Text>
                <Image source={{ uri: apodDetail?.url }} style={styles.img} />
                <Text style={styles.explanation}>{apodDetail?.explanation}</Text>
                <Text style={styles.text}>Fecha: {apodDetail?.date}</Text>
                {apodDetail.copyright && <Text style={styles.text}>Autor: {apodDetail.copyright}</Text>}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    bigContainer: {
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: blue,
        padding: 15,
        gap: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: ffffff,
        fontSize: 18
    },
    explanation: {
        color: ffffff,
        fontSize: 15,
        padding: 6,
        backgroundColor: blueCard,
        borderRadius: 20
    },
    text: {
        color: ffffff,
        fontSize: 15
    },
    img: {
        height: 200,
        width: "100%",
        borderRadius: 30,
        borderColor: ccc,
        borderWidth: 2,
    }
});

export default ApodDetail