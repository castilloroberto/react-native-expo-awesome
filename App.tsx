import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import * as Linking from 'expo-linking';


export default function App() {
  const [number, setNumber] = useState('')
  const handlePress = (tel:string)=>{
    Linking.openURL('tel:'+tel)
    
  }

  return (
    <View style={styles.container}>
      <Text>Make a phone call</Text>

      <View style={styles.inputs}>
      <TextInput style={styles.phone} value={number} onChangeText={setNumber}/>

      <Button title="Llamar" onPress={()=>handlePress(number)}/> 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputs:{
    flexDirection:'row',
    padding:20,
    flexGrow:0
  },
  phone:{
    width:200,
    height:30,
    backgroundColor:'#ecf0f1',
    margin:10,
    padding:5
  }
});
