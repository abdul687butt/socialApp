import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {ICONS, COLORS, FONTS, hp, wp} from '../../constants'

export const BottomTab = ({activePage, setActivePage}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>setActivePage('profile')}>
          <View style={[styles.tab,activePage==="profile"&&{backgroundColor:COLORS.green} ]}>
            <ICONS.FontAwesome name={'user-circle-o'} size={ activePage==="profile"?24: 18} color={COLORS.white}/>
            <Text style={styles.tabText}>Profile</Text>
          </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>setActivePage('friends')}>
          <View style={[styles.tab, activePage==="friends"&&{backgroundColor:COLORS.green}]}>
            <ICONS.FontAwesome name={'users'} size={ activePage==="friends"?24: 18} color={COLORS.white}/>
            <Text style={styles.tabText}>Friends</Text>
          </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>setActivePage('search')}>
          <View style={[styles.tab, activePage==="search"&&{backgroundColor:COLORS.green}]}>
            <ICONS.AntDesign name={'search1'} size={ activePage==="search"?24: 18} color={COLORS.white}/>
            <Text style={styles.tabText}>Search</Text>
          </View>
      </TouchableOpacity>
         
      <TouchableOpacity onPress={()=>{}}>
          <View style={[styles.tab, activePage==="logout"&&{backgroundColor:COLORS.green}]}>
            <ICONS.AntDesign name={'logout'} size={ activePage==="logout"?24: 18} color={COLORS.white}/>
            <Text style={styles.tabText}>Logout</Text>
          </View>
      </TouchableOpacity>

     
    </View>
  )
}



const styles = StyleSheet.create({
    container:{
        backgroundColor:COLORS.primary,
        height:hp(10),
        width:wp(100),
        elevation:10,
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center'   
    },
    tab:{
        alignItems:'center',
        justifyContent:'center',
        height:'100%',
        width:wp(25),
        borderRadius:20,
        // elevation:10

    },
    tabText:{
        color:COLORS.white,
        marginTop:5,
            fontFamily:'Poppins-Regular'
    }
})