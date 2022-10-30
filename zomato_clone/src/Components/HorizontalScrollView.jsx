import { ScrollView, View } from 'react-native';
import React, { useState } from 'react';
import ElongatedCard from './ElongatedCard';
import { Restaurants } from '../model/ResturantsList';

//? A horinontal scroll view which can display restaurants 
//? as a elevated card.
const HorizontalScrollView = (props) => {

    const [restaurants, setItems] = useState(Restaurants);

    return (
        <View
            style={{

                width: "100%",
                paddingVertical: 6
            }}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}>
                {
                    //! if any data from the given list (list)
                    //! cross matches with data from the restaurant 
                    //! then pass the data to ElongatedCard (component) and return it.

                    restaurants.map((i) => {
                        if (props.list.includes(i.id)) {
                            return (
                                <ElongatedCard
                                    restaurant={i}
                                    key={i.id} />

                            );
                        }

                    })}
            </ScrollView>

        </View>
    );
};

export default HorizontalScrollView;

