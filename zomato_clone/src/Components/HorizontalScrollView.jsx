import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { connect } from 'react-redux';

import ElongatedCard from './ElongatedCard';
import Heading from './Heading';

//? A horinontal scroll view which can display restaurants 
//? as a elevated card.
const HorizontalScrollView = ({ recommendedList, biryaniList }) => {
    return (
        <View
            style={{

                width: "100%",
                paddingVertical: 6
            }}>

            <Heading label={"Recommended for you"} />

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}>
                {

                    recommendedList.map((i) => {
                        console.log(i);

                        return (
                            <ElongatedCard
                                restaurant={i}
                                key={i.id} />
                        );

                    })
                }
            </ScrollView>

            <Heading label={"Delicious biryani"} />

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}>
                {

                    biryaniList.map((i) => {
                        console.log(i);

                        return (
                            <ElongatedCard
                                restaurant={i}
                                key={i.id} />
                        );

                    })
                }
            </ScrollView>

        </View>
    );
};

const mapStateToProps = state => {
    return {
        recommendedList: state.data.Recommended,
        biryaniList: state.data.Biryani,
    };
};


export default connect(mapStateToProps)(HorizontalScrollView);




