import { Animated, Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { darkGrey, lightGrey, primary, secondary } from '../../../constants';
import Divider from 'react-native-divider';
import AddItemBtn from './AddItemBtn';
import FavItemBtn from './FavItemBtn';


//? CatergoryExpandable shows the items
//? currently available on the reestaurant

const ExpandableView = ({ expanded = false, items, category, restId }) => {
    const [height] = useState(new Animated.Value(0));
    const vegIcon = require('../../../assets/icons/vegicon.png');
    const nonVegIcon = require('../../../assets/icons/nonvegicon.png');


    //TODO: need a way to manage this state problem.


    useEffect(() => {
        Animated.timing(height, {
            toValue: !expanded ? 140 : 0,
            duration: 100,
            useNativeDriver: false
        }).start();
    }, [expanded, height]);


    return (
        <Animated.View
            style={expViewStyles.expTile}>
            {
                //! Loop through items list and return each item onto the 
                //! the category ExpandableView
                !expanded ?
                    items.map((item, i) => {
                        return (
                            <View key={i}>
                                <View style={expViewStyles.expView}>

                                    <View style={expViewStyles.expLeft}>

                                        <View style={expViewStyles.itemTags}>
                                            {
                                                item.veg ? <Image source={vegIcon} style={expViewStyles.icon} /> : <Image source={nonVegIcon} style={expViewStyles.icon} />
                                            }

                                            {
                                                item.bestseller ? <Text style={expViewStyles.bestseller}> Bestseller</Text> : null
                                            }

                                        </View>

                                        <Text style={expViewStyles.subtitle}>
                                            {item.itemTitle}
                                        </Text>

                                        <Text style={expViewStyles.subtitle}>
                                            {item.itemPrice}
                                        </Text>

                                        <Text style={expViewStyles.description}>
                                            {item.itemDescription}
                                        </Text>

                                        <FavItemBtn faved={item.faved} itemId={item.itemId} category={category} restId={restId} />

                                    </View>

                                    <View style={expViewStyles.expRight}>

                                        <Image source={item.itemImg} style={expViewStyles.expItemImg} />

                                        <AddItemBtn onCart={item.onCart} itemId={item.itemId} category={category} restId={restId} />

                                    </View>
                                </View>

                                {/* //TODO: Solve this divider problem */}
                                <View style={{ paddingHorizontal: 24 }} >
                                    <Divider borderColor={lightGrey} dashed />
                                </View>

                            </View>

                        );
                    }) : null
            }


        </Animated.View>
    );
};


export default ExpandableView;


const expViewStyles = StyleSheet.create({

    subtitle: {
        color: secondary,
        fontSize: 16,
        fontWeight: "500",
        marginVertical: 2,
    },
    description: {
        color: darkGrey,
        fontSize: 12,
        fontWeight: "500",
        marginVertical: 2,
    },
    expTile: {
        backgroundColor: "white",
        borderColor: "transparent",
        borderBottomColor: lightGrey,
        borderWidth: 1,
    },
    expView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginTop: 4,
        marginHorizontal: 16,
        marginBottom: 16,
    },
    expLeft: {
        flex: 4,
        justifyContent: "flex-start",

    },
    expRight: {
        flex: 3,
        alignItems: "center",
        justifyContent: "center",
    },
    expItemImg: {
        width: 152,
        height: 152,
        alignSelf: "center",
        borderRadius: 16,
    },
    itemTags: {
        flexDirection: 'row'
    },
    icon: {
        height: 24,
        width: 24,
        marginRight: 2,
        alignSelf: "center",
        marginVertical: 4,
    },
    bestseller: {
        alignSelf: "center",
        backgroundColor: "#E86C37",
        fontSize: 12,
        color: "white",
        borderRadius: 2,
        padding: 1,
    },
});