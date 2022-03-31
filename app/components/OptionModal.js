import { Text, View, StyleSheet, Modal, StatusBar, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import color from '../misc/color';

const OptionModal = ({visible, onClose}) => {
    return <>
    <StatusBar/>
     <Modal animationType='slide' transparent visible={visible}>
        <View style={styles.modal}>
            <Text style={styles.title} numberOfLines={2}>
            Dynamic title of our audio
            Dynamic title of our audioDynamic title of our audioDynamic title of our audio
            Dynamic title of our audio</Text>
            <View style={styles.optionContainer}>
                <Text style={styles.option}>Play</Text>
                <Text style={styles.option}>Add to Playlist</Text>
            </View>
        </View>
        <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalBg}/>
        </TouchableWithoutFeedback>
        
    </Modal>
    </>  
  };


const styles = StyleSheet.create({
    modal: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: color.APP_BG,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        zIndex: 1000,
    },
    optionContainer: {
        padding: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 20,
        paddingBottom: 0,
        color: color.FONT_MEDIUM,
    },
    option:{
        fontSize: 16,
        fontWeight: 'bold',
        color: color.FONT,
        paddingVertical: 10,
        letterSpacing: 1,
    },
    modalBg: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        backgroundColor: color.MODAL_BG
    }
})
export default OptionModal;