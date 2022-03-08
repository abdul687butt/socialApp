import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {COLORS, hp,wp} from '../../constants'

export const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={60} color={COLORS.primary} />
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        position:"absolute",
        top:0,
        left:0,
        right:0,
        bottom:0,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        height:hp(100),
        zIndex:1000,
        backgroundColor:'rgba(255,255,255,0.6)'
    }
})