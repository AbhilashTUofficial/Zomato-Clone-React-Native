import { useState } from "react";
import { FlatList, Image, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { secondary } from "../../constants";
import { connect } from 'react-redux';

const BrouseMenu = ({ currentRestData }) => {
    const dinningIcon = require("../../assets/icons/dinning.png");
    const cnlIcon = require("../../assets/icons/cancel_white.png");
    const divider = require("../../assets/img/fancydivider.png");
    const [clicked, setClick] = useState(false);

    const clickHandler = () => {
        setClick(!clicked);
    };
    const categories = currentRestData.categories;
    return (
        categories.length == 0 ? null : <>

            <Modal
                animationType="slide"
                transparent
                visible={clicked}
                onRequestClose={clickHandler} >

                <Pressable style={BrouseMenuStyles.overlayBackground}
                    onPress={clickHandler} >

                    <View style={BrouseMenuStyles.overlayCard}>

                        <Text style={BrouseMenuStyles.overlayTitle}>Menu</Text>

                        <Image style={BrouseMenuStyles.overlayDiv}
                            source={divider}></Image>

                        <FlatList
                            data={categories}
                            renderItem={(itemData) => {
                                return (
                                    <View style={BrouseMenuStyles.olrow}>
                                        <Text style={BrouseMenuStyles.olrowText}>{itemData.item.title}</Text>
                                        <Text style={BrouseMenuStyles.olrowText}>{itemData.item.items.length}</Text>
                                    </View>
                                );
                            }} />


                    </View>
                </Pressable>

            </Modal>

            <TouchableOpacity activeOpacity={1}
                style={BrouseMenuStyles.overlayBtn}
                onPress={clickHandler}>

                {
                    !clicked ? <Image style={BrouseMenuStyles.dnIcon} source={dinningIcon} /> :
                        <Image style={BrouseMenuStyles.cnlIcon} source={cnlIcon} />
                }

                <Text style={{ color: "white", fontSize: 12, }}>{clicked ? "Close" : "Brouse Menu"}</Text>

            </TouchableOpacity>
        </>
    );
};

const mapStateToProps = state => {
    return {
        currentRestData: state.data.currentRestData,
    };
};

export default connect(mapStateToProps)(BrouseMenu);

const BrouseMenuStyles = StyleSheet.create({
    overlayBtn: {
        height: 48,
        borderRadius: 99,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        flexDirection: "row",
        paddingHorizontal: 16,
    },
    olrow: {
        justifyContent: "space-between",
        flexDirection: "row",
        paddingHorizontal: 16,
        paddingVertical: 4,
    },
    olrowText: {
        fontWeight: '500',
        color: secondary,
        marginVertical: 6,
    },
    overlayCard: {
        backgroundColor: "white",
        elevation: 4,
        borderRadius: 24,
        marginBottom: 16,
        marginHorizontal: 16,
        paddingBottom: 16,
        position: 'absolute',
        left: 16,
        right: 16,
        bottom: 56,

    },
    overlayTitle: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        color: "#2C3875",
        marginTop: 16,
        marginBottom: 6,

    },
    overlayDiv: {
        height: 16,
        width: 200,
        paddingHorizontal: 80,
        alignSelf: "center",
        marginBottom: 8,
    },
    dnIcon: {
        width: 20,
        height: 20,
        marginRight: 4,
        marginTop: 2,
    },
    cnlIcon: {
        width: 16,
        height: 16,
        marginRight: 4,
        marginTop: 2,
    },
    overlayBackground: {
        backgroundColor: "transparent",
        flex: 1,
    }
});