import { View } from 'react-native';
import React from 'react';

//? Wrapper wraps all componets on a singular componet.

const Wrapper = ({ children }) => {
    return (
        <View>
            <View
                style={{
                    backgroundColor: "white",
                    height: "100%",
                    width: "100%",
                }}>
                {children}
            </View>

        </View>
    );
};

export default Wrapper;