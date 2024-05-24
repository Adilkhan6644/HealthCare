import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Medi() {
  return (
    <View style={styles.container}>
      <Text>Medi</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  