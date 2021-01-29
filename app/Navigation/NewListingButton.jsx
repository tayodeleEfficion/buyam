import React from 'react'
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import colors from '../config/colors'
import {MaterialCommunityIcons} from "@expo/vector-icons"
import {  } from 'react-native-gesture-handler'

export default function NewListingButton({onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
            <MaterialCommunityIcons name="plus-circle" color={colors.white} size={40}/>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.primary,
        borderRadius:40,
        height:80,
        bottom:20,
        borderColor:colors.white,
        borderWidth:10,
        width:80,
        alignItems:"center",
        justifyContent:"center"
    }
})
