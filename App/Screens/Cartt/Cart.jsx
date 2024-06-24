import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
export default function Cart() {
  return (
    <View style={styles.container}>
      <FontAwesome name="cart-plus" size={200} color="black" />
      <Text>Your cart is empty!!</Text>
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
})