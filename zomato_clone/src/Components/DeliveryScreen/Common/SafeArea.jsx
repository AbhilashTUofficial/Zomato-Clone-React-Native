import { Dimensions, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { lightGrey, secondary } from '../../../constants';


const SafeArea = () => {
    return (
        <View
            style={{
                height: 220,
                marginLeft: 16,
                marginTop: 16
            }}>
            <Text
                style={{
                    fontSize: 32,
                    fontWeight: "900",
                    color: lightGrey,
                    letterSpacing: 1,

                }}>Zomato</Text>
        </View>
    );
};

export default SafeArea;