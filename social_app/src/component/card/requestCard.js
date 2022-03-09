import { StyleSheet, Text, Touchable, TouchableHighlight, View } from 'react-native'
import React from 'react'
import { COLORS, hp, wp } from '../../constants'

const RequestCard = ({item,index}) => {
    const{first_name,last_name, email}= item
  return (
    <View key={index} style={styles.card}>
        <View style={styles.avatar}>
            <Text style={styles.avatarText}>{first_name.slice(0,1)} {last_name.slice(0,1)}</Text>
        </View>
        <View>

            <Text style={styles.title}>{first_name} {last_name}</Text>
            <Text style={styles.txt}>{email}</Text>
            <View style={styles.btnView}>
                <TouchableHighlight style={styles.btn}>
                    <Text style={styles.btnText}>Accept</Text>
                 </TouchableHighlight>
                 <TouchableHighlight style={[styles.btn, {backgroundColor:COLORS.danger}]}>
                    <Text style={styles.btnText}>Reject</Text>
                 </TouchableHighlight>
            </View>
        </View>
    </View>
  )

}

export default RequestCard

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
        fontSize:18,
        color:COLORS.black,
        fontFamily:'Poppins-Regular',
    },
    txt:{
        color:COLORS.gray,
        fontFamily:'Poppins-Regular',
        fontSize:14
    },
    btnView:{
        flexDirection:'row',
    },
    btn:{
        backgroundColor:COLORS.primary,
        marginRight:10,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        width:wp(20),
        borderRadius:10
    },
    btnText:{
        color:COLORS.white,
        fontSize:15,
        fontFamily:'Poppins-Regular'
    }
})