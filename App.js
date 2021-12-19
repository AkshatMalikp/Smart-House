import React from 'react';
import { StyleSheet } from 'react-native';
import { RoomN } from './src/infrastructure/navigation/roomsnavigatior';
export default function App() {
  return(
    <RoomN />
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