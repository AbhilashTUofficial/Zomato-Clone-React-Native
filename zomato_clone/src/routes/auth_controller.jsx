import * as React from 'react';
import { StatusBar } from 'react-native';
import TabController from '../routes/tab_controller';
import AuthScreen from '../screens/AuthScreen/auth_screen';
import OTPVerifyScreen from '../screens/OtpVerifyScreen/otp_verify_screen';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenController from './screen_controller';

const AuthController = () => {
    const Stack = createNativeStackNavigator();

    return (
        <>
            <Provider store={store}>

                <Stack.Navigator screenOptions={{
                    headerShown: false, animation: 'slide_from_right',
                    animationDuration: 20,
                }}>

                    <Stack.Screen name='authscreen' component={AuthScreen} />

                    <Stack.Screen name='otpverification' component={OTPVerifyScreen} />

                    <Stack.Screen name='screens' component={ScreenController} />

                </Stack.Navigator>


            </Provider>
        </>
    );
};

export default AuthController;