import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import { Entypo } from '@expo/vector-icons';
import color from '../misc/color';

const AudioListItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}> 

            <View style={styles.thumbnail}>
                <Text style={styles.thumbnailText}>A</Text>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Title</Text>
            </View>

      </View>

      <View style={styles.rightContainer}> 
        <Entypo name="dots-three-vertical" size={24} color={color.FONT_MEDIUM} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {}
})

export default AudioListItem;