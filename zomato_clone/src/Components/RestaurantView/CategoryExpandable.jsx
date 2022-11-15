import { Animated, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { darkGrey, lightGrey, primary, secondary } from '../../constants';
import Divider from 'react-native-divider';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { likeItem } from '../../redux/Restaurant/restaurant-actions';

//? CatergoryExpandable shows the items
//? currently available on the reestaurant


const CatergoryExpandable = ({ likeItem, restId, restaurants }) => {

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

                categories.map((category) => {
                    const [isExpanded, setIsExpanded] = useState(false);
                    const title = category.title;
                    const itemNo = category.items.length;
                    return (
                        <>
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
                                likeHandler={likeItem}
                                restId={restId} />
                        </>
                    );
                })
            }
        </View>
    );
};
const mapDispatchToProps = dispatch => {
    return {
        likeItem: (id, itemName, category) => dispatch(likeItem(id, itemName, category)),
    };
};
const mapStateToProps = state => {
    return {
        restaurants: state.data.Restaurants,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CatergoryExpandable);



const ExpandableView = ({ expanded = false, items, category, likeHandler, restId }) => {

    const [height] = useState(new Animated.Value(0));
    const vegIcon = require('../../assets/icons/vegicon.png');
    const nonVegIcon = require('../../assets/icons/nonvegicon.png');

    useEffect(() => {
        Animated.timing(height, {
            toValue: !expanded ? 140 : 0,
            duration: 100,
            useNativeDriver: false
        }).start();
    }, [expanded, height]);
    return (
        <Animated.View
            style={CatExpand.expTile}>
            {
                //! Loop through items list and return each item onto the 
                //! the category ExpandableView
                !expanded ?
                    items.map((item) => {

                        return (
                            <>
                                <View style={CatExpand.expView} key={items.indexOf(item)}>

                                    <View style={CatExpand.expLeft}>

                                        <View style={CatExpand.itemTags}>
                                            {
                                                item.veg ? <Image source={vegIcon} style={CatExpand.icon} /> : <Image source={nonVegIcon} style={CatExpand.icon} />
                                            }

                                            {
                                                item.bestseller ? <Text style={CatExpand.bestseller}> Bestseller</Text> : null
                                            }

                                        </View>

                                        <Text style={CatExpand.subtitle}>
                                            {item.itemTitle}
                                        </Text>

                                        <Text style={CatExpand.subtitle}>
                                            {item.itemPrice}
                                        </Text>

                                        <Text style={CatExpand.description}>
                                            {item.itemDescription}
                                        </Text>

                                        <FavBtn item={item} category={category} likeHandler={likeHandler} id={restId} />

                                    </View>

                                    <View style={CatExpand.expRight}>

                                        <Image source={item.itemImg} style={CatExpand.expItemImg} />

                                        <AddBtn itemName={item.itemTitle} category={category} />

                                    </View>
                                </View>

                                {/* //TODO: Solve this divider problem */}
                                <View style={{ paddingHorizontal: 24 }} >
                                    <Divider borderColor={lightGrey} dashed />
                                </View>

                            </>

                        );
                    }) : null
            }


        </Animated.View>
    );
};

const FavBtn = ({ item, category, likeHandler, id }) => {

    //? Icons
    const favIcon = require('../../assets/icons/heart_active.png');
    const notFavIcon = require('../../assets/icons/heart_inactive.png');

    const itemName = item.itemTitle;
    const [isFaved, setFaved] = useState(item.isFaved);

    const handler = () => {
        // likeHandler(id, itemName, category);
        likeItem(id, itemName, category);
        setFaved(!isFaved);
    };


    //! Dont put hooks inside loops
    //! It will create multiple hooks states, and cause trouble while 
    //! returning it. (Uncaught Error: Rendered fewer hooks than expected.)

    return (
        <TouchableOpacity activeOpacity={0.6} style={CatExpand.favBtn}
            onPress={handler} >

            <Image source={isFaved ? favIcon : notFavIcon} style={CatExpand.favIcon} />

        </TouchableOpacity>
    );
};



const AddBtn = ({ itemName, category }) => {
    const categories = useSelector(obj => obj.items);

    const dispatch = useDispatch();

    const addItemHandler = () => {
        console.log(categories);

        dispatch(addItem(itemName, category));

    };

    const removeItemHandler = () => {
        dispatch(removeItem(itemName, category));
    };
    const [itemCount, setItemCount] = useState(0);


    return (
        itemCount == 0 ?
            <TouchableOpacity activeOpacity={1}
                onPress={addItemHandler}
                style={CatExpand.addBtn0}>
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
            : <View style={CatExpand.addBtn}>
                <TouchableOpacity style={CatExpand.iBtn}
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

                <TouchableOpacity style={CatExpand.iBtn}
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
    ddIcon: {
        height: 18,
        width: 18,
        marginRight: 2,
        alignSelf: "center",
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
        marginBottom: 8,
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