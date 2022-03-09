import { FlatList, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React,{useState, useEffect} from 'react'
import Header from '../component/header'
import { COLORS, hp, ICONS, wp } from '../constants'
// import Card1 from '../component/card/card1'
import RequestCard from '../component/card/requestCard'

const SearchFriends = () => {
  const [searchText, setsearchText] = useState('')
  const [searchResult, setsearchResult] = useState([
    {first_name:'robert',id:1, last_name:'William', email:'robertWilliam@gmail.com'},
    {first_name:'robert',id:2, last_name:'William', email:'robertWilliam@gmail.com'},
    {first_name:'robert',id:3, last_name:'William', email:'robertWilliam@gmail.com'},
    {first_name:'robert', id:4,last_name:'William', email:'robertWilliam@gmail.com'},
    {first_name:'robert',id:1, last_name:'William', email:'robertWilliam@gmail.com'},
    {first_name:'robert',id:2, last_name:'William', email:'robertWilliam@gmail.com'},
    {first_name:'robert',id:3, last_name:'William', email:'robertWilliam@gmail.com'},
    {first_name:'robert', id:4,last_name:'William', email:'robertwilliam@gmail.com'},
  ])
  const [friendReuestList, setfriendReuestList] = useState([])
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

  const emptyView=()=>(

    <View style={styles.emptyView}>
        <ICONS.AntDesign name={'search1'} size={40} color={COLORS.gray}/>
      <Text style={styles.emptytxt}> No Result Found</Text>
    </View>
  )
  
  const emptyRequest=()=>(

<View style={styles.emptyView}>
    <ICONS.FontAwesome name={'users'} size={40} color={COLORS.gray}/>
  <Text style={styles.emptytxt}> No Request Found</Text>
</View>
)

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
          {
          !!searchText?(
          searchResult.length >0?
          <>
          <View style={styles.row}>
            <Text style={styles.h1}>Search Results for "{searchText}"</Text>
              <TouchableOpacity onPress={()=>{
                setsearchResult([]);
                setsearchText("")
              }}>
                <Text style={styles.clearText}>Clear</Text>
              </TouchableOpacity>
          </View>
            <FlatList showsVerticalScrollIndicator={false} data={data} renderItem={({item,index})=><RequestCard item={item} type={"send"} key={index}/>}/>
       
          </>:emptyView() ): 
          <>
           <Text style={styles.h1}>Friend Request</Text>
            { friendReuestList.length>0?
            <FlatList showsVerticalScrollIndicator={false} data={data} renderItem={({item,index})=><RequestCard item={item} key={index}/>}/>
        :emptyRequest()}
      </>
          }
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
  },
  row:{
    justifyContent:'space-between',
    flexDirection:'row'  
  },
  clearText:{
    fontSize:18,
    color:COLORS.green,
    fontFamily:"Poppins-Regular"
  },
  emptyView:{
  alignItems:'center',
  justifyContent:'center',
  height:hp(40)
  },
  emptytxt:{
    fontSize:22,
    marginTop:20
  }
  
})