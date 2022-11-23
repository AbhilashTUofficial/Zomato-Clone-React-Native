import * as React from 'react';
import { StatusBar } from 'react-native';
import TabController from '../routes/tab_controller';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RestaurantViewScreen from '../screens/RestaurantViewScreen/restaurant_view_screen';

const ScreenController = () => {
    const Stack = createNativeStackNavigator();

    return (

        <Provider store={store}>

            <Stack.Navigator screenOptions={{
                headerShown: false, animation: 'slide_from_right',
                animationDuration: 20,
            }}>
                <Stack.Screen name='tabcontroller' component={TabController} />

                <Stack.Screen name='restaurantscreen' component={RestaurantViewScreen} />

            </Stack.Navigator>


        </Provider>

    );
};

export default ScreenController;