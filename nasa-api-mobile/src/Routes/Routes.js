import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ApodDetail from '../components/ApodDetail/ApodDetail';
import Home from '../components/Home/Home';
import { ccc } from '../utils/utils';

const Stack = createNativeStackNavigator();

const routeScreenDefaultOptions = {
    headearStyle: {
        backgrounColor: ccc
    }
};

const Routes = () => {
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={Home} options={routeScreenDefaultOptions} />
            <Stack.Screen name='Detail' component={ApodDetail} options={routeScreenDefaultOptions} />
        </Stack.Navigator>
    </NavigationContainer>
};


export default Routes;