import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { likeItem } from '../../../redux/Restaurant/restaurantSlice';
import { darkGrey } from '../../../constants';

const FavItemBtn = ({ faved, itemId, category, restId }) => {

    //? Icons
    const favIcon = require('../../../assets/icons/heart_active.png');
    const notFavIcon = require('../../../assets/icons/heart_inactive.png');

    const dispatch = useDispatch();
    const [isFaved, setFaved] = useState(faved);
    const likeHandler = () => {
        dispatch(likeItem({ itemId, category, restId }));
        setFaved(!isFaved);
    };


    return (
        <TouchableOpacity activeOpacity={0.6} style={favItemBtnStyles.favBtn}
            onPress={likeHandler} >

            <Image source={isFaved ? favIcon : notFavIcon} style={favItemBtnStyles.favIcon} />

        </TouchableOpacity>
    );
};


export default FavItemBtn

const favItemBtnStyles=StyleSheet.create({
    favBtn: {
        width: 32,
        height: 32,
        padding: 6,
        borderRadius: 99,
        backgroundColor: "white",
        alignItems: "center",
        borderColor: darkGrey,
        borderWidth: 0.4,
        margin: 6,
    },
    favIcon: {
        height: '100%',
        width: "100%",
        alignSelf: "center",
        justifyContent: "center"
    },
})