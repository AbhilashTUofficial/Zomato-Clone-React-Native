import { Dimensions, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Wrapper from '../../Components/Common/Wrapper';
import { primary, secondary } from '../../constants';
import RestaurantDetails from '../../Components/RestaurantView/RestaurantDetails';
import Header from '../../Components/RestaurantView/RestaurantHeader';
import VegNonVeg from '../../Components/RestaurantView/VegNonVegTag';
import CatergoryExpandable from '../../Components/RestaurantView/CategoryExpandable';
import { useNavigation, useRoute } from '@react-navigation/native';
import { connect } from 'react-redux';
import { loadToRests } from '../../redux/Restaurant/restaurant-actions';
import BrouseMenu from '../../Components/RestaurantView/BrouseMenu';

//? Restaurant Screen

const RestaurantView = ({ currentRestData, loadToRests }) => {

    const categories = currentRestData.categories;
    const restaurantName = currentRestData.storeName;

    const navigation = useNavigation();

    const loadToRestsHandler = () => {
        loadToRests(currentRestData);
        navigation.navigate("tabcontroller");
    };

    return (

        <Wrapper >

            <StatusBar translucent backgroundColor="transparent" />

            <View style={RestViewScrStyle.cont}>

                <ScrollView stickyHeaderIndices={[0]}

                    showsVerticalScrollIndicator={false}>

                    <Header goBackHandler={loadToRestsHandler} name={restaurantName} />

                    <RestaurantDetails restaurant={currentRestData} />

                    {categories.length !== 0 && <VegNonVeg />}

                    <CatergoryExpandable restId={currentRestData.id} />

                    <HealthGuide />

                </ScrollView>
                <View style={RestViewScrStyle.bottomPopCont}>
                    <BrouseMenu />
                </View>

            </View>

        </Wrapper>
    );
};

const mapStateToProps = state => {
    return {
        currentRestData: state.data.currentRestData,
    };
};
const mapStateToDispatch = dispatch => {
    return {
        loadToRests: (restaurant) => dispatch(loadToRests(restaurant)),
    };
};

export default connect(mapStateToProps, mapStateToDispatch)(RestaurantView);



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