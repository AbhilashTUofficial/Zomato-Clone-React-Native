import { Dimensions, View } from 'react-native';
import React from 'react';
import Wrapper from '../Components/Common/Wrapper';

const ZomalandScreen = (props) => {
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
                >Zomaland</Text>

            </View>

        </Wrapper>
    );
};

export default ZomalandScreen;
