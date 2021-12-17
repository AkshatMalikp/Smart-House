import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from 'react-native';
import { IMG } from './src/features/ImageCard/image';
import { Device } from './src/features/Device/device';
export default function App() {
  return (
    
<SafeAreaView style={styles.container}>
  <ScrollView>
    
  <View style={styles.heading}>

  
<Text style={{ fontWeight:'100',fontSize:15,flex:2}} >Welcome Home </Text>
<Image style={{width:80,height:80,paddingLeft:10,borderWidth:0.5,borderRadius:15,}} source={require("./src/assets/pp.jpg")}/>
</View>
      
      <Text style={{ fontWeight:'bold',fontSize:30,marginBottom:30}}>Akshat Malik</Text>
      

        <Text style={{marginBottom:10,fontSize:24}}>Rooms</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <IMG title="Bathroom" temp="24" link = {require("./src/assets/bathroom.jpg")} />
        <IMG title="Bedroom" temp="27" link = {require("./src/assets/bedroom.jpg")} />
        <IMG title="Kitchen" temp="21" link = {require("./src/assets/bathroom.jpg")} />
        <IMG title="Living Room" temp="20" link = {require("./src/assets/livingroom.jpg")} />
        </ScrollView>
        <Text style={{marginTop:20,marginBottom:10,fontSize:24}}>Devices</Text>
        <View style={styles.devicebox}>
          <Device devicename='Microwave' link={require("./src/assets/microwave.jpg")}/>
          <Device devicename='Rangehood' link={require("./src/assets/Rangehood.jpg")}/>
        </View>
        <View style={styles.devicebox}>
          <Device devicename='Fridge' link={require("./src/assets/Fridge.jpg")}/>
          <Device devicename='Table Fan' link={require("./src/assets/fan.jpg")}/>
        </View>
        </ScrollView>
        
      <StatusBar style="auto" />

</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    alignItems: 'flex-start',
    paddingTop: 20,
    paddingLeft: 20,
    fontSize: 5,
    
  },
  heading:{
    flexDirection:'row',
  },
  devicebox:{
    flexDirection:'row',
    marginBottom:10,
  },

  
});