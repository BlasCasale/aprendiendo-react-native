import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { blueCard, ffffff } from '../../utils/utils';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { apod_detail } from '../../redux/actions';

const ApodImage = ({ title, date, index }) => {

    const apodFiveDays = useSelector((state) => state.apodFiveDays);

    const dispatch = useDispatch();

    const { navigate } = useNavigation();

    const handleViewPress = () => {
        dispatch(apod_detail(apodFiveDays[index]));
        navigate('Detail');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
            <TouchableOpacity style={styles.btnContainer} onPress={handleViewPress}>
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