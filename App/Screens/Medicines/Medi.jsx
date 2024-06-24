import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Medi() {
  return (
    <View style={styles.container}>
      <Image style={{height:"100%", width:"100%", objectFit:"fill=", }} source={require("../../../assets/Images/kala-habshi.png")} />
      <Text style={{position:"absolute", fontSize:50, width:200, fontWeight:"900", marginBottom:200}}>Coming Soon!!!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F2D9FB',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  