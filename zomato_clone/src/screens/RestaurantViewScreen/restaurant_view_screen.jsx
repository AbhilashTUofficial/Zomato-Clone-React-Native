import { Dimensions, ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import React from 'react';
import Wrapper from '../../Components/Common/Wrapper';
import RestaurantDetails from '../../Components/RestaurantView/RestaurantDetails';
import Header from '../../Components/RestaurantView/RestaurantHeader';
import VegNonVeg from '../../Components/RestaurantView/VegNonVegTag';
import CatergoryExpandable from '../../Components/RestaurantView/CategoryExpandable/CategoryExpandable';
import BrouseMenu from '../../Components/RestaurantView/BrouseMenu';
import { useSelector } from 'react-redux';
import HealthGuide from '../../Components/RestaurantView/HealthGuide';

//? Restaurant Screen

const RestaurantViewScreen = () => {

    const data = useSelector((state) => state.data);

    const currentId = data.currentRest.id;
    const restaurant = data.Restaurants.find((rest) => rest.id === currentId);
    const restaurantName = restaurant.storeName;


    return (

        <Wrapper >

            <StatusBar translucent backgroundColor="transparent" />

            <View style={restViewScrStyle.cont}>

                <ScrollView stickyHeaderIndices={[0]}

                    showsVerticalScrollIndicator={false}>

                    <Header name={restaurantName} />

                    <RestaurantDetails restaurant={restaurant} />

                    <VegNonVeg restaurant={restaurant} />

                    <CatergoryExpandable restaurant={restaurant} restId={restaurant.id} />

                    <HealthGuide />

                </ScrollView>
                <View style={restViewScrStyle.bottomPopCont}>
                    <BrouseMenu restaurant={restaurant} />
                </View>

            </View>

        </Wrapper>
    );
};

export default RestaurantViewScreen;

const restViewScrStyle = StyleSheet.create({
    cont: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        alignItems: "center",
        flexDirection: 'row',
        backgroundColor: "#F6F5FA",
    },

    bottomPopCont: {
        bottom: 16,
        alignItems: 'center',
        position: "absolute",
        width: "100%"
    },

});