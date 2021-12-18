import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { Bedroom } from "../../features/BedRoom/bedroom";
import { BathRoom } from "../../features/Bathroom/bathroom";
import { Kitchen } from "../../features/Kitchen/kitchen";
import { Livingroom } from "../../features/LivingRoom/livingroom";
import { Home } from "../../features/Home/Home";
const roomnavigator=createStackNavigator();
import { NavigationContainer } from "@react-navigation/native";




export const RoomN=()=>{

    return(
        <NavigationContainer>
            
        <roomnavigator.Navigator>
            <roomnavigator.Screen name="Home" component={Home} />
            <roomnavigator.Screen name="Bedroom" component={Bedroom} />
            <roomnavigator.Screen name="Kitchen" component={Kitchen} />
            <roomnavigator.Screen name="BathRoom" component={BathRoom} />
            <roomnavigator.Screen name="Livingroom" component={Livingroom} />
        </roomnavigator.Navigator>
        
        </NavigationContainer>
    )
}