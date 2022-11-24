import { FlatList, ScrollView, View } from 'react-native';
import React, { useState } from 'react';
import { initialData } from '../../../model/ResturantsList';
import RestaurantCard from './RestaurantCard';
import { useSelector } from 'react-redux';
import NotFoundRestCard from './NotFoundRestCard';

//? All Restaurants available 
const RestaurantsScrollView = () => {

    const data = useSelector((state) => state.data);
    const restaurants = data.Restaurants;

    //! VirtualizedLists should never be nested inside plain ScrollViews 
    //! with the same orientation because it can break windowing and other 
    //! functionality - use another VirtualizedList-backed container instead.

    return (

        <View style={{ paddingVertical: 6 }}>


            <ScrollView showsHorizontalScrollIndicator={false}>

                {
                    //! Loop through all restaurants and pass the 
                    //! data to RestaurantCard (component).
                    restaurants === null ? <NotFoundRestCard /> : restaurants.map((i) => {

                        return (
                            <RestaurantCard
                                restaurant={i}
                                key={i.id} />
                        );
                    })
                }

            </ScrollView>

        </View>
    );
};

export default RestaurantsScrollView;

