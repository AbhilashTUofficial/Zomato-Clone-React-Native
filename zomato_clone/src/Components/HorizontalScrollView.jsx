import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { secondary } from '../screens/common_styles';
import { useNavigation } from '@react-navigation/native';
import RattingTag from './RattingTag';


//? A horinontal scroll view which can display restaurants 
//? as a elevated card.
const HorizontalScrollView = ({ recommendedList, biryaniList, cat }) => {
    if (cat === "recommended") {
        list = recommendedList;
    } else if (cat === "biryani") {
        list = biryaniList;

    }

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

                    recommendedList.map((i) => {

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


const ElongatedCard = (props) => {

    //? Icons
    const favIcon = require('../assets/icons/heart_active.png');
    const notFavIcon = require('../assets/icons/heart_inactive.png');
    const clockIcon = require('../assets/icons/clockicon.png');
    const rupeeIcon = require('../assets/icons/rupeeicon.png');

    const navigation = useNavigation();
    const [faved, setFav] = useState(false);
    const img = props.restaurant.img;
    const resName = props.restaurant.storeName;
    const ratting = props.restaurant.ratting;
    const travelTime = props.restaurant.travelTime;
    const distance = props.restaurant.distance;
    const cost = props.restaurant.cost;
    const items = props.restaurant.items;

    return (

        <TouchableOpacity activeOpacity={0.8} style={ElongatedCardStyles.card}
            onPress={() => navigation.navigate("restaurantscreen", props.restaurant)}>

            {/*//? Header part of the componet */}

            <View style={ElongatedCardStyles.header}>

                <Image source={img} style={ElongatedCardStyles.img} />

                {/*//! display favIcon if faved is true else display notFavIcon  */}
                <TouchableOpacity activeOpacity={0.6} style={ElongatedCardStyles.favBtn}
                    onPress={() => { setFav(!faved); }} >

                    <Image source={faved ? favIcon : notFavIcon} style={ElongatedCardStyles.favIcon} />

                </TouchableOpacity>

            </View>

            {/* //? body part of the component */}

            <View style={ElongatedCardStyles.body}>

                <View style={ElongatedCardStyles.titleCont}>

                    <Text style={ElongatedCardStyles.titleText}>
                        {resName}</Text>

                    <RattingTag ratting={ratting} type={"sm"} />

                </View>

                {/* //? Details part of the component */}

                <View style={ElongatedCardStyles.resDetails}>

                    <View style={{ flexDirection: 'row', alignItems: "center" }}>

                        <Image style={ElongatedCardStyles.smIcon} source={clockIcon} />

                        <Text style={ElongatedCardStyles.resText}>
                            {travelTime} </Text>

                        <Text style={ElongatedCardStyles.resText}>
                            . {distance}</Text>

                    </View>

                    <View style={{ flexDirection: 'row', alignItems: "center" }}>

                        <Image style={ElongatedCardStyles.smIcon} source={rupeeIcon} />

                        <Text style={ElongatedCardStyles.resText}>
                            {cost}</Text>

                    </View>

                    <Text style={ElongatedCardStyles.resText}>
                        {items}</Text>

                </View>

            </View>

        </TouchableOpacity >
    );
};

const ElongatedCardStyles = StyleSheet.create({
    card: {
        alignItems: 'center',
        height: 250,
        width: 154,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 12,
        marginVertical: 6,
        borderRadius: 18,
        backgroundColor: "white",
        elevation: 4,
        borderRadius: 12,
        shadowColor: secondary,
        shadowOffset: { height: 3, width: 3 },
        shadowOpacity: 1,
        shadowRadius: 1,
    },
    header: {
        alignItems: 'center',
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    img: {
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
        height: '100%',
        width: "100%",
        alignSelf: "center",
    },
    favBtn: {
        width: 24,
        height: 24,
        padding: 4,
        borderRadius: 99,
        backgroundColor: "white",
        position: "absolute",
        alignItems: "center",
        top: 6,
        right: 6
    },
    favIcon: {
        height: '100%',
        width: "100%",
        alignSelf: "center",
    },
    body: {
        flex: 1,
        width: "100%",
        alignItems: "flex-start",
        paddingTop: 6,
        paddingLeft: 6,
        paddingRight: 6,
    },
    titleCont: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%"
    },
    titleText: {
        color: secondary,
        fontWeight: "500",
        marginVertical: 2,
    },
    resDetails: {
        marginVertical: 2,
        marginHorizontal: 2,
        height: "50%",
    },
    resText: {
        fontWeight: "400",
        marginVertical: 2,
        fontSize: 14,
    },
    smIcon: {
        width: 16,
        height: 16,
        marginRight: 4,
    }
});
