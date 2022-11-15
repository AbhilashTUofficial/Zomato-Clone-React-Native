import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { lightGrey, secondary } from '../../../constants';

const StickyHeader = () => {
    return (
        <View style={{ backgroundColor: "white" }}>

            <SearchBar />

            <CategoryTabs />

        </View>
    );
};

export default StickyHeader;

const searchIcon = require('../../../assets/icons/search.png');
const micIcon = require('../../../assets/icons/mic.png');

//? Search bar
const SearchBar = () => {
    return (
        <View style={SearchBarStyles.container}>

            <View style={SearchBarStyles.contAlgnment}>

                <Image source={searchIcon}
                    style={SearchBarStyles.searchIcon} />


                <TextInput style={{ marginHorizontal: 8, }}
                    placeholder={"Restaurant name or a dish name"}>
                </TextInput>

            </View >

            <View style={SearchBarStyles.contAlgnment}>

                <View style={SearchBarStyles.vDiv} />

                <Image source={micIcon}
                    style={SearchBarStyles.micIcon} />

            </View>

        </View>
    );
};

//? Category tabs
const CategoryTabs = () => {
    components = [

        <Tab label={"Sort"} trailing={true} leading={true} />,

        <Tab label={"Fast Delivery"} />,

        <Tab label={"Rating 4.0+"} />,

        <Tab label={"Cuisines"} trailing={true} />,

        <Tab label={"More"} trailing={true} />,
    ];

    return (

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
                components.map((component, i = 0) => {
                    i++;
                    return (
                        <View key={i}>
                            {component}
                        </View>
                    );
                })
            }
        </ScrollView>
    );
};

const Tab = ({ leading, label, trailing }) => {
    return (

        <TouchableOpacity
            activeOpacity={0.8}
            style={CategoryTabStyles.tabCont}>

            {
                leading ? <Image source={require('../../../assets/icons/sort.png')}
                    style={CategoryTabStyles.tabIcon} />
                    : null
            }

            <Text style={{ color: secondary }}>{label}</Text>

            {
                trailing ?
                    <Image
                        source={require('../../../assets/icons/dropdown3.png')}
                        style={CategoryTabStyles.tabIcon} /> : null
            }
        </TouchableOpacity>
    );
};

//? Styles
const SearchBarStyles = StyleSheet.create({
    container: {
        height: 46,
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 12,
        flexDirection: "row",
        borderWidth: 1,
        borderRadius: 12,
        borderColor: lightGrey,
        backgroundColor: "#F6F6F6",
        marginVertical: 12,
        marginHorizontal: 12,
    },
    contAlgnment: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchIcon: {
        width: 22,
        height: 22,
        alignSelf: "center",
    },
    vDiv: {
        backgroundColor: lightGrey,
        width: 2,
        height: 28,
        marginHorizontal: 12
    },
    micIcon: {
        width: 22,
        height: 22,
        alignSelf: "center",
    },

});
const CategoryTabStyles = StyleSheet.create({
    tabCont: {
        height: 34,
        marginLeft: 12,
        marginBottom: 12,
        marginTop: 2,
        elevation: 3,
        borderRadius: 8,
        shadowColor: secondary,
        shadowOffset: { height: 4, width: 4 },
        shadowOpacity: 1,
        shadowRadius: 1,
        paddingHorizontal: 12,
        paddingVertical: 2,
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center"
    },
    tabIcon: {
        height: 12,
        width: 12,
        marginHorizontal: 4,
        alignSelf: "center",
    },
});