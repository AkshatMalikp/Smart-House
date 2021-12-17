import React from "react";
import { StyleSheet, View,Image,Text, TouchableOpacity } from "react-native";


export const Device=(props)=>{
    return(
           <View style={styles.conatiner}>
               <TouchableOpacity onPress = {()=>{
                         alert("You pressed" )
        }}>
               <Image style={styles.Imag} source={props.link}/>
               <Text style={{alignSelf:'center',}}> {props.devicename}</Text>
               </TouchableOpacity>

           </View>

           

    );
};


const styles=StyleSheet.create({
    conatiner:{
        borderWidth:1,
        flex:1,
        marginRight:10,
        backgroundColor:'rgba(192,192,192,0.4)',
        borderRadius:20,
        
    },
    Imag:{
      width:150,
      height:150,
      marginBottom:10,
      marginLeft:10,
      marginRight:10,
      marginTop:10,

    },
})