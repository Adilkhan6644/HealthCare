import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
export default function Menu() {
  return (
    <View style={styles.container}>
      <View
        style={{
          height: 150,
          width: "100%",
          backgroundColor: "#F2D9FB",
          borderRadius: 20,
        }}
      >
        <Text
          style={{
            fontSize: 40,
            fontWeight: "700",
            marginTop: 60,
            marginLeft: 20,
          }}
        >
          Menu
        </Text>
      </View>
      <View
        style={{
          height: 90,
          width: "90%",
          margin: "auto",
          borderBottomWidth: 2,
          marginTop: 10,
        }}
      >
        <Text style={{ fontSize: 20, marginTop: 60 }}>
          Tearms and conditions
        </Text>
        <Feather
          style={{ marginLeft: 300, marginTop: -25 }}
          name="arrow-right"
          size={24}
          color="black"
        />
      </View>
      <View
        style={{
          height: 90,
          width: "90%",
          margin: "auto",
          marginTop: -350,
          borderBottomWidth: 2,
        }}
      >
        <Text style={{ fontSize: 20, marginTop: 60 }}>Privacy policy</Text>
        <Feather
          style={{ marginLeft: 300, marginTop: -25 }}
          name="arrow-right"
          size={24}
          color="black"
        />
      </View>
      <View style={{height:80, width:"100%"}}>
        <Text style={{ marginTop:-200, fontSize:30, fontWeight:"800", marginLeft:20 }}>Need Help??</Text>
        <Text style={{textAlign:"center"}}>In case of any issue , talk to our customer support</Text>
        <Ionicons style={{marginLeft:20, marginTop:15, textAlign:"center"}} name="call" size={24} color="black" />
        <Text style={{textAlign:"center", marginLeft:10}}>Call us now</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
