import React,{useState, useEffect} from 'react'
import Header from '../component/header'
import { COLORS, hp, ICONS, wp } from '../constants'
import {  StyleSheet, Text, View } from 'react-native'

const Profile = () => {
  const [data, setdata] = useState({
      user_id: 2,
      first_name: "ariyaa",
      last_name: "albert",
      email: "ariyaalbert@gmail.com"
  })
  return (
    <View>
  <Header/>
  <View  style={styles.container}>
  <Text style={styles.h1}>Profile Details</Text>

      <View style={styles.avatar}>
            <Text style={styles.avatarText}>{data.first_name.slice(0,1)} {data.last_name.slice(0,1)}</Text>
        </View>
        <View>

            <Text style={styles.title}>{data.first_name} {data.last_name}</Text>
            <Text style={styles.txt}>{data.email}</Text>
        </View>
    </View>
  </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  h1:{
    color:COLORS.black,
    fontSize:20,
    marginBottom:50,
    marginTop:20,
    fontFamily:'Poppins-Medium'
  },
  container:{
    elevation:10,
    backgroundColor:COLORS.white,
    height:hp(70),
    alignItems:'center',
    // justifyContent:'center',
    borderTopRightRadius:50,
    padding:'4%'
  },

  avatar:{
    backgroundColor:COLORS.green,
    width:wp(25),
    height:wp(25),
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    marginRight:10
},
avatarText:{
    fontSize:22,
   textTransform:"uppercase",
    fontFamily:'Poppins-Medium',
    color:COLORS.white,
    
},
title:{
    fontSize:22,
    textTransform:"capitalize",
    color:COLORS.black,
    marginTop:30,
    textAlign:'center',
    fontFamily:'Poppins-Regular',
},
txt:{
    color:COLORS.gray,
    fontFamily:'Poppins-Regular',
    fontSize:16,
    textAlign:'center',
},
})