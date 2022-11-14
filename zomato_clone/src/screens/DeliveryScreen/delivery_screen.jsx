import { RefreshControl, ScrollView, View } from 'react-native';
import React, { useState } from 'react';
import Wrapper from '../../Components/Wrapper';
import Header from '../../Components/Header';
import StickyHeader from '../../Components/StickyHeader';
import OfferBanner from '../../Components/OfferBanner';
import Heading from '../../Components/Heading';
import FoodTypesScrollView from '../../Components/FoodTypesScrollView';
import RestaurantsScrollView from '../../Components/RestaurantsScrollView';
import SafeArea from '../../Components/SafeArea';
import { commonStyles } from '../common_styles';
import HorizontalScrollView from '../../Components/HorizontalScrollView';

const DeliveryScreen = () => {
    const [refreshing, setRefreshing] = useState(false);

    return (
        <Wrapper>

            <View style={commonStyles.container}>

                <ScrollView stickyHeaderIndices={[1]} showsVerticalScrollIndicator={false}
                    refreshControl={<RefreshControl refreshing={refreshing} />}>


                    <View >
                        <Header />

                        <StickyHeader />

                        <OfferBanner source={require("../../assets/img/foodbanner1.jpg")} />

                        <Heading label={"Check this out!"} />

                        <OfferBanner source={require("../../assets/img/foodbanner2.jpg")} />

                        <Heading label={"Eat what makes you happy"} />

                        <FoodTypesScrollView />

                        <HorizontalScrollView />

                        <Heading label={"All restaurants around you"} />

                        <RestaurantsScrollView />

                        <SafeArea />
                    </View>

                </ScrollView>

            </View>

        </Wrapper>
    );
};



export default DeliveryScreen;
