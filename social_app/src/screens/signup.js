import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  TouchableWithoutFeedback,
  ScrollView
} from 'react-native';
import { Loader } from '../component'
import { connect } from 'react-redux'
import { COLORS, hp, wp } from '../constants';
import { setToast, signup } from '../store/actions'
import { validateEmail } from '../utils/validation';

const Signup = (props) => {
  const [fName, setFName] = useState('');
  const [lName, setlName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');

  const handleSubmit = () => {

    try {
      if (!fName) throw 'Please Provide First Name';
      if (!lName) throw 'Please Provide Last Name';
      if (!email) throw 'Please Provide Email Address';
      if (!validateEmail(email)) throw 'Invalid Email Address';
      if (!password) throw 'Please Provide Password';
      if (password && password.length<6) throw 'Password must by greater than5 characters';
      if (!confirmPassword) throw 'Please Provide ConfirmPassword';
      if (password !== confirmPassword) throw 'Password should be same';

      let obj = {
        first_name: fName,
        last_name: lName,
        email: email,
        password: password
      }
      props.signup(obj, ()=>props.navigation.navigate('login'))

    } catch (error) {
      props.setToast('error', error)
    }
  }

  return (

    <ScrollView>
      <View style={styles.container}>

        {props.isLoading && <Loader />}

        <Text style={styles.h1}>Create Account</Text>

        <Text style={styles.caption}>
          Don't have an account create now it will take less then two minutes:
          Sign in to enjoy the app now!
        </Text>

        <TextInput
          style={styles.textInput}
          placeholderTextColor={'black'}
          placeholder={'First Name'}
          value={fName}
          onChangeText={val => setFName(val)}
        />
        <TextInput
          style={styles.textInput}
          placeholderTextColor={'black'}
          placeholder={'Last Name'}
          value={lName}
          onChangeText={val => setlName(val)}
        />


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

        <TextInput
          secureTextEntry
          style={styles.textInput}
          placeholderTextColor={'black'}
          placeholder={'Re Enter password'}
          value={confirmPassword}
          onChangeText={val => setconfirmPassword(val)}
        />
        <TouchableHighlight onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableHighlight>


        <TouchableWithoutFeedback onPress={() => props.navigation.navigate('login')}>
          <Text style={styles.bottomText}>Already have an acount ? <Text style={{ fontWeight: 'bold' }}>Sign in</Text></Text>
        </TouchableWithoutFeedback>


      </View>
    </ScrollView>

  )
}

const mapStateToProps = (props) => {
  return {
    isLoading: props.user.isLoading,

  }
}

export default connect(mapStateToProps, { setToast, signup })(Signup)

const styles = StyleSheet.create({
  container: {
    minHeight: hp(100),
    // flex: 1,
    width: wp(100),
    paddingTop: '35%',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  h1: {
    color: 'black',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: '4%',
    marginTop: -60,
    textTransform: 'uppercase'
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
    height: 45,
    marginBottom: '4%',
    fontSize: 16,
    paddingLeft: '4%',
    elevation: 2,
    color: COLORS.dark
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
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
  bottomText: {
    marginTop: '4%',
    fontSize: 16,
    color: 'black'
  }
});