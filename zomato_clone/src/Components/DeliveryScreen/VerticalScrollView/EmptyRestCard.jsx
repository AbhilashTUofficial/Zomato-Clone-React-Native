import { useNavigation } from '@react-navigation/native';
import React, { Component, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { secondary } from '../../../screens/common_styles';
import RattingTag from '../../Common/RattingTag';

//? Icons
const favIcon = require('../../../assets/icons/heart_active.png');
const notFavIcon = require('../../../assets/icons/heart_inactive.png');

const EmptyRestCard = () => {

    const img = require("../../../assets/food_items/nofood.png");
    const storeName = "Come back later";
    const [faved, setFav] = useState(false);

    return (
        <TouchableOpacity activeOpacity={0.8} style={RestaurantCardStyles.card}>

            {/* //? Header part */}
            <View style={RestaurantCardStyles.header}>

                <Image source={img} style={RestaurantCardStyles.img} />

                <TouchableOpacity activeOpacity={0.6} style={RestaurantCardStyles.favBtn}
                    onPress={() => { }} >

                    <Image source={faved ? favIcon : notFavIcon} style={RestaurantCardStyles.favIcon} />

                </TouchableOpacity>

            </View>

            {/* //? Body part */}
            <View style={RestaurantCardStyles.body}>

                <View style={RestaurantCardStyles.titleCont}>

                    <Text style={RestaurantCardStyles.titleText}>
                        {storeName}</Text>

                </View>

            </View>
        </TouchableOpacity>
    );
};
export default EmptyRestCard;

//? Styles

const RestaurantCardStyles = StyleSheet.create({
    card: {
        alignItems: 'center',
        height: 280,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 12,
        marginVertical: 12,
        borderRadius: 18,
        backgroundColor: "white",
        elevation: 4,
        borderRadius: 12,
        shadowColor: secondary,
        shadowOffset: { height: 3, width: 3 },
        shadowOpacity: 1,
        shadowRadius: 1,
    },
    header: {
        alignItems: 'center',
        flex: 5,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",

    },
    img: {
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
        height: '100%',
        width: "100%",
        alignSelf: "center",
    },
    body: {
        flex: 2,
        width: "100%",
        alignItems: "flex-start",
        paddingTop: 6,
        paddingLeft: 12,
        paddingRight: 12,
    },
    resDetails: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%"
    },
    titleCont: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%"
    },
    titleText: {
        color: secondary,
        fontWeight: "500",
        marginVertical: 2,
        fontSize: 20,
    },
    favBtn: {
        width: 32,
        height: 32,
        padding: 6,
        borderRadius: 99,
        backgroundColor: "white",
        position: "absolute",
        alignItems: "center",
        top: 16,
        right: 12
    },
    favIcon: {
        height: '100%',
        width: "100%",
        alignSelf: "center",
        justifyContent: "center"
    },
    resText: {
        fontWeight: "400",
        marginVertical: 2,
        fontSize: 14,
    },
    disTime: {
        height: 18,
        paddingHorizontal: 6,
        borderRadius: 2,
        backgroundColor: "white",
        position: "absolute",
        alignItems: "center",
        bottom: 12,
        right: 12,
        flexDirection: 'row',
        justifyContent: "center"
    },
    disTimeText: {
        color: secondary
    }

});