import { Text, View } from 'react-native';
import React from 'react';
import { secondary } from '../../../constants';


const Heading = ({ label }) => {
    return (
        <View
            style={{
                paddingHorizontal: 12,
                paddingVertical: 6,
                marginTop: 12
            }}>
            <Text
                style={{
                    fontSize: 20,
                    color: secondary,
                    fontWeight: "bold",

                }}>
                {label}
            </Text>
        </View>
    );
};

export default Heading;


