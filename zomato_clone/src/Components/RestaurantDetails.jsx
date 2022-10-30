import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { blue, darkGrey, secondary } from '../constants';
import RattingTag from './RattingTag';


const RestaurantDetails = (props) => {

    //? Data
    const resName = props.restaurant.storeName;
    const backgroundImg = require('../assets/img/fireworks.jpg');
    const clockIcon = require('../assets/icons/clockicon.png');
    const items = props.restaurant.foodTypes;
    const location = props.restaurant.location;
    const ratting = props.restaurant.ratting;
    const travelTime = props.restaurant.travelTime;
    const distance = props.restaurant.distance;

    return (

        <View style={RestaurantDetailsStyle.cont}>

            {/* 
            //? Diwali special background image.
            // <Image source={backgroundImg} style={RestaurantDetailsStyle.img} /> 
            */}

            <View style={RestaurantDetailsStyle.resCont}>

                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

                    <View>

                        <Text style={RestaurantDetailsStyle.resTitle}>{resName}</Text>

                        <Text style={RestaurantDetailsStyle.resText}>{items}</Text>

                        <Text style={[RestaurantDetailsStyle.resText,
                        { color: darkGrey }]}>{location}</Text>

                    </View>

                    <RattingTag type={"md"} ratting={ratting} />

                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false}
                    style={RestaurantDetailsStyle.resDetails}>

                    <Image style={RestaurantDetailsStyle.smIcon} source={clockIcon} />

                    <Text style={RestaurantDetailsStyle.resText}>
                        {travelTime} | </Text>

                    <Text style={RestaurantDetailsStyle.resText}>
                        {distance} away | </Text>

                    <Text style={[RestaurantDetailsStyle.resText, { color: blue }]}>
                        Flat ₹14 delivery charge on orders above ₹99 </Text>

                </ScrollView>

                <CouponsScrollView />

            </View>
        </View>
    );
};

export default RestaurantDetails;


const CouponsScrollView = () => {

    const couponImg = require("../assets/img/coupon.png");

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}>

            <Coupon source={couponImg} />

            <Coupon source={couponImg} />

            <Coupon source={couponImg} />

        </ScrollView>
    );
};

const Coupon = (props) => {

    return (<Image style={RestaurantDetailsStyle.coupon}{...props} />);

};

const RestaurantDetailsStyle = StyleSheet.create({
    cont: {
        width: Dimensions.get('window').width,
        height: 210,
        alignItems: "center",
        backgroundColor: "#F6F5FA",
        // paddingBottom: 6,
    },
    img: {
        height: '100%',
        width: "100%",
        alignSelf: "center",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    resCont: {
        marginTop: 18,
        height: 180,
        marginHorizontal: 12,
        backgroundColor: "white",
        position: "absolute",
        borderRadius: 16,
        paddingHorizontal: 16,
        paddingTop: 8,
        justifyContent: "space-evenly",
        elevation: 0.2,

    },
    resTitle: {
        fontSize: 16,
        fontWeight: "500",
        color: secondary
    },
    resText: {
        fontSize: 12,
        fontWeight: "500",
        color: secondary,
        marginVertical: 2,
    },
    resDetails: {
        marginTop: 2,
        flexDirection: 'row',
    },
    smIcon: {
        width: 16,
        height: 16,
        marginRight: 4,
        marginTop: 2,
    },
    coupon: {
        height: 60,
        width: 210,
        marginRight: 16,
    },
});