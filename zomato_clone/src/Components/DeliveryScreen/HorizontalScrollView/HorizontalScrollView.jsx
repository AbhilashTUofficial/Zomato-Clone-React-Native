import { FlatList, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import ElongatedCard from './ElongatedCard';
import Heading from '../Common/Heading';

//? A horinontal scroll view which can display restaurants 
//? as a elevated card.
const HorizontalScrollView = () => {
    const data = useSelector((state) => state.data);

    var recommendedList = [];
    var biryaniList = [];

    data.Restaurants.map((restaurant) => {
        var tags = restaurant.tags;
        if (tags.includes("recommended")) {
            recommendedList.push(restaurant);
        }
    });

    data.Restaurants.map((restaurant) => {
        var tags = restaurant.tags;
        if (tags.includes("biryani")) {
            biryaniList.push(restaurant);
        }
    });
    return (
        <View
            style={{
                width: "100%",
                paddingVertical: 6
            }}>

            <Heading label={"Recommended for you"} />


            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={recommendedList}
                renderItem={(itemData) => {
                    return (<ElongatedCard
                        restId={itemData.item.id}
                    />);
                }} />



            <Heading label={"Delicious biryani"} />

            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={biryaniList}
                renderItem={(itemData) => {
                    return (<ElongatedCard
                        restId={itemData.item.id}
                    />);
                }} />

        </View>
    );
};

export default HorizontalScrollView;




