import { Animated, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { darkGrey, lightGrey, primary, secondary } from '../constants';
import Divider from 'react-native-divider';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, favItem, setData } from '../redux/actions/itemActions';

//? CatergoryExpandable shows the items
//? currently available on the reestaurant


const CatergoryExpandable = (props) => {



    _setData(props.restaurantName);

    const categories = useSelector(obj => obj.items);
    // console.log(categories);


    return (
        <View style={CatExpand.cont}>
            {

                categories.map((category) => {
                    return (
                        <ItemView category={category} />
                    );
                })
                // props.categories.map((category) => {
                //     return (
                //         <ItemView category={category} />
                //     );
                // })
            }
        </View>
    );
};

export default CatergoryExpandable;


function _setData(restaurantName) {
    const dispatch = useDispatch();

    dispatch(setData(restaurantName));

}

const ItemView = (props) => {

    const [isExpanded, setIsExpanded] = useState(false);
    const title = props.category.title;
    const itemNo = props.category.items.length;
    const dropdownIcon1 = require('../assets/icons/dropdown3.png');
    const dropdownIcon2 = require('../assets/icons/dropdown3.1.png');

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

            <ExpandableView expanded={isExpanded}
                items={props.category.items} category={title} />
        </>
    );
};


const ExpandableView = ({ expanded = false, items, category }) => {

    const [height] = useState(new Animated.Value(0));
    const vegIcon = require('../assets/icons/vegicon.png');
    const nonVegIcon = require('../assets/icons/nonvegicon.png');

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
                    items.map((i) => {
                        return (
                            <>
                                <View style={CatExpand.expView} key={items.indexOf(i)}>

                                    <View style={CatExpand.expLeft}>

                                        <View style={CatExpand.itemTags}>
                                            {
                                                i.veg ? <Image source={vegIcon} style={CatExpand.icon} /> : <Image source={nonVegIcon} style={CatExpand.icon} />
                                            }

                                            {
                                                i.bestseller ? <Text style={CatExpand.bestseller}> Bestseller</Text> : null
                                            }

                                        </View>

                                        <Text style={CatExpand.subtitle}>
                                            {i.itemTitle}
                                        </Text>

                                        <Text style={CatExpand.subtitle}>
                                            {i.itemPrice}
                                        </Text>

                                        <Text style={CatExpand.description}>
                                            {i.itemDescription}
                                        </Text>

                                        <FavBtn itemName={i.itemTitle} category={category} isFaved={i.faved} />

                                    </View>

                                    <View style={CatExpand.expRight}>

                                        <Image source={i.itemImg} style={CatExpand.expItemImg} />

                                        <AddBtn itemName={i.itemTitle} category={category} />

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

const FavBtn = ({ itemName, category, isFaved }) => {

    //? Icons
    const favIcon = require('../assets/icons/heart_active.png');
    const notFavIcon = require('../assets/icons/heart_inactive.png');

    const dispatch = useDispatch();

    const favItemHandler = (itemName, category) => {
        dispatch(favItem(itemName, category));
    };
    //! Dont put hooks inside loops
    //! It will create multiple hooks states, and cause trouble while 
    //! returning it. (Uncaught Error: Rendered fewer hooks than expected.)

    return (
        <TouchableOpacity activeOpacity={0.6} style={CatExpand.favBtn}
            onPress={() => favItemHandler(itemName, category)} >

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