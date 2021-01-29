import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {createStackNavigator} from "@react-navigation/stack"
import ListingsScreen from '../screens/ListingsScreen'
import ListingDetailScreen from "../screens/ListingDetailsScreen"

const {Screen, Navigator} = createStackNavigator()
 const FeedNavigator=()=>(
     <Navigator mode="modal">
         <Screen name="Listings" component={ListingsScreen} options={{headerShown:false}} />
         <Screen name="ListingDetails" options={{headerShown:false}} component={ListingDetailScreen}/>
     </Navigator>
 )

export default FeedNavigator
