import { Image, StatusBar, StyleSheet } from 'react-native';
import React from 'react';

const SplashScreen = () => {
    const splashImg = require('../assets/img/splashscreen.png');
    return (
        <>
            <StatusBar translucent backgroundColor="transparent" />

            <Image style={styles.img} source={splashImg} />
        </>
    );
};

export default SplashScreen;


const styles = StyleSheet.create({
    img: {
        width: "100%",
        height: "100%"
    }
});
