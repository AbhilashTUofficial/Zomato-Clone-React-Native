import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { lightGrey, secondary } from '../../constants';


//? Veg / NonVeg toggle
const VegNonVeg = ({ restaurant }) => {

    const [vegSelected, setVeg] = useState(false);
    const [nonVegSelected, setNonVeg] = useState(false);

    const havVeg = restaurant.veg;
    const havNonVeg = restaurant.nonveg;


    const vegIcon = require('../../assets/icons/vegicon.png');
    const cnlIcon = require('../../assets/icons/cancel.png');
    const nonVegIcon = require('../../assets/icons/nonvegicon.png');

    return (

        <View style={VegNonVegStyle.cont}>

            {/* 
            //! defualt style: VegNoVegStyle.btn
            //! button width adjustment: vegSelected ? 78 : 66,
            //! If button is toggled: VegNonVegStyle.btnSelected 
            */}

            {/* VEG */}

            {

                havVeg && <TouchableOpacity activeOpacity={0.8}
                    style={[VegNonVegStyle.btn,
                    { width: vegSelected ? 78 : 66, },
                    vegSelected ? VegNonVegStyle.btnSelected : {}]}
                    onPress={() => { setVeg(!vegSelected); }}>

                    <Image source={vegIcon} style={VegNonVegStyle.icon} />

                    <Text style={{ color: secondary }}>Veg</Text>

                    {
                        vegSelected ? <Image source={cnlIcon} style={VegNonVegStyle.cnlIcon} /> : null
                    }

                </TouchableOpacity>
            }

            {/* NON-VEG */}
            {

                havNonVeg && <TouchableOpacity activeOpacity={0.8}
                    style={[
                        VegNonVegStyle.btn,
                        { width: nonVegSelected ? 104 : 92, },
                        nonVegSelected ? VegNonVegStyle.btnSelected : {}
                    ]}

                    onPress={() => { setNonVeg(!nonVegSelected); }}>

                    <Image source={nonVegIcon} style={VegNonVegStyle.icon} />

                    <Text style={{ color: secondary }}>Non-veg</Text>

                    {
                        nonVegSelected ? <Image source={cnlIcon} style={VegNonVegStyle.cnlIcon} /> : null
                    }

                </TouchableOpacity>
            }

        </View>
    );
};


export default VegNonVeg;

const VegNonVegStyle = StyleSheet.create({
    cont: {
        backgroundColor: "#F6F5FA",
        height: 56,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: 'row'
    },
    btn: {
        height: 32,
        marginLeft: 16,
        marginBottom: 12,
        marginTop: 2,
        elevation: 3,
        borderRadius: 6,
        shadowColor: secondary,
        shadowOffset: { height: 4, width: 4 },
        shadowOpacity: 1,
        shadowRadius: 1,
        paddingHorizontal: 8,
        paddingVertical: 2,
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 0.6,
        borderColor: lightGrey,
    },
    icon: {
        height: 22,
        width: 22,
        marginRight: 2,
        alignSelf: "center",
    },
    cnlIcon: {
        height: 14,
        width: 12,
        marginLeft: 2,
        marginTop: 2,
        alignSelf: "center",
    },
    btnSelected: {
        borderColor: "#E9A1AA",
        backgroundColor: "#FFF6F7",
    }
});