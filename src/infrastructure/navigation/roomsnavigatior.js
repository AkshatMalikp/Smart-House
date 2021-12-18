import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { Bedroom } from "../../features/BedRoom/bedroom";
import { BathRoom } from "../../features/Bathroom/bathroom";
import { Kitchen } from "../../features/Kitchen/kitchen";
import { Livingroom } from "../../features/LivingRoom/livingroom";
const roomnavigator=createStackNavigator();




export const RoomN=()=>{

    return(
        <roomnavigator.Navigator>
            <roomnavigator.Screen name="Bedroom" component={Bedroom} />
            <roomnavigator.Screen name="Kitchen" component={BathRoom} />
            <roomnavigator.Screen name="Bathroom" component={Kitchen} />
            <roomnavigator.Screen name="Livingroom" component={Livingroom} />
        </roomnavigator.Navigator>
    )
}