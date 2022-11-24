import Wrapper from "../../Common/Wrapper";
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from "react-native";
import { primary } from "../../../constants";

const LoadingScreen = () => {

    // TODO: Need to setup fresco in order to use an gif image.
    const networkLoading = require('../../../assets/animation/network_loading.gif');



    return (

        <Wrapper>
            <View style={loadingScreenStyles.cont}>
                <View style={{ width: "80%" }}>
                    <Text style={loadingScreenStyles.prompt}>Loading...</Text>
                </View>

                <Image style={loadingScreenStyles.img} source={networkLoading} />
            </View>

        </Wrapper>
    );


};

export default LoadingScreen;


const loadingScreenStyles = StyleSheet.create({
    cont: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    prompt: {
        fontSize: 16,
        flexWrap: "wrap",
        textAlign: "center",
        margin: 12,
        opacity: 0.3,
    },

    img: {
        margin: 16,
    }
});