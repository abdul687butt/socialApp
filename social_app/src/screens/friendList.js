import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../component/header'
import { COLORS, hp } from '../constants'
import Card1 from '../component/card/card1'

const FriendList = () => {
  let data=[
    {first_name:'robert',id:1, last_name:'William', email:'robertWilliam@gmail.com'},
    {first_name:'robert',id:2, last_name:'William', email:'robertWilliam@gmail.com'},
    {first_name:'robert',id:3, last_name:'William', email:'robertWilliam@gmail.com'},
    {first_name:'robert', id:4,last_name:'William', email:'robertWilliam@gmail.com'},
    {first_name:'robert',id:1, last_name:'William', email:'robertWilliam@gmail.com'},
    {first_name:'robert',id:2, last_name:'William', email:'robertWilliam@gmail.com'},
    {first_name:'robert',id:3, last_name:'William', email:'robertWilliam@gmail.com'},
    {first_name:'robert', id:4,last_name:'William', email:'robertwilliam@gmail.com'},
  ]
  return (
    <View>
        <Header/>
        <View style={styles.container}>
          <Text style={styles.h1}>Friends</Text>
          <FlatList showsVerticalScrollIndicator={false} data={data} renderItem={({item,index})=><Card1 item={item} key={index}/>}/>
        </View>
    </View>
  )
}

export default FriendList

const styles = StyleSheet.create({
  h1:{
    color:COLORS.black,
    fontSize:20,
    fontFamily:'Poppins-Medium'
  },
  container:{
    elevation:10,
    backgroundColor:COLORS.white,
    height:hp(70),
    borderTopRightRadius:50,
    padding:'4%'
  }
})