import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import TabController from './src/screens/tab_controller';
import RestaurantViewScreen from './src/screens/restaurant_view_screen';
import AuthScreen from './src/screens/AuthScreen/auth_screen';
import OTPVerifyScreen from './src/screens/OtpVerifyScreen/otp_verify_screen';
// import SplashScreen from 'react-native-splash-screen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      {/* StatusBar translucent make it, that the UI goes under status bar */}
      <StatusBar translucent backgroundColor="transparent" />

      <NavigationContainer>

        <Stack.Navigator screenOptions={{ headerShown: false }}>

          {/* Screens */
            //TODO: Need to add splash screen in here
          }

          <Stack.Screen name='authscreen' component={AuthScreen} />

          <Stack.Screen name='otpverification' component={OTPVerifyScreen} />

          <Stack.Screen name='tabcontroller' component={TabController} />

          <Stack.Screen name='restaurantscreen' component={RestaurantViewScreen} />

        </Stack.Navigator>

      </NavigationContainer>

    </>
  );
}

export default App;