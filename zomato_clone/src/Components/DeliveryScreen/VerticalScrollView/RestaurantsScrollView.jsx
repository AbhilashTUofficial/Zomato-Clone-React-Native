import { ScrollView, View } from 'react-native';
import React, { useState } from 'react';
import { initialData } from '../../../model/ResturantsList';
import RestaurantCard from './RestaurantCard';
import { useSelector } from 'react-redux';
import EmptyRestCard from './EmptyRestCard';

//? All Restaurants available 
const RestaurantsScrollView = () => {

    const data = useSelector((state) => state.data);
    const restaurants = data.Restaurants;

    return (

        <View style={{ paddingVertical: 6 }}>

            <ScrollView showsHorizontalScrollIndicator={false}>

                {
                    //! Loop through all restaurants and pass the 
                    //! data to RestaurantCard (component).
                    restaurants == [] ? restaurants.map((i) => {

                        return (
                            <RestaurantCard
                                restaurant={i}
                                key={i.id} />
                        );
                    }) : <EmptyRestCard />
                }

            </ScrollView>

        </View>
    );
};

export default RestaurantsScrollView;

