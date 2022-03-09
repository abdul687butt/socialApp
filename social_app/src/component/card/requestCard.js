import { StyleSheet, Text, Touchable, TouchableHighlight, View } from 'react-native'
import React from 'react'
import { COLORS, hp, wp } from '../../constants'
import { connect } from 'react-redux'
import { sendFriendRequest, acceptFriendRequest, RejectFriendRequest } from '../../store/actions'

const RequestCard = (props) => {
    const {item,index, type}=props
    const{user_givenname,user_familyname, user_id, user_email}= item
  return (
    <View key={index} style={styles.card}>
        <View style={styles.avatar}>
            <Text style={styles.avatarText}>{user_givenname.slice(0,1)} {user_familyname.slice(0,1)}</Text>
        </View>
        <View>

            <Text style={styles.title}>{user_givenname} {user_familyname}</Text>
            <Text style={styles.txt}>{user_email}</Text>
            <View style={styles.btnView}>
                
                {type==="send" && <TouchableHighlight onPress={()=>props.sendFriendRequest(user_id)} style={[styles.btn, type==="send" && {width:'80%'}]}>
                    <Text style={styles.btnText}>Send Request</Text>
                 </TouchableHighlight>}

               {type!=="send" && <TouchableHighlight  onPress={()=>props.acceptFriendRequest(user_id)} style={styles.btn}>
                    <Text style={styles.btnText}>Accept</Text>
                 </TouchableHighlight>}
               
                {type!=="send" && <TouchableHighlight onPress={()=>props.RejectFriendRequest(user_id)} style={[styles.btn, {backgroundColor:COLORS.danger}]}>
                    <Text style={styles.btnText}>Reject</Text>
                 </TouchableHighlight>}
            </View>
        </View>
    </View>
  )

}



export default connect(null, {sendFriendRequest, acceptFriendRequest, RejectFriendRequest})( RequestCard)

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
        textTransform:"capitalize",
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
        marginTop:10,
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