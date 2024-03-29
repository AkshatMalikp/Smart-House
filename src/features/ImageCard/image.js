import React from "react";
import { View,StyleSheet,Image, TouchableOpacity,Text } from "react-native";
export const IMG = (props,{navigation}) => {
    return(
        <View style={styles.container}>
        
         <Image style={styles.imagestyle} source={props.link}/>
         <View style={styles.heading}>
         <Text style={{flex:1,fontSize:20,}}>{props.title}</Text>
         <Text style={{flex:1,fontSize:20,}}>{props.temp} C</Text>   
         </View>
        </View>
    );
};


const styles=StyleSheet.create({
      
    imagestyle:{
        width:190,
        height:300,
        borderRadius:20,
      },
    container:{
        
        marginRight:20,
        borderWidth:1,
        borderColor:'silver',
        borderRadius:20,
        backgroundColor:'rgba(192,192,192,0.4)',
    }, 
    heading:{

        flexDirection:"row",
        marginLeft:15,
        
    },
});