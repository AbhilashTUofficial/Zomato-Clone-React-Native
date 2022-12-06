import { View, Text, Pressable, Modal, StyleSheet, Alert } from 'react-native'
import React from 'react'
import { useState } from 'react';

const PopupModal = () => {
    const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
    <Modal
    
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible)}}>
          <Text>content</Text>
    </Modal>
    <Pressable
      onPress={() => setModalVisible(true)}>
      <Text>Show Modal</Text>
    </Pressable>
  </View>
  )
}

const popupModal=StyleSheet.create({
  cont:{
    width:"100%",
    height:"100%",
    alignItems:"center",
    justifyContent:"center"
  },
  popUpCont:{
    backgroundColor:"green",
    width:"100%",
    height:"100%",
    alignItems:"center",
    justifyContent:"center"
  }
})


export default PopupModal