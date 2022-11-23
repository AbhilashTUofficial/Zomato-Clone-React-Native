import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import SplashScreen from './src/screens/splash_screen';
import AuthController from './src/routes/auth_controller';
import ScreenController from './src/routes/screen_controller';

const Stack = createNativeStackNavigator();

function App() {

  const delay = ms => new Promise(res => setTimeout(res, ms));

  React.useEffect(() => {
    setTimeout(checkConnection, 1000);
  }, []);

  const [connect, setConnect] = React.useState(null);

  const checkConnection = async () => {
    try {
      await delay(1000);
      setConnect(false);
    } catch (err) {
      console.error('error', err);
    }
  };

  if (connect === null) {
    return (<SplashScreen />);
  } else if (connect === false) {
    return (
      <>

        <NavigationContainer>
          <StatusBar translucent backgroundColor="transparent" />

          <Stack.Navigator screenOptions={{
            headerShown: false, animation: 'slide_from_right',
            animationDuration: 20,
          }}>

            <Stack.Screen name='auth' component={AuthController} />

          </Stack.Navigator>

        </NavigationContainer>
      </>

    );
  } else {

    return (

      <NavigationContainer>
        <StatusBar translucent backgroundColor="transparent" />


        <Stack.Navigator screenOptions={{
          headerShown: false, animation: 'slide_from_right',
          animationDuration: 20,
        }}>

          <Stack.Screen name='screens' component={ScreenController} />

        </Stack.Navigator>

      </NavigationContainer>
    );
  }
}

export default App;