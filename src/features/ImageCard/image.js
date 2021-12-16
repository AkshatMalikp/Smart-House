import React from "react";
import { View,StyleSheet,Image, TouchableOpacity,Text } from "react-native";


export const IMG = (props) => {
    return(
        <TouchableOpacity>
        <View style={styles.container}>
        
         <Image style={styles.imagestyle} source={props.link}/>
         <View style={styles.heading}>
         <Text style={{flex:1,fontSize:20,}}>{props.title}</Text>
         <Text style={{flex:1,fontSize:20,}}>{props.temp} C</Text>   
         </View>
        </View>
        </TouchableOpacity>
    );
};


const styles=StyleSheet.create({
      
    imagestyle:{
        width:190,
        height:300,
      },
    container:{
        
        marginRight:20,
        borderWidth:1,
        borderColor:'silver',
    }, 
    heading:{
        flexDirection:"row",
        backgroundColor:'rgba(192,192,192,0.4)',
        
    },
});