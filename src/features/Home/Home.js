import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from 'react-native';
import { IMG } from '../ImageCard/image';
import { Device } from '../Device/device';
export const Home=({navigation})=> {
  return (
    
<SafeAreaView style={styles.container}>
  <ScrollView>
    
  <View style={styles.heading}>

 <View style={{flexDirection:'column'}}>
<Text style={{ fontWeight:'100',fontSize:15,fontStyle:'italic',marginBottom:10,}} >Welcome Home </Text>
<Text style={{ fontWeight:'bold',fontSize:30,marginBottom:30,fontStyle:'italic'}}>Akshat Malik</Text>
</View> 
<TouchableOpacity onPress={()=>{
  navigation.navigate('Settings')
}}>
<Image style={{width:80,height:80,paddingLeft:10,borderWidth:0.5,borderRadius:15,marginRight:15,}} source={require("../../assets/pp.jpg")}/>
</TouchableOpacity>
</View>
      
      
      

        <Text style={{marginBottom:10,fontSize:24,fontStyle:'italic'}}>Rooms</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
          onPress={()=>{
            navigation.navigate('BathRoom')
          }
          }
          >

          
        <IMG title="Bathroom" temp="24" link = {require("../../assets/bathroom.jpg")} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>{
            navigation.navigate('Bedroom')
          }
          }
          >
        <IMG title="Bedroom" temp="27" link = {require("../../assets/bedroom.jpg")} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>{
            navigation.navigate('Kitchen')
          }
          }
          >
        <IMG title="Kitchen" temp="21" link = {require("../../assets/bathroom.jpg")} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>{
            navigation.navigate('Livingroom')
          }
          }
          >
        <IMG title="Living Room" temp="20" link = {require("../../assets/livingroom.jpg")} />
        </TouchableOpacity>
        </ScrollView>
        <Text style={{marginTop:20,marginBottom:10,fontSize:24}}>Devices</Text>
        <View style={styles.devicebox}>
          <Device devicename='Microwave' link={require("../../assets/microwave.jpg")}/>
          <Device devicename='Rangehood' link={require("../../assets/Rangehood.jpg")}/>
        </View>
        <View style={styles.devicebox}>
          <Device devicename='Fridge' link={require("../../assets/Fridge.jpg")}/>
          <Device devicename='Table Fan' link={require("../../assets/fan.jpg")}/>
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
    justifyContent:'space-between'
  },
  devicebox:{
    flexDirection:'row',
    marginBottom:10,
  },

  
});