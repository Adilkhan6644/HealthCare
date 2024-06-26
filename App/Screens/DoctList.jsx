import { useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";

const gynecologists = [
  {
    id: "1",
    name: "Dr.Warda Malik",
    specialty: "Gynecologist",
    contact: "123-456-7890",
    experience: "8 yreas experience",
    image:
      "https://st.depositphotos.com/3489481/4806/i/450/depositphotos_48066027-stock-photo-female-doctor-in-hospital.jpg", // Replace with actual image URL
  },
  {
    id: "2",
    name: "Dr. Ayesha",
    specialty: "Gynecologist",
    contact: "987-654-3210",
    experience: "14 yreas experience",
    image:
      "https://st.depositphotos.com/3489481/5002/i/450/depositphotos_50026255-stock-photo-portrait-of-a-happy-health.jpg", // Replace with actual image URL
  },
  {
    id: "3",
    name: "Dr. Sarah ",
    specialty: "Gynecologist",
    contact: "456-789-0123",
    experience: "7 yreas experience",
    image:
      "https://cdn.create.vista.com/api/media/small/2347077/stock-photo-friendly-female-blonde-doctor-on-white", // Replace with actual image URL
  },
  {
    id: "1",
    name: "Dr.Warda Malik",
    specialty: "Gynecologist",
    contact: "123-456-7890",
    experience: "8 yreas experience",
    image:
      "https://st.depositphotos.com/3489481/4806/i/450/depositphotos_48066027-stock-photo-female-doctor-in-hospital.jpg", // Replace with actual image URL
  },
  {
    id: "2",
    name: "Dr. Ayesha",
    specialty: "Gynecologist",
    contact: "987-654-3210",
    experience: "14 yreas experience",
    image:
      "https://st.depositphotos.com/3489481/5002/i/450/depositphotos_50026255-stock-photo-portrait-of-a-happy-health.jpg", // Replace with actual image URL
  },
  {
    id: "3",
    name: "Dr. Sarah ",
    specialty: "Gynecologist",
    contact: "456-789-0123",
    experience: "7 yreas experience",
    image:
      "https://cdn.create.vista.com/api/media/small/2347077/stock-photo-friendly-female-blonde-doctor-on-white", // Replace with actual image URL
  },
];

const DoctorDetail = ({ doctor }) => {
  const route = useRoute();
  return (
    <View style={styles.doctorContainer}>
      <Image source={{ uri: doctor.image }} style={styles.doctorImage} />
      <View style={styles.infoContainer}>
        <Text style={styles.doctorName}>{doctor.name}</Text>
        <Text style={styles.doctorSpecialty}>{route.params?.name}</Text>
        <Text style={styles.doctoresperience}>{doctor.experience}</Text>
        <Text style={styles.doctorContact}>contect : {doctor.contact}</Text>
      </View>
    </View>
  );
};

const DoctList = () => {
  const route = useRoute();
  console.log(route);
  return (
    <View style={styles.container}>
      <Text>test</Text>
      <FlatList
        data={gynecologists}
        renderItem={({ item }) => <DoctorDetail doctor={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 10,
    marginVertical: -50,
  },
  list: {
    paddingTop: 50,
  },
  doctorContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 20,
    borderRadius: 15,
    elevation: 5, // For Android
    shadowColor: "#000", // For iOS
    shadowOffset: { width: 0, height: 2 }, // For iOS
    shadowOpacity: 1, // For iOS
    shadowRadius: 5, // For iOS
    alignItems: "center",
    gap: 10,
  },
  doctorImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  infoContainer: {
    marginLeft: 10,
    justifyContent: "center",
    gap: 5,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  doctorSpecialty: {
    fontSize: 16,
    color: "#777",
  },
  doctorContact: {
    fontSize: 14,
    color: "#555",
  },
});

export default DoctList;
