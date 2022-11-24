import { FlatList, ScrollView, Text, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import ElongatedCard from './ElongatedCard';
import Heading from '../Common/Heading';
import NotFoundRestCard from './NotFoundRestCard';

//? A horinontal scroll view which can display restaurants 
//? as a elevated card.
const HorizontalScrollView = () => {
    const data = useSelector((state) => state.data);

    var recommendedList = [];
    var biryaniList = [];


    try {
        data.Restaurants.map((restaurant) => {
            var tags = restaurant.tags;
            if (tags.includes("recommended")) {
                recommendedList.push(restaurant);
            }
        });

    } catch (error) {

        recommendedList = null;

    }
    try {
        data.Restaurants.map((restaurant) => {
            var tags = restaurant.tags;
            if (tags.includes("biryani")) {
                biryaniList.push(restaurant);
            }
        });

    } catch (error) {

        biryaniList = null;

    }

    return (
        <View
            style={{
                width: "100%",
                paddingVertical: 6
            }}>
            <Heading label={"Recommended for you"} />

            {
                recommendedList !== null ? <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={recommendedList}
                    renderItem={(itemData) => {
                        return (
                            recommendedList === [] ? <Text>Not found</Text> :
                                <ElongatedCard
                                    restId={itemData.item.id}
                                />);
                    }} /> : <NotFoundRestCard />
            }



            <Heading label={"Delicious biryani"} />


            {
                recommendedList !== null ? <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={biryaniList}
                    renderItem={(itemData) => {
                        return (<ElongatedCard
                            restId={itemData.item.id}
                        />);
                    }} /> : <NotFoundRestCard />
            }





        </View>
    );
};

export default HorizontalScrollView;




