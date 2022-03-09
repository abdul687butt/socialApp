import { StyleSheet, SafeAreaView, Text, View, StatusBar } from 'react-native'
import React,{useState, useEffect} from 'react'
import { BottomTab } from '../component'
import { COLORS, hp } from '../constants'
import FriendList from './friendList'
import Profile from './profiles'
import SearchFriend from './searchFriend'

const Home = () => {
  const [activePage, setActivePage] = useState('friends')
  return (
    <SafeAreaView style={{backgroundColor:COLORS.white}}>
      <View style={{ paddingTop:StatusBar.currentHeight-10, height:hp(85)}}>
      {activePage==='friends'?<FriendList/>: activePage==='profile'? <Profile/>:<SearchFriend/> }
        </View>
      <BottomTab activePage={activePage} setActivePage={val=>setActivePage(val)}/>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})