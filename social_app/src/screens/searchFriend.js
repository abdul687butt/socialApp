import { FlatList, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React,{useState, useEffect} from 'react'
import Header from '../component/header'
import { COLORS, hp, ICONS, wp } from '../constants'
// import Card1 from '../component/card/card1'
import RequestCard from '../component/card/requestCard'

const SearchFriends = () => {
  const [searchText, setsearchText] = useState('')
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
          <Text style={styles.h1}>Search Friends</Text>
          <View style={styles.input}>
            <TextInput style={{width:'80%'}} placeholder='Search New Friends' value={searchText} onChangeText={(val)=> setsearchText(val) }/>
          <TouchableOpacity style={styles.searchBtn} onPress={()=>handleSearch()}>
            <ICONS.AntDesign name={'search1'} size={20} color={COLORS.white}/>
          </TouchableOpacity>
          </View>
          <Text style={styles.h1}>Friend Request</Text>
          <FlatList showsVerticalScrollIndicator={false} data={data} renderItem={({item,index})=><RequestCard item={item} key={index}/>}/>
        </View>
    </View>
  )
}

export default SearchFriends

const styles = StyleSheet.create({
  h1:{
    color:COLORS.black,
    fontSize:20,
    marginBottom:10,
    fontFamily:'Poppins-Medium'
  },
  container:{
    elevation:10,
    backgroundColor:COLORS.white,
    height:hp(70),
    borderTopRightRadius:50,
    padding:'4%'
  },
  input:{
    flexDirection:'row',
    elevation:5,
    backgroundColor:COLORS.white,
    width:'100%',
    justifyContent:'space-between',
    paddingHorizontal:10,
    alignItems:'center',
    marginVertical:10,
    height:80,
    borderRadius:10,
    marginBottom:20
  },
  searchBtn:{
    backgroundColor:COLORS.primary,
    borderRadius:10,
    width:'20%',
    height:'80%',
    alignItems:'center',
    justifyContent:'center'
  }
})