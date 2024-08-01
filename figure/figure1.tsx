import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
export const Figure1 = () => {
    return (
        <View style={styles.container}>
        <View style={styles.boxBlue}></View>
        <View style={styles.boxOrange}></View>
        <View style={styles.boxGreen}></View>
    </View>
  )
}
const styles = StyleSheet.create({
container:{
    flex:10,
    width:300,
    height:300,
    marginTop:30,
    backgroundColor:'#1769df ',
    justifyContent:'center',
    alignItems:'center'
},
boxBlue:{
    width:100,
    height:100,
    backgroundColor:'blue',
    borderWidth:0,
    borderColor:'blue',
    position:'absolute',
    left:300,
},
boxOrange:{
    width:100,
    height:300,
    backgroundColor:'orange',
    borderWidth:10,
    borderColor:'orange',
    position:'absolute',
    bottom:0,
    right:0,
    top:150,
    left:300
},
boxGreen: {
    width:100,
    height:100,
    backgroundColor:'green',
    borderWidth:0,
    borderColor:'green',
    bottom:0,
    left:300,
    top:470,
    right:0,
    position:'absolute'
},
  });
