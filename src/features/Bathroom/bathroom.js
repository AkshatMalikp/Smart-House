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
            <Togglecard name='Celing Light' link={require('../../assets/lightc.jpg')} />
            <Togglecard name='Celing Light' link={require('../../assets/lightc.jpg')} />
            <Togglecard name='Celing Light' link={require('../../assets/lightc.jpg')} />
            
          </ScrollView>

          <Text style={{fontSize:25,marginTop:20,}}>Intensive</Text>
          <Text style={{justifyContent:'center',alignSelf:'center',marginTop:20,marginRight:15,fontSize:20,color:'black'}}> {range}</Text>
          <Slider 
             style={{}}
             minimumValue={0}
             maximumValue={1}
             mininumTrackintColor='white'
             maximumTrackTintColor='blue'
             value={0.5}
             onValueChange={value=>setRange(parseInt(value*100) +'%')}
             
             />
             <View style={{flexDirection:'row',justifyContent:'space-between'}}>
               <Text style={{fontSize:17, color:'silver'}}>off</Text>
               <Text style={{fontSize:17, color:'silver'}}>100%</Text>
             </View>

             
          </ScrollView>


        </SafeAreaView>
    );
};


const styles=StyleSheet.create({
 area:{
  marginLeft:15,
 },


})



