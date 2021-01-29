import React, {useEffect, useState} from 'react'
import { Alert, StyleSheet, Text, Image, TouchableWithoutFeedback, View } from 'react-native'
import * as ImagePicker from "expo-image-picker"
import colors from "../config/colors"
import {MaterialCommunityIcons} from "@expo/vector-icons"

export default function ImageInput({onChangeImage, imageUri}) {
    const requestPermission = async()=>{
        try {
         const {granted} = await ImagePicker.requestCameraPermissionsAsync()
         if(!granted)alert("you must enable permissions")
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        requestPermission()
    }, [])

 const selectImage =async()=>{
    try {
         const {uri, cancelled} = await ImagePicker.launchImageLibraryAsync({
             mediaTypes:ImagePicker.MediaTypeOptions.image,
             quality:0.5
         })
    if(!cancelled) onChangeImage(uri)
    } catch (error) {
            console.log(error)
    }
 }
  const handlePress = ()=>{
      if(!imageUri) selectImage()
      else Alert.alert("Delete", "Are You Sure", [
          {text:"Yes", onPress:()=>onChangeImage(null)},
          {text:"No", }
      ])
  }


    return (
        <TouchableWithoutFeedback onPress={handlePress}>
         <View style={styles.container}>
          {!imageUri && <MaterialCommunityIcons name="camera" color={colors.medium} size={30}/>}
          {imageUri && <Image source={{uri:imageUri}} style={styles.image}/>}
         </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.light,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
        width:100,
        height:100,
        overflow:"hidden"    
    },
    image:{
       
        width:"100%",
        height:"100%"
    }
})
