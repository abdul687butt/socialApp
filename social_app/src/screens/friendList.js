import { FlatList, StyleSheet, Text, View } from 'react-native'
import React ,{useState, useEffect} from 'react'
import Header from '../component/header'
import { COLORS, hp ,ICONS,FONTS} from '../constants'
import Card1 from '../component/card/card1'
import { connect } from 'react-redux'
import { getFriends } from '../store/actions'


const FriendList = (props) => {

  const [friendList, setfriendList] = useState([])
  
  useEffect(() => {
    if(!Object.keys(props.friendList).length){
      props.getFriends(data=>setfriendList(data))
    }else{
      setfriendList(props.friendList)
     
    }
    
  }, [Object.keys(props.friendList).length])
  
  const emptyView=()=>(

    <View style={styles.emptyView}>
        <ICONS.FontAwesome name={'users'} size={40} color={COLORS.gray}/>
      <Text style={styles.emptytxt}> No Friends Found</Text>
    </View>
    )
  return (
    <View>
        <Header/>
        <View style={styles.container}>
          <Text style={styles.h1}>Friends</Text>
          {friendList.length>0?
          <FlatList showsVerticalScrollIndicator={false} data={friendList} renderItem={({item,index})=><Card1 item={item} key={index}/>}/>
        :emptyView()  
        }
          </View>
          </View>
  )
}
const mapStateToProps= props=>{
  const {isLoading, friendList}=props.friends
  return{
    isLoading, friendList
  }
}

export default connect(mapStateToProps, {getFriends}) (FriendList)

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