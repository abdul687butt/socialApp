import { StyleSheet, Image, Text, View } from 'react-native'
import React from 'react'
import logo from '../../assets/logo.png'
import {wp, COLORS, FONTS} from '../../constants'


const Header = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={logo}/>
      <Text style={styles.title}>Make Friends</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        width:wp(100),
        alignItems:'center',
        backgroundColor:COLORS.white
    },
    img:{
      width:100,
      height:100,
      resizeMode:'contain'
    },
     title:{
       color:COLORS.green,
       fontFamily:'Poppins-Bold',
       fontSize:22,
       marginLeft:10
     }
})