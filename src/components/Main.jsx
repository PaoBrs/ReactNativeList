import React from 'react'
import { View, Text, ScrollView, ImageBackground } from 'react-native'
import Constants from 'expo-constants'
import ItemsList from './ItemsList'

const Main = () => {
  return (
    <ScrollView>
      <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1 }}>
        <ImageBackground source={{ uri: 'https://www.teahub.io/photos/full/21-216495_wallpaper-gradient-purple-blue-linear-dark-violet-dark.jpg' }}>
          <Text style={{ fontSize: 30, textAlign: 'center', marginBottom: 30, marginTop: 30, color: 'white' }}>Big List of Items</Text>
        </ImageBackground>
        <ItemsList />
      </View>
    </ScrollView>
  )
}

export default Main