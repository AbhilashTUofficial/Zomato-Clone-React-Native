import { RefreshControl, ScrollView, View } from "react-native";
import { commonStyles } from "../../../screens/common_styles";
import Wrapper from "../../Common/Wrapper";
import OfferBanner from "../Banners/OfferBanner";
import Heading from "../Common/Heading";
import SafeArea from "../Common/SafeArea";
import FoodTypesScrollView from "../FoodTypes/FoodTypesScrollView";
import Header from "../Header/Header";
import StickyHeader from "../Header/StickyHeader";
import HorizontalScrollView from "../HorizontalScrollView/HorizontalScrollView";
import RestaurantsScrollView from "../VerticalScrollView/RestaurantsScrollView";
import React, { useEffect, useState } from 'react';

const ConnectedScreen = () => {
    const [refreshing, setRefreshing] = useState(false);

    return (

        <Wrapper>

            <View style={commonStyles.container}>


                <ScrollView stickyHeaderIndices={[1]} showsVerticalScrollIndicator={false}
                    refreshControl={<RefreshControl refreshing={refreshing} />}>

                    <Header />

                    <StickyHeader />

                    <OfferBanner source={require("../../../assets/img/foodbanner1.jpg")} />

                    <Heading label={"Check this out!"} />

                    <OfferBanner source={require("../../../assets/img/foodbanner2.jpg")} />

                    <Heading label={"Eat what makes you happy"} />

                    <FoodTypesScrollView />

                    <HorizontalScrollView />

                    <Heading label={"All restaurants around you"} />

                    <RestaurantsScrollView />

                    <SafeArea />

                </ScrollView>

            </View>
        </Wrapper>
    );


};

export default ConnectedScreen;