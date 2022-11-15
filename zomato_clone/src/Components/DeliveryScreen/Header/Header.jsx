import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { lightGrey, secondary } from '../../../constants';

//? Icons
const locationIcon = require('../../../assets/icons/location.png');
const dropdownIcon = require('../../../assets/icons/dropdown2.png');
const languageIcon = require('../../../assets/icons/language.png');
const profileIcon = require('../../../assets/icons/profile.png');

const Header = () => {
    return (
        <View
            style={HeaderStyles.container}>

            <View style={HeaderStyles.location}>

                <Image source={locationIcon} style={HeaderStyles.locationIcon} />

                <Text style={HeaderStyles.locationText}>Location</Text>

                <Image source={dropdownIcon} style={HeaderStyles.dropdownIcon} />

            </View>

            <View style={{ flexDirection: "row" }}>

                <TouchableOpacity activeOpacity={0.8} style={HeaderStyles.languageBtn}>

                    <Image source={languageIcon}
                        style={HeaderStyles.languageIcon} />

                </TouchableOpacity>

                <TouchableOpacity style={HeaderStyles.profileBtn}>

                    <Image source={profileIcon}
                        style={HeaderStyles.profileIcon} />

                </TouchableOpacity>

            </View>

        </View>
    );
};

export default Header;


//? Styles
const HeaderStyles = StyleSheet.create({
    container: {
        height: 46,
        width: Dimensions.get("screen").width,
        justifyContent: "space-between",
        paddingHorizontal: 12,
        flexDirection: "row",
        marginTop: 16,
    },
    location: {
        flexDirection: "row",
        alignItems: "center"
    },
    locationIcon: {
        width: 26,
        height: 26,
        alignSelf: "center",
    },
    locationText: {
        fontSize: 16,
        fontWeight: "bold",
        color: secondary,
        letterSpacing: 1,
    },
    dropdownIcon: {
        height: 16,
        width: 16,
        marginTop: 6,
        marginLeft: 6,
        justifyContent: "center",
        alignSelf: "center",
    },
    languageBtn: {
        width: 36,
        height: 36,
        margin: 6,
        elevation: 3,
        borderRadius: 6,
        shadowColor: secondary,
        shadowOffset: { height: 4, width: 4 },
        shadowOpacity: 1,
        shadowRadius: 1,
        padding: 8,
        backgroundColor: "white"
    },
    languageIcon: {
        height: '100%',
        width: "100%",
        alignSelf: "center",
    },
    profileBtn: {
        width: 36,
        height: 36,
        marginLeft: 6,
        marginTop: 6,
        backgroundColor: lightGrey,
        borderRadius: 90
    },
    profileIcon: {
        height: '100%',
        width: "100%",
        alignSelf: "center",
    },

});
