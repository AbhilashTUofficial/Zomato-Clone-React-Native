import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { secondary } from '../../../screens/common_styles';
import { primary } from '../../../constants';


const NotFoundRestCard = () => {


    return (

        <TouchableOpacity activeOpacity={1} style={notFoundStyles.card}>
            <View style={{ width: "80%" }}>
                <Text style={notFoundStyles.prompt}>Could not connect to internet. Please check your network.</Text>
            </View>

            <Text style={notFoundStyles.tryAgain}>Try again</Text>

        </TouchableOpacity >
    );
};


export default NotFoundRestCard;

const notFoundStyles = StyleSheet.create({
    card: {
        alignItems: 'center',
        height: 120,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 12,
        marginVertical: 6,
        borderRadius: 18,
        borderRadius: 12,
        backgroundColor: "white",
        // android code
        elevation: 4,
        // ios code
        shadowColor: secondary,
        shadowOffset: { height: 3, width: 3 },
        shadowOpacity: 1,
        shadowRadius: 1,
    },

    prompt: {
        fontSize: 12,
        flexWrap: "wrap",
        textAlign: "center"
    },
    tryAgain: {
        color: primary,
        fontSize: 12,
        fontWeight: "500"
    }

});
