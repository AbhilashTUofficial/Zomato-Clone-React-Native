import { Dimensions, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Wrapper from '../Components/Common/Wrapper';
import { dark, darkGrey, grey, lightGrey, primary, secondary } from '../constants';
import Divider from 'react-native-divider';

const MoneyScreen = (props) => {
    return (
        <Wrapper>

            <View style={{
                width: Dimensions.get("window").width,
                height: Dimensions.get("window").height,
            }}>
                <Text
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                        alignSelf: "center"
                    }}
                >Money</Text>

            </View>

        </Wrapper>
    );
};

export default MoneyScreen;
