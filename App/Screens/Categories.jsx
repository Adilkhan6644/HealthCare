import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const categories = [
  { id: "Gynecologist", name: "Gynecologist", icon: "user-md" },
  { id: "Physician", name: "General Physician", icon: "stethoscope" },
  { id: "Dentist", name: "Dentist", icon: "tooth" },
  { id: "Urologist", name: "Urologist", icon: "user-md" },
  { id: "General", name: "General Surgeon", icon: "scalpel" },
  { id: "Cardiologist", name: "Cardiologist", icon: "heartbeat" },
  { id: "Psychologist", name: "Psychologist", icon: "brain" },
  { id: "Sexologist", name: "Sexologist", icon: "venus-mars" },
];

const VerticalCategories = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.view}>
        {categories.map((item, index) => (
          <TouchableOpacity
            style={styles.categoryItem}
            key={index}
            onPress={() =>
              navigation.navigate(item.id, {
                name: item.name,
              })
            }
          >
            <Icon
              name={item.icon}
              size={30}
              color="#333"
              style={styles.categoryIcon}
            />
            <Text style={styles.categoryText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  view: {
    margin: 10,
    flex: 1,
    marginTop: 50,
  },
  categoryList: {
    paddingVertical: 40,
    paddingHorizontal: 30,
  },
  categoryItem: {
    backgroundColor: "#ffffff",
    padding: 25,
    marginVertical: 10,
    borderRadius: 15,
    alignItems: "center",
  },
  categoryText: {
    fontSize: 16,
    color: "#333",
  },
});

export default VerticalCategories;
