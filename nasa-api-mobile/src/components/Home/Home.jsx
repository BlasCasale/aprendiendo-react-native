import React from 'react';
import { useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { get_apod } from '../../redux/actions';
import TodayImage from '../TodayImage/TodayImage';

const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(get_apod());
    }, []);

    return (
        <View>
            <TodayImage />
        </View>
    );
};

export default Home;