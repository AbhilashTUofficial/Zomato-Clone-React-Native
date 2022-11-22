import { Animated, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { darkGrey, lightGrey, primary, secondary } from '../../constants';
import Divider from 'react-native-divider';
import { useDispatch, useSelector } from 'react-redux';
import { likeItem, addItem, removeItem } from '../../redux/Restaurant/restaurantSlice';


//? CatergoryExpandable shows the items
//? currently available on the reestaurant


const ExpandableView = ({ expanded = false, items, category, restId }) => {
    const [height] = useState(new Animated.Value(0));
    const vegIcon = require('../../assets/icons/vegicon.png');
    const nonVegIcon = require('../../assets/icons/nonvegicon.png');


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

                                        <FavBtn faved={item.faved} itemId={item.itemId} category={category} restId={restId} />

                                    </View>

                                    <View style={expViewStyles.expRight}>

                                        <Image source={item.itemImg} style={expViewStyles.expItemImg} />

                                        <AddBtn onCart={item.onCart} itemId={item.itemId} category={category} restId={restId} />

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




const FavBtn = ({ faved, itemId, category, restId }) => {

    //? Icons
    const favIcon = require('../../assets/icons/heart_active.png');
    const notFavIcon = require('../../assets/icons/heart_inactive.png');

    const dispatch = useDispatch();
    const [isFaved, setFaved] = useState(faved);
    const likeHandler = () => {
        dispatch(likeItem({ itemId, category, restId }));
        setFaved(!isFaved);
    };


    return (
        <TouchableOpacity activeOpacity={0.6} style={expViewStyles.favBtn}
            onPress={likeHandler} >

            <Image source={isFaved ? favIcon : notFavIcon} style={expViewStyles.favIcon} />

        </TouchableOpacity>
    );
};



const AddBtn = ({ onCart, itemId, category, restId }) => {
    const dispatch = useDispatch();

    const [itemCount, setItemCount] = useState(onCart);

    const addItemHandler = () => {
        dispatch(addItem({ itemId, category, restId }));
        setItemCount(itemCount + 1);
    };

    const removeItemHandler = () => {
        dispatch(removeItem({ itemId, category, restId }));

        setItemCount(itemCount - 1);

    };


    return (
        itemCount == 0 ?
            <TouchableOpacity activeOpacity={1}
                onPress={addItemHandler}
                style={expViewStyles.addBtn0}>
                <Text style={{
                    alignSelf: "center",
                    fontWeight: 'bold',
                    color: primary,
                    fontSize: 16
                }}>ADD</Text>

                <Text style={{
                    color: primary,
                    position: "absolute",
                    fontSize: 20,
                    fontWeight: "400",
                    top: -4,
                    right: 4,
                }}>+</Text>

            </TouchableOpacity>
            : <View style={expViewStyles.addBtn}>
                <TouchableOpacity style={expViewStyles.iBtn}
                    onPress={removeItemHandler}>
                    <Text style={{
                        alignSelf: "center",
                        fontWeight: '"400',
                        color: "white",
                        fontSize: 24,
                    }}>-</Text>
                </TouchableOpacity>

                <Text style={{
                    alignSelf: "center",
                    fontWeight: '"400',
                    color: "white",
                    fontSize: 14,
                }}>{itemCount}</Text>

                <TouchableOpacity style={expViewStyles.iBtn}
                    onPress={addItemHandler}>
                    <Text style={{
                        alignSelf: "center",
                        fontWeight: '"400',
                        color: "white",
                        fontSize: 18,
                    }}>+</Text>
                </TouchableOpacity>
            </View>
    );
};


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
    favBtn: {
        width: 32,
        height: 32,
        padding: 6,
        borderRadius: 99,
        backgroundColor: "white",
        alignItems: "center",
        borderColor: darkGrey,
        borderWidth: 0.4,
        margin: 6,
    },
    favIcon: {
        height: '100%',
        width: "100%",
        alignSelf: "center",
        justifyContent: "center"
    },
    addBtn0: {
        margin: 2,
        backgroundColor: "#FFF7FA",
        height: 38,
        width: 116,
        borderWidth: 0.6,
        borderColor: primary,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: -16,
    },
    addBtn: {
        margin: 2,
        backgroundColor: primary,
        height: 38,
        width: 116,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "space-between",
        position: "absolute",
        bottom: -16,
        flexDirection: "row",
    },
    iBtn: {
        width: 30,
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
});