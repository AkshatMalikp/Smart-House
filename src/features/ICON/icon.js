import React from "react";
import { StyleSheet,View,Text,Image } from "react-native";


export const ICONN= (props) =>{
    return(
        <View style={styles.Iconcontainer}>
        <View style={styles.borderstyle}>
             <Image style={styles.image} source={props.link} />
       </View>
       <Text style={{justifyContent:'center',alignSelf:'center'}}>{props.name}</Text>
       </View>

    )
}


const styles=StyleSheet.create({

    Iconcontainer:{
        marginTop:null,
        marginRight:15,
        
    },
    image:{
        width:60,
        height:60,
        margin:8,


    },
    borderstyle:{
      borderColor:'white',
      borderWidth:1,
      borderRadius:25,
      backgroundColor:'#B2D4E5',
    },
    

});