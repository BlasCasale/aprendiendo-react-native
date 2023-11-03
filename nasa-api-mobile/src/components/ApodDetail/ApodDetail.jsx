import React, { useEffect } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { quite_apod } from '../../redux/actions';
import { blue } from '../../utils/utils';

const ApodDetail = () => {

    const apodDetail = useSelector((state) => state.apodDetail);

    const dispatch = useDispatch();
    useEffect(() => {
        return () => dispatch(quite_apod());
    }, []);

    return (
        <View style={styles.container}>
            <Text>{apodDetail?.title}</Text>
            <Image source={{ uri: apodDetail?.url }} />
            <Text>{apodDetail?.explanation}</Text>
            <Text>Fecha: {apodDetail?.date}</Text>
            {apodDetail.copyright && <Text>Autor: {apodDetail.copyright}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: blue,
        padding: 15,
        gap: 10,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default ApodDetail