import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const categories = [
  { id: '1', name: 'Gynecologist', icon: 'user-md' }, // Gynecologist
  { id: '2', name: 'General Physician', icon: 'stethoscope' }, // General Physician
  { id: '3', name: 'Dentist', icon: 'tooth' }, // Dentist
  { id: '4', name: 'Urologist', icon: 'user-md' }, // Urologist
  { id: '5', name: 'General Surgeon', icon: 'scalpel' }, // General Surgeon
  { id: '6', name: 'Cardiologist', icon: 'heartbeat' }, // Cardiologist
  { id: '7', name: 'Psychologist', icon: 'brain' }, // Psychologist
  { id: '8', name: 'Sexologist', icon: 'venus-mars' }, // Sexologist
];


const VerticalCategories = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.categoryItem}>
       <Icon name={item.icon} size={30} color="#333" style={styles.categoryIcon} />
      <Text style={styles.categoryText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={categories}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.categoryList}
    />
  );
};

const styles = StyleSheet.create({
  categoryList: {
    paddingVertical: 40,
    paddingHorizontal: 30,
  },
  categoryItem: {
    backgroundColor: '#f5f5f5',
    padding: 25,
    marginVertical: 10,
    borderRadius: 15,
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 16,
    color: '#333',
  },
});

export default VerticalCategories;
