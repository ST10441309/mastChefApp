import { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableHighlight,
  Alert,
  StyleSheet,
} from 'react-native';

import { Picker } from '@react-native-picker/picker';

const menuList = [
  { id: 1, name: 'Hors D"Oeurves' },
  { id: 2, name: 'Appetizer' },
  { id: 3, name: 'Salad' },
  { id: 4, name: 'Main Entree' },
  { id: 5, name: 'Dessert' },
];

function Home() {
  return (
    <View style={styles.container}>
      <Text> MENU ITEMS </Text>
    </View>
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    textAlign: 'center',
  },
});