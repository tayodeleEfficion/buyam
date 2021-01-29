import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {DefaultTheme} from "@react-navigation/native"
import colors from '../config/colors'

 export default{
     ...DefaultTheme,
     colors:{
         ...DefaultTheme.colors,
         primary:colors.primary,
         background:colors.white
     }
 }
