import { Text, View, StyleSheet, Modal, StatusBar } from 'react-native'
import React from 'react'
import color from '../misc/color';

const OptionModal = ({visible}) => {
    return <>
    <StatusBar/>
     <Modal visible={visible}>
        <View style={styles.modal}>
            <Text style={styles.title}>Dynamic title of our audio</Text>
            <View style={styles.optionContainer}>
                <Text style={styles.option}>Play</Text>
                <Text style={styles.option}>Add to Playlist</Text>
            </View>
        </View>
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
    }
})
export default OptionModal;