import React from 'react';
import { useEffect } from 'react';
import { StyleSheet, View, SafeAreaView, Platform } from 'react-native';
import { useDispatch } from 'react-redux';
import { get_apod, get_apod_for_date } from '../../redux/actions';
import NavBar from '../NavBar/NavBar';
import TodayImage from '../TodayImage/TodayImage';
import LastFiveDayImages from '../LastFiveDayImages/LastFiveDayImages';
import { blue } from '../../utils/utils';

const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(get_apod());
        dispatch(get_apod_for_date());
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <NavBar />
            <View style={styles.view}>
                <TodayImage />
                <LastFiveDayImages />
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    view: {
        flex: 1
    },
    container: {
        backgroundColor: blue,
        flex: 1,
        paddingTop: Platform.OS === "android" && 30,
        paddingHorizontal: 10
    }
});

export default Home;