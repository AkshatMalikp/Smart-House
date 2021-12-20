import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native";
import { Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

export const Settings=()=>{
  return(
        
    <><Text style={styles.header}>
          Settings
      </Text>
      <View style={{flexDirection:'row'}}>

      
      <Image style={styles.profile} source={require('../../assets/pp.jpg')} />
      <View style={{flexDirection:'column',marginLeft:65,marginTop:40,}}>
          <Text style={{fontSize:25,fontWeight:'bold',fontStyle:'italic'}}>Akshat Malik</Text>
          <Text style={{fontSize:15,fontStyle:'italic'}}>akshatmalikkv@gmail.com</Text>
      </View>

      </View>
      <ScrollView>
          <TouchableOpacity>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:20,marginRight:20,marginTop:20,}}>
          <Text style={{fontStyle:'italic',fontSize:'25'}}>Email</Text>
          <Image source={require('../../assets/sidearrow.jpg')} style={{height:25,width:25,}} />
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:20,marginRight:20,marginTop:20,}}>
          <Text style={{fontStyle:'italic',fontSize:'25'}}>Notification</Text>
          <Image source={require('../../assets/sidearrow.jpg')} style={{height:25,width:25,}} />
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:20,marginRight:20,marginTop:20,}}>
          <Text style={{fontStyle:'italic',fontSize:'25'}}>Privacy</Text>
          <Image source={require('../../assets/sidearrow.jpg')} style={{height:25,width:25,}} />
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:20,marginRight:20,marginTop:20,marginBottom:50,}}>
          <Text style={{fontStyle:'italic',fontSize:'25'}}>Security</Text>
          <Image source={require('../../assets/sidearrow.jpg')} style={{height:25,width:25,}} />
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:20,marginRight:20,marginTop:20,}}>
          <Text style={{fontStyle:'italic',fontSize:'25'}}>Display Mode</Text>
          <Image source={require('../../assets/sidearrow.jpg')} style={{height:25,width:25,}} />
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:20,marginRight:20,marginTop:20,}}>
          <Text style={{fontStyle:'italic',fontSize:'25'}}>Text Size</Text>
          <Image source={require('../../assets/sidearrow.jpg')} style={{height:25,width:25,}} />
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:20,marginRight:20,marginTop:20,}}>
          <Text style={{fontStyle:'italic',fontSize:'25'}}>Language</Text>
          <Image source={require('../../assets/sidearrow.jpg')} style={{height:25,width:25,}} />
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:20,marginRight:20,marginTop:20,}}>
          <Text style={{fontStyle:'italic',fontSize:'25'}}>Contact</Text>
          <Image source={require('../../assets/sidearrow.jpg')} style={{height:25,width:25,}} />
          </View>
          </TouchableOpacity>
      </ScrollView>

      
      
      
      
      
      
      
      
      </>
  )
}

const styles=StyleSheet.create({
 header:{
  fontSize:40,
  fontWeight:'bold',
  fontStyle:'italic',
  marginLeft:20,
  marginTop:10,
 },
 profile:{
  height:80,
  width:80,
  borderRadius:50,
  borderWidth:5,
  marginTop:25,
  marginLeft:20,
 },

})