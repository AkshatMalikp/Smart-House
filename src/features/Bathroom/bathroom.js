import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { ICONN } from "../ICON/icon";
import { Togglecard } from "../ToggleComponent/togglecard";
import { Text,StyleSheet,View } from "react-native";
import { useState } from "react";
import Slider from '@react-native-community/slider';


export const BathRoom=()=>{
  const[range,setRange]=useState('0%');
    return(
        <SafeAreaView style={styles.area}>
          <ScrollView>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              
            
            <TouchableOpacity >
            <ICONN name='Sound' link={require("../../assets/sound.jpg")} />
          </TouchableOpacity>
          <TouchableOpacity >
            <ICONN name='Sound' link={require("../../assets/sound.jpg")} />
          </TouchableOpacity>
          <TouchableOpacity >
            <ICONN name='Sound' link={require("../../assets/sound.jpg")} />
          </TouchableOpacity>
          <TouchableOpacity >
            <ICONN name='Sound' link={require("../../assets/sound.jpg")} />
          </TouchableOpacity>
          <TouchableOpacity >
            <ICONN name='Sound' link={require("../../assets/sound.jpg")} />
          </TouchableOpacity>
          <TouchableOpacity >
            <ICONN name='Sound' link={require("../../assets/sound.jpg")} />
          </TouchableOpacity>
          <TouchableOpacity >
            <ICONN name='Sound' link={require("../../assets/sound.jpg")} />
          </TouchableOpacity>
          <TouchableOpacity >
            <ICONN name='Sound' link={require("../../assets/sound.jpg")} />
          </TouchableOpacity>
          <TouchableOpacity >
            <ICONN name='Sound' link={require("../../assets/sound.jpg")} />
          </TouchableOpacity>
          </ScrollView>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Togglecard name='Celing Light' link={require('../../assets/lightc.jpg')} />
            <Togglecard name='Air Conditioner' link={require('../../assets/AC.jpg')} />
            <Togglecard name='Geaser' link={require('../../assets/GEASER.jpg')} />
            <Togglecard name='Exhaust Fan' link={require('../../assets/EXHAUST.jpg')} />
            
          </ScrollView>

          <Text style={{fontSize:25,marginTop:20,fontStyle:'italic',}}>Intensive</Text>
          <Text style={{justifyContent:'center',alignSelf:'center',marginTop:20,marginRight:15,fontSize:20,color:'black'}}> {range}</Text>
          <Slider 
             style={{}}
             minimumValue={0}
             maximumValue={1}
             mininumTrackintColor='white'
             maximumTrackTintColor='blue'
             value={0}
             onValueChange={value=>setRange(parseInt(value*100) +'%')}
             
             />
             <View style={{flexDirection:'row',justifyContent:'space-between'}}>
               <Text style={{fontSize:17, color:'silver'}}>off</Text>
               <Text style={{fontSize:17, color:'silver'}}>100%</Text>
             </View>

             
             <Text style={{fontSize:25,marginTop:20,fontStyle:'italic'}} >Timer</Text>   

             <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20,}}>
               <Text style={{fontSize:20,}}>From</Text>
               <Text style={{marginRight:185,fontSize:20}}>To</Text>
             </View>
             <View style={{flexDirection:'row'}}>
             <View style={styles.timerconatiner}>
               <Text style={{justifyContent:'center',alignItems:'center',alignSelf:'center',marginTop:12,fontSize:20,}}>06:00 PM</Text>
             </View>
             
             <View style={styles.timerconatiner}>
               <Text style={{justifyContent:'center',alignItems:'center',alignSelf:'center',marginTop:12,fontSize:20,}}>09:00 PM</Text>
             </View>
             </View>

          </ScrollView>


        </SafeAreaView>
    );
};


const styles=StyleSheet.create({
 area:{
  marginLeft:15,
 },
 timerconatiner:{
   borderColor:'black',
   width:180,
   height:50,
   borderWidth:0.5,
   borderRadius:15,
   marginTop:15,
   marginRight:15,
 backgroundColor:'skyblue',
 }


})



