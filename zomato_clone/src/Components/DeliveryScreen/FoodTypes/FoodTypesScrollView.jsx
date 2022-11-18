import { FlatList, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { secondary } from '../../../constants';
import { foodTypes } from '../../../model/FoodTypesList';


const FoodTypesScrollView = () => {

    const [items, setItems] = useState(foodTypes);

    return (

        <FlatList style={foodTypesStyles.cont}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={items}
            renderItem={(itemData) => {
                return (<CircularCard foodType={itemData.item} />);
            }} />
    );
};

export default FoodTypesScrollView;


//? Circular component
const CircularCard = ({ foodType }) => {
    return (

        <TouchableOpacity activeOpacity={0.8} style={foodTypesStyles.cirAvt}>

            <Image
                source={foodType.img}
                style={foodTypesStyles.img} />

            <Text style={foodTypesStyles.text}>
                {foodType.text}</Text>

        </TouchableOpacity>
    );

};

const foodTypesStyles = StyleSheet.create({
    cont: {
        width: "100%",
        paddingVertical: 6
    },
    cirAvt: {
        marginLeft: 12,
        alignItems: "center",
        alignItems: 'center',
        marginLeft: 12,
        marginRight: 10,
        marginVertical: 12,
        height: 90,
        width: 72,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 99,
    },
    img: {
        height: 72,
        width: 72,
        alignSelf: "center",
        marginVertical: 12
    },
    text: {
        fontWeight: '500',
        color: secondary
    },

})

