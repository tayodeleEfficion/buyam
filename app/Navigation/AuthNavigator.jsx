import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator}  from "@react-navigation/stack"
import WelcomeScreen from "../screens/WelcomeScreen"
import LoginScreen from "../screens/LoginScreen"
import RegisterScreen from "../screens/RegisterScreen"


   const {Navigator, Screen} = createStackNavigator()

const AuthNavigator =()=>(
    <Navigator>
        <Screen name="Welcome" options={{headerShown:false}} component={WelcomeScreen}/>
        <Screen name="Login" component={LoginScreen}/>
        <Screen name="Register" component={RegisterScreen}/>
    </Navigator>
)
export default AuthNavigator 