import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, hp, wp } from '../../constants'

const Card1 = ({item,index}) => {
    const{user_givenname,user_familyname, user_email}= item
  return (
    <View key={index} style={styles.card}>
        <View style={styles.avatar}>
            <Text style={styles.avatarText}>{user_givenname.slice(0,1)} {user_familyname.slice(0,1)}</Text>
        </View>
        <View>

            <Text style={styles.title}>{user_givenname} {user_familyname}</Text>
            <Text style={styles.txt}>{user_email}</Text>
        </View>
    </View>
  )

}

export default Card1

const styles = StyleSheet.create({

    card:{
        height:hp(15),
        elevation:5,
        backgroundColor:COLORS.white,
        borderRadius:10,flexDirection:'row',
        alignItems:'center',
        padding:'5%',
        marginVertical:10
    },
    avatar:{
        backgroundColor:COLORS.green,
        width:wp(20),
        height:wp(20),
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        marginRight:10
    },
    avatarText:{
        fontSize:22,
        fontFamily:'Poppins-Medium',
        color:COLORS.white,
        textTransform:"uppercase"
    },
    title:{
        fontSize:18,
        textTransform:"capitalize",
        color:COLORS.black,
        fontFamily:'Poppins-Regular',
    },
    txt:{
        color:COLORS.gray,
        fontFamily:'Poppins-Regular',
        fontSize:14
    }
})