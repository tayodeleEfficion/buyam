import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ImageInputList from '../ImageInputList'
import ErrorMessage from "./ErrorMessage"
import {useFormikContext} from "formik"

export default function FormImagePicker({name}) {
    const {setFieldValue, values, errors, touched}  = useFormikContext()
    const imageUris =  values[name]

    const handleAdd =(uri)=>{
        setFieldValue(name,[...imageUris,uri ])
    }
    const handleRemove=uri=>{
        setFieldValue(name,imageUris.filter(imageUri=>imageUri !==uri))
    }
    return (
        <>
        <ImageInputList
         imageUris={imageUris}
         onAddImage={handleAdd}
         onRemoveImage={handleRemove}
        />
        <ErrorMessage errors={errors[name]} visible={touched[name]}/>
        </>
    )
}

const styles = StyleSheet.create({})
