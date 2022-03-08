import { StyleSheet, Image, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import logo from '../assets/logo.png'
import { COLORS } from '../constants'
import { connect } from 'react-redux'

const Splash = (props) => {
    useEffect(() => {
    if(props.token){
        setTimeout(() => {
            props.navigation.replace('home')      
        }, 2500);
    }else{
        setTimeout(() => {
            props.navigation.replace('login')      
        }, 2500);
        
    }
    }, [props.token])
    
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.image}/>
      <Text style={styles.txt}>Let's Make Friends</Text>
    </View>
  )
}

const mapStateToProps=(props)=>{
    return{
        token:props.user.token
    }
}

export default connect(mapStateToProps, null) (Splash)

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:'center',
        backgroundColor:COLORS.light
    },
    image:{
        width:150,
        height:150,
        resizeMode:'contain'
    },

    txt:{
        color:COLORS.green,
        fontSize:18,
        fontFamily:"Poppins-Regular"
    }
})