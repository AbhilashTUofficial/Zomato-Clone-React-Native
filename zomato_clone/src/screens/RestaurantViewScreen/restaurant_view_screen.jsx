import { Dimensions, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Wrapper from '../../Components/Common/Wrapper';
import { primary, secondary } from '../../constants';
import RestaurantDetails from '../../Components/RestaurantView/RestaurantDetails';
import Header from '../../Components/RestaurantView/RestaurantHeader';
import VegNonVeg from '../../Components/RestaurantView/VegNonVegTag';
import CatergoryExpandable from '../../Components/RestaurantView/CategoryExpandable';
import { useNavigation, useRoute } from '@react-navigation/native';
import BrouseMenu from '../../Components/RestaurantView/BrouseMenu';
import { useSelector } from 'react-redux';


//? Restaurant Screen

const RestaurantViewScreen = () => {

    const data = useSelector((state) => state.data);

    const currentId = data.currentRest.id;
    const restaurant = data.Restaurants.find((rest) => rest.id === currentId);

    const restaurantName = restaurant.storeName;


    return (

        <Wrapper >

            <StatusBar translucent backgroundColor="transparent" />

            <View style={RestViewScrStyle.cont}>

                <ScrollView stickyHeaderIndices={[0]}

                    showsVerticalScrollIndicator={false}>

                    <Header name={restaurantName} />

                    <RestaurantDetails restaurant={restaurant} />

                    {restaurant.categories.length !== 0 && <VegNonVeg />}

                    <CatergoryExpandable restaurant={restaurant} restId={restaurant.id} />

                    <HealthGuide />

                </ScrollView>
                <View style={RestViewScrStyle.bottomPopCont}>
                    <BrouseMenu restaurant={restaurant} />
                </View>

            </View>

        </Wrapper>
    );
};

export default RestaurantViewScreen;



const HealthGuide = () => {

    const contents = [
        "Menu items, nutritional information and prices are set directly by the restaurant.",
        "Nutritional information values displayed are indicative, per serving and may vary depending on the ingreding on the ingredients, portion size and customizations.",
        "An average active adult requires 2,00 kcal energy per day, however, calorie needs may vary."
    ];

    return (
        <View style={RestViewScrStyle.hgCont}>

            {
                contents.map((text, i) => {
                    return (
                        <View key={i}
                            style={RestViewScrStyle.row}>

                            <Text style={{ fontSize: 28 }}>• </Text>

                            <Text style={{ fontSize: 12 }}>{text}</Text>

                        </View>
                    );
                })
            }

            <TouchableOpacity>
                <Text style={RestViewScrStyle.link}>Report an issue with the menu</Text>
            </TouchableOpacity>

        </View>
    );
};

const RestViewScrStyle = StyleSheet.create({
    cont: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        alignItems: "center",
        flexDirection: 'row',
        backgroundColor: "#F6F5FA",
    },
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
    bottomPopCont: {
        bottom: 16,
        alignItems: 'center',
        position: "absolute",
        width: "100%"
    },

});