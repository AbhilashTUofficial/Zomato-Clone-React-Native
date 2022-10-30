import { Dimensions, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Wrapper from '../Components/Wrapper';
import { primary, secondary } from '../constants';
import RestaurantDetails from '../Components/RestaurantDetails';
import Header from '../Components/RestaurantHeader';
import VegNonVeg from '../Components/VegNonVegTag';
import CatergoryExpandable from '../Components/CategoryExpandable';
import { useRoute } from '@react-navigation/native';
import BrouseMenu from '../Components/BrouseMenu';

//? Restaurant Screen

function RestaurantViewScreen({ navigation }) {

    const route = useRoute();

    //! Localizing data

    const resturantDetails = {
        id: route.params.id,
        storeName: route.params.storeName,
        foodTypes: route.params.items,
        travelTime: route.params.travelTime,
        ratting: route.params.ratting,
        location: route.params.location,
        distance: route.params.distance,
    };

    const categories = route.params.categories;
    const restaurantName = route.params.storeName;

    return (
        <Wrapper >
            <StatusBar translucent backgroundColor="transparent" />

            <View style={RestViewScrStyle.cont}>

                <ScrollView stickyHeaderIndices={[0]}

                    showsVerticalScrollIndicator={false}>

                    <Header goBackHandler={() => navigation.goBack()} name={restaurantName} />

                    <RestaurantDetails restaurant={resturantDetails} />

                    {categories.length == 0 ? null : <VegNonVeg />}

                    <CatergoryExpandable categories={categories} />

                    <HealthGuide />

                </ScrollView>

                <BottomPops categories={categories} />

            </View>

        </Wrapper>
    );
};

export default RestaurantViewScreen;

const BottomPops = (props) => {
    return (
        <View style={RestViewScrStyle.bottomPopCont}>
            <BrouseMenu categories={props.categories} />
        </View>
    );
};


const HealthGuide = () => {

    const contents = [
        "Menu items, nutritional information and prices are set directly by the restaurant.",
        "Nutritional information values displayed are indicative, per serving and may vary depending on the ingreding on the ingredients, portion size and customizations.",
        "An average active adult requires 2,00 kcal energy per day, however, calorie needs may vary."
    ];

    return (
        <View style={RestViewScrStyle.hgCont}>

            {
                contents.map((text) => {
                    return (
                        <View
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