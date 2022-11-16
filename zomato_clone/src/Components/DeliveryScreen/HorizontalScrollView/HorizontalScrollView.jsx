import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { connect } from 'react-redux';

import ElongatedCard from './ElongatedCard';
import Heading from '../Common/Heading';

//? A horinontal scroll view which can display restaurants 
//? as a elevated card.
const HorizontalScrollView = ({ recommendedList, biryaniList, newData }) => {
    // console.log(newData);
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

                        return (
                            <ElongatedCard

                                restId={i.id}
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

                        return (
                            <ElongatedCard
                                restId={i.id}
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
        newData: state.data.newData,
    };
};


export default connect(mapStateToProps)(HorizontalScrollView);




