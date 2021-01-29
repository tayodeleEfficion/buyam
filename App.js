import { NavigationContainer } from '@react-navigation/native'
import React, {useState} from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import Screen from "./app/components/Screen"
import AppNavigator from './app/Navigation/AppNavigator'
import NavigationTheme from './app/Navigation/NavigationTheme'


export default function App() {
  return (
    <NavigationContainer theme={NavigationTheme}>
       <AppNavigator/>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})
