import React from "react";
import { ImageBackground, View ,Text} from "react-native";
import { StyleSheet } from "react-native";
import { Switch } from "react-native";
import { useState } from "react";

export const Togglecard=(props)=>{
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return(

         <View style={styles.cardborder}>
         <ImageBackground style={styles.imageback} imageStyle={{ borderRadius: 20}} source={props.link}>
        <View style={styles.oncard}>    
        <Text style={styles.textstyle} >{props.name}</Text>
         <Switch
               trackColor={{ false: "#767577", true: "#81b0ff" }}
               thumbColor={ isEnabled ? "#87CDF0" : "#f4f3f4"}
               ios_backgroundColor="#3e3e3e"
               onValueChange={toggleSwitch}
               value={isEnabled}
               style={styles.switchh}
                />
      </View>
         
       </ImageBackground>
       </View>
  


    )

};

    



const styles=StyleSheet.create({

    cardborder:{
        width:300,
        height:250,
        marginTop:25,
        marginRight:15,

    },
    imageback:{
        width:'100%',
        height:'100%',
        borderRadius:20/2,
    },

    oncard:{
        flexDirection:'row',
        justifyContent:'space-between',

    },
    textstyle:{
        marginLeft:10,
        marginTop:190,
        fontWeight:'900',
        fontSize:25,
        color:'grey',
        fontStyle:'italic',
    },
    switchh:{
       marginTop:190,
       marginRight:15,

    }


});