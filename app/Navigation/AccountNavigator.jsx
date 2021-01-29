import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {createStackNavigator} from "@react-navigation/stack"
import AccountScreen from "../screens/AccountScreen"
import MessagesScreen from "../screens/MessagesScreen"

const {Screen, Navigator} = createStackNavigator()
 const AccountNavigator=()=>(
     <Navigator mode="modal">
         <Screen name="Account" component={AccountScreen}  />
         <Screen name="Messages" component={MessagesScreen}/>
     </Navigator>
 )

export default AccountNavigator