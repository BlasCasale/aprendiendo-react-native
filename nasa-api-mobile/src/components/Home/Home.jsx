import React from 'react';
import { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { get_apod } from '../../redux/actions';

const Home = () => {

    const apod = useSelector((state) => state.apod);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(get_apod());
    }, []);

    apod && console.log(apod)

    return (
        <View>
            {
                apod &&
                <>
                    <Text>{apod.copyright}</Text>
                    <Text>Fecha: {apod.date}</Text>
                    <Image source={() => require(apod.url)} />
                </>
            }
        </View>
    );
};

export default Home;