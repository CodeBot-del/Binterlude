import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const AudioListItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}> 

            <View style={styles.thumbnail}>
                <Text>A</Text>
            </View>


      </View>

      <View style={styles.rightContainer}> </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {}
})

export default AudioListItem;