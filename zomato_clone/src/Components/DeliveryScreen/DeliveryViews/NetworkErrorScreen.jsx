import Wrapper from "../../Common/Wrapper";
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from "react-native";
import { primary } from "../../../constants";

const NetworkErrorScreen = () => {

    const noNetworkIcon = require('../../../assets/icons/notfound_icon.png');
    return (

        <Wrapper>
            <View style={networkErrorStyles.cont}>
                <Image style={networkErrorStyles.img} source={noNetworkIcon} />
                <View style={{ width: "80%" }}>
                    <Text style={networkErrorStyles.prompt}>Could not connect to internet. Please check your network.</Text>
                </View>

                <Text style={networkErrorStyles.tryAgain}>Try again</Text>
            </View>
        </Wrapper>
    );


};

export default NetworkErrorScreen;


const networkErrorStyles = StyleSheet.create({
    cont: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    prompt: {
        fontSize: 12,
        flexWrap: "wrap",
        textAlign: "center",
        margin: 12,
    },
    tryAgain: {
        color: primary,
        fontSize: 12,
        fontWeight: "500"
    },
    img: {
        margin: 16,
    }
});