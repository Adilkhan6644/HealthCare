import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function Siri() {
  return (
    <View style={styles.container}>
      <View style={styles.searchbarContainer}>
        <TextInput placeholder="Search" style={styles.TextInput} />
        <FontAwesome
          name="search"
          style={styles.searchbtn}
          size={24}
          color={Colors.PRIMARY}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: 'center',
  },
  searchbarContainer: {
    marginTop: 100,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    // marginBottom: 10,
    borderWidth: 1,
    width: "90%",
    // margin: "auto",
    borderRadius: 10,
  },
  searchbtn: {
    backgroundColors: Colors.WHITE,
    padding: 10,
    borderRadius: 8,
  },
  TextInput: {
    padding: 7,
    paddingHorizontal: 16,
    backgroundColor: Colors.WHITE,
    borderRadius: 8,
    width: "85%",
    fontSize: 16,
  },
});
