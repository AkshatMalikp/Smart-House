import React from "react";

import { StyleSheet, Text, View,Image } from 'react-native';



export const HomeScreen =()=>{
return(
<SafeAreaView style={styles.container}>
<Text style={{ fontWeight:'100',fontSize:15,}} >Welcome Home <Image style={{width:50,height:50,paddingLeft:1000,}} source={require("./src/assets/pp.jpg")}/></Text>
      
      <Text style={{marginTop:10, fontWeight:'bold',fontSize:30,}}>Akshat Malik</Text>
      
      <StatusBar style="auto" />

</SafeAreaView>

);

};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
  
      alignItems: 'flex-start',
      paddingTop: 70,
      paddingLeft: 20,
      fontSize: 5,
    },
  });