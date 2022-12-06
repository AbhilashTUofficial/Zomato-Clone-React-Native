import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { primary } from '../../constants';

const HealthGuide = () => {

    const contents = [
        "Menu items, nutritional information and prices are set directly by the restaurant.",
        "Nutritional information values displayed are indicative, per serving and may vary depending on the ingreding on the ingredients, portion size and customizations.",
        "An average active adult requires 2,00 kcal energy per day, however, calorie needs may vary."
    ];

    return (
        <View style={healthGuideStyles.hgCont}>

            {
                contents.map((text, i) => {
                    return (
                        <View key={i}
                            style={healthGuideStyles.row}>

                            <Text style={{ fontSize: 28 }}>• </Text>

                            <Text style={{ fontSize: 12 }}>{text}</Text>

                        </View>
                    );
                })
            }

            <TouchableOpacity>
                <Text style={healthGuideStyles.link}>Report an issue with the menu</Text>
            </TouchableOpacity>

        </View>
    );
};

export default HealthGuide

const healthGuideStyles =StyleSheet.create({
    hgCont: {
        flex: 1,
        backgroundColor: "#F6F5FA",
        height: 400,
    },
    link: {
        fontSize: 12,
        color: primary,
        paddingHorizontal: 12,
        marginTop: 24
    },
    row: {
        flexDirection: 'row',
        alignItems: "center",
        paddingHorizontal: 12,
        marginTop: 24
    },
})