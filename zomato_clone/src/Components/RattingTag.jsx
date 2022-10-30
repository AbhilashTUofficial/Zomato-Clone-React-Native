import { Image, StyleSheet, Text, View } from "react-native";
import { lightGrey } from "../constants";



const RattingTag = (props) => {

    //? ratting colors on ratting tag.
    //? white : 0 ★
    //? red   : 1 ★
    //? tomato: 2 ★
    //? gold  : 3 ★
    //? green : 4 ★
    //? green : 5 ★
    const rattingColors = [
        "white",
        "red",
        "tomato",
        "gold",
        "#24963F",
        "#24963F",
    ];
    const ratting = props.ratting;
    var rate = props.ratting.substring(0, 1);
    const rattingIcon = require('../assets/icons/star.png');


    return (
        props.type === "sm" ?
            <View style={[RattingTagStyles.smCont,
            { backgroundColor: rattingColors[rate] }]} >

                <View style={RattingTagStyles.smTag}>

                    <Text style={RattingTagStyles.smText}>
                        {ratting}</Text>

                    <Image source={rattingIcon}
                        style={RattingTagStyles.smIcon} />

                </View>

            </View> :
            <View style={RattingTagStyles.mdCont}>

                <View style={{ flex: 1, backgroundColor: rattingColors[rate] }}>

                    <View style={RattingTagStyles.mdRattCont}>

                        <Text style={RattingTagStyles.mdText}>{ratting} </Text>

                        <Image source={rattingIcon} style={RattingTagStyles.mdIcon} />

                    </View>

                </View>

                <View style={{ flex: 1, backgroundColor: "white" }}>

                    <View style={RattingTagStyles.mdRevCont}>

                        <Text style={RattingTagStyles.mdRevNo}>52</Text>
                        <Text style={{ fontSize: 10, fontWeight: "bold" }}>
                            Reviews</Text>

                    </View>

                </View>

            </View>
    );
};

export default RattingTag;

//? Styles

const RattingTagStyles = StyleSheet.create({
    smCont: {
        height: 16,
        width: 34,
        borderRadius: 4,
        alignItems: "center"
    },
    smText: {
        fontSize: 12,
        fontWeight: "bold",
        color: "white",
    },
    smTag: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-evenly",
        width: "100%"
    },
    smIcon: {
        width: 10,
        height: 10,
        alignSelf: "center",
    },

    mdCont: {
        width: 60,
        height: 60,
        borderRadius: 12,
        borderColor: lightGrey,
        borderWidth: 1,
        overflow: 'hidden'
    },
    mdRattCont: {
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        flexDirection: 'row'
    },
    mdText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    },
    mdIcon: {
        width: 14,
        height: 14,
        alignSelf: "center",
    },
    mdRevCont: {
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
    },
    mdRevNo: {
        fontSize: 12,
        fontWeight: "bold"
    },

});