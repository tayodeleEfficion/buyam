import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
 import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
 import ListingsScreen from "../screens/ListingsScreen"
 import ListingEditScreen from "../screens/ListingEditScreen"
 import AccountScreen from "../screens/AccountScreen"
import FeedNavigator from './FeedNavigator'
import AccountNavigator from './AccountNavigator'
import {MaterialCommunityIcons} from "@expo/vector-icons"
import NewListingButton from './NewListingButton'
import  * as routes from "./Routes"

 const { Screen, Navigator} = createBottomTabNavigator()
  const AppNAvigator= ()=>(
      <Navigator>
          <Screen name ="Feed" component={FeedNavigator} options={{
              tabBarIcon:({color, size})=>
              <MaterialCommunityIcons name="home" color={size} color={color} />
          }}/>
          <Screen name="ListingEdit"
           component={ListingEditScreen}
           options={({navigation})=>({
               tabBarButton:()=><NewListingButton onPress={()=>navigation.navigate("ListingEdit")}/>,
            tabBarIcon:({color, size})=>
            <MaterialCommunityIcons name="plus-circle" color={size} color={color} />
        })}
           />
          <Screen name="Account" 
          component={AccountNavigator}
          options={{
            tabBarIcon:({color, size})=>
            <MaterialCommunityIcons name="account" color={size} color={color} />
        }}
          />
      </Navigator>
  )

export default AppNAvigator
