import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { secondary } from '../../constants';
import { connect } from 'react-redux';
import ExpandableView from './ExpandableView';

//? CatergoryExpandable shows the items
//? currently available on the reestaurant


const CatergoryExpandable = ({ restId, restaurants }) => {

    const dropdownIcon1 = require('../../assets/icons/dropdown3.png');
    const dropdownIcon2 = require('../../assets/icons/dropdown3.1.png');

    var categories;

    restaurants.map((restaurant) => {
        if (restaurant.id === restId) {
            categories = restaurant.categories;
        }
    });

    return (
        <View style={CatExpand.cont}>
            {

                categories.map((category, i) => {

                    const [isExpanded, setIsExpanded] = useState(false);
                    const title = category.title;
                    const itemNo = category.items.length;
                    return (
                        <View key={i}>
                            <TouchableOpacity activeOpacity={1}
                                style={CatExpand.tile}
                                onPress={() => { setIsExpanded(!isExpanded); }}>

                                <Text style={CatExpand.title} >
                                    {title} ({itemNo})</Text>

                                <Image source={isExpanded ? dropdownIcon1 : dropdownIcon2}
                                    style={CatExpand.ddIcon} />

                            </TouchableOpacity>

                            <ExpandableView
                                expanded={isExpanded}
                                items={category.items}
                                category={title}
                                restId={restId} />
                        </View>
                    );
                })
            }
        </View>
    );
};

const mapStateToProps = state => {
    return {
        restaurants: state.data.Restaurants,
    };
};

export default connect(mapStateToProps)(CatergoryExpandable);



const CatExpand = StyleSheet.create({
    cont: {
        borderTopRightRadius: 24,
        borderTopLeftRadius: 24,
        overflow: "hidden",
        elevation: 2,
    },
    tile: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingVertical: 22,
        backgroundColor: "white",
    },
    title: {
        color: secondary,
        fontSize: 18,
        fontWeight: "500"
    },


    ddIcon: {
        height: 18,
        width: 18,
        marginRight: 2,
        alignSelf: "center",
    },

});