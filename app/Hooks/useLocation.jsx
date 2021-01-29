import * as Location from "expo-location"
import React, {useState, useEffect} from "react"



export default useLocation=()=>{
    const [location, setLocation] = useState()

    const getLocation =async()=>{
        const {gra} = await Location.requestPermissionsAsync()
        if(!granted) return 
        const {coords:{latitude, longitude}} = Location.getCurrentPositionAsync()
        setLocation({latitude, longitude})
    }

    useEffect(()=>{
        getLocation()
    })

    return location
}