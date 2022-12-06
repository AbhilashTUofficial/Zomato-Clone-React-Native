import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { primary } from "../../../constants";
import { addItem, removeItem } from "../../../redux/Restaurant/restaurantSlice";

const AddItemBtn = ({ onCart, itemId, category, restId }) => {
    const dispatch = useDispatch();

    const [itemCount, setItemCount] = useState(onCart);

    const addItemHandler = () => {
        dispatch(addItem({ itemId, category, restId }));
        setItemCount(itemCount + 1);
    };

    const removeItemHandler = () => {
        dispatch(removeItem({ itemId, category, restId }));

        setItemCount(itemCount - 1);

    };


    return (
        itemCount == 0 ?
            <TouchableOpacity activeOpacity={1}
                onPress={addItemHandler}
                style={addItemBtnStyle.addBtn0}>
                <Text style={{
                    alignSelf: "center",
                    fontWeight: 'bold',
                    color: primary,
                    fontSize: 16
                }}>ADD</Text>

                <Text style={{
                    color: primary,
                    position: "absolute",
                    fontSize: 20,
                    fontWeight: "400",
                    top: -4,
                    right: 4,
                }}>+</Text>

            </TouchableOpacity>
            : <View style={addItemBtnStyle.addBtn}>
                <TouchableOpacity style={addItemBtnStyle.iBtn}
                    onPress={removeItemHandler}>
                    <Text style={{
                        alignSelf: "center",
                        fontWeight: '"400',
                        color: "white",
                        fontSize: 24,
                    }}>-</Text>
                </TouchableOpacity>

                <Text style={{
                    alignSelf: "center",
                    fontWeight: '"400',
                    color: "white",
                    fontSize: 14,
                }}>{itemCount}</Text>

                <TouchableOpacity style={addItemBtnStyle.iBtn}
                    onPress={addItemHandler}>
                    <Text style={{
                        alignSelf: "center",
                        fontWeight: '"400',
                        color: "white",
                        fontSize: 18,
                    }}>+</Text>
                </TouchableOpacity>
            </View>
    );
};


export default AddItemBtn;

const addItemBtnStyle=StyleSheet.create({
    addBtn0: {
        margin: 2,
        backgroundColor: "#FFF7FA",
        height: 38,
        width: 116,
        borderWidth: 0.6,
        borderColor: primary,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: -16,
    },
    addBtn: {
        margin: 2,
        backgroundColor: primary,
        height: 38,
        width: 116,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "space-between",
        position: "absolute",
        bottom: -16,
        flexDirection: "row",
    },
    iBtn: {
        width: 30,
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
})