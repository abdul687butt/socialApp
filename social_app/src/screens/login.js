import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  TouchableWithoutFeedback
} from 'react-native';
import {Loader} from '../component'
import {connect} from 'react-redux'
import {COLORS} from '../constants';
import {setToast, login} from '../store/actions'
import { validateEmail } from '../utils/validation';


const Login = (props) => {
    
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {

      try {
        if (!email) throw 'Please Provide Email Address';
        if (!validateEmail(email)) throw 'Invalid Email Address';
        if (!password) throw 'Please Provide Password';
        if (password && password.length<6) throw 'Invalid Password';
       
        let obj = {
          email: email,
          password: password
        }
        props.login(obj, ()=>props.navigation.replace('home'))
  
      } catch (error) {
        props.setToast('error', error)
      }
    }
  return (
    <View style={styles.container}>
    {props.isLoading && <Loader/> }
    <Text style={styles.h1}>Login</Text>
    
    <TextInput
      keyboardType={'email-address'}
      style={styles.textInput}
      placeholderTextColor={'black'}
      placeholder={'Enter email'}
      value={email}
      onChangeText={val => setEmail(val)}
    />

    <TextInput
      secureTextEntry
      style={styles.textInput}
      placeholderTextColor={'black'}
      placeholder={'Enter password'}
      value={password}
      onChangeText={val => setPassword(val)}
    />

  
    <TouchableHighlight  onPress={()=>handleSubmit()} style={styles.button}>
      <Text style={styles.buttonText}>Sign In</Text>
    </TouchableHighlight>

     
     <TouchableWithoutFeedback onPress={()=>props.navigation.navigate('signup')}> 
        <Text style={styles.bottomText}>{"Don't have an acount ? "}<Text style={{fontWeight:'bold'}}>Create now</Text></Text>
      </TouchableWithoutFeedback>
     
        
  </View> 
  )}
  const mapStateToProps=(props)=>{
    console.log(props)
    return{
      isLoading:props.user.isLoading,
      
    }
  }
  
  export default  connect(mapStateToProps,{setToast, login})(Login)
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLORS.white,
    },
    h1: {
      color: 'black',
      fontSize: 32,
      fontWeight: 'bold',
      marginBottom: '4%',
      marginTop: -60,
      textTransform:'uppercase'
    },
    caption: {
      color: 'black',
      fontSize: 16,
      marginBottom: 20,
      width: '90%',
      paddingLeft: '2%',
    },
    textInput: {
      backgroundColor: COLORS.white,
      // borderWidth:2,
      width: '90%',
      height:45,
      marginBottom: '4%',
      fontSize: 16,
      paddingLeft: '4%',
      elevation: 2,
      color:COLORS.dark
    },
    button: {
      backgroundColor: COLORS.primary,
      // borderWidth:4,
      // elevation: 10,
      width: '90%',
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '2%',
    },
    buttonText: {
      color: COLORS.white,
      fontSize: 19,
      textTransform:'uppercase',
      fontWeight:'bold'
    },
    bottomText:{
      marginTop:'4%',
      fontSize:16,
      color:'black'
    }
  });