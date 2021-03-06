import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Toast } from '../component';
import {connect} from 'react-redux'
import {clearToast} from '../store/actions'

import {stackRouteList} from './routeList';

const Stack = createStackNavigator();

class AppNavigatior extends Component {
    render() {
        return (
            <NavigationContainer>
                 {this.props.isToastShowing && <Toast 
                    {...this.props.toastConfig} 
                    isToastShowing={this.props.isToastShowing}
                    clearToast={() => this.props.clearToast()} 
                    />}
                <StatusBar
                    barStyle="dark-content"
                    translucent
                    backgroundColor="transparent"
                />
                <Stack.Navigator
                    initialRouteName={'splash'}
                >
                    {
                        stackRouteList.map(((item, index) => {
                            return (
                                <Stack.Screen
                                    key={index}
                                    name={item.name}
                                    component={item.component}
                                    options={{ headerShown: false }}
                                />
                            )
                        }))
                    }
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

const mapStateToProps = props =>{
    console.log(" props===========================", props.toast.isToastShowing,)
    return{
      isToastShowing :props.toast.isToastShowing,
      toastConfig:props.toast.config
  
    }
  }
  
  export default connect(mapStateToProps, {clearToast})(AppNavigatior)
  