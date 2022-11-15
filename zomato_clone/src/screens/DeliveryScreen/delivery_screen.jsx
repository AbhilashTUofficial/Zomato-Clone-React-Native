import { RefreshControl, ScrollView, View } from 'react-native';
import React, { useState } from 'react';
import Wrapper from '../../Components/Common/Wrapper';
import OfferBanner from '../../Components/DeliveryScreen/Banners/OfferBanner';
import Heading from '../../Components/DeliveryScreen/Common/Heading';
import FoodTypesScrollView from '../../Components/DeliveryScreen/FoodTypes/FoodTypesScrollView';
import RestaurantsScrollView from '../../Components/DeliveryScreen/VerticalScrollView/RestaurantsScrollView';
import SafeArea from '../../Components/DeliveryScreen/Common/SafeArea';
import { commonStyles } from '../common_styles';
import HorizontalScrollView from '../../Components/DeliveryScreen/HorizontalScrollView/HorizontalScrollView';
import Header from '../../Components/DeliveryScreen/Header/Header';
import StickyHeader from '../../Components/DeliveryScreen/Header/StickyHeader';

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
