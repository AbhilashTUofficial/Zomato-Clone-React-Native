import { ScrollView, View } from 'react-native';
import React, { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import { Restaurants } from '../model/ResturantsList';

//? All Restaurants available 
const RestaurantsScrollView = () => {

    const [restaurants, setItems] = useState(Restaurants);

    return (

        <View style={{ paddingVertical: 6 }}>

            <ScrollView showsHorizontalScrollIndicator={false}>

                {
                    //! Loop through all restaurants and pass the 
                    //! data to RestaurantCard (component).
                    restaurants.map((i) => {

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

