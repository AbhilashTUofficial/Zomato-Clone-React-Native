import { ScrollView, View } from 'react-native';
import React, { useState } from 'react';
import { initialData } from '../../../model/ResturantsList';
import RestaurantCard from './RestaurantCard';

//? All Restaurants available 
const RestaurantsScrollView = () => {

    const [restaurants, setItems] = useState(initialData.Restaurants);

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

