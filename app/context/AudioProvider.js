import { Text, View } from 'react-native'
import React, { Component } from 'react'
import * as MediaLibrary from 'expo-media-library';


export class AudioProvider extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        // get permission from the user to read audio files
        getPermission()
    }
  render() {
    return (
      <View>
        <Text>AudioProvider</Text>
      </View>
    )
  }
}

export default AudioProvider