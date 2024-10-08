import { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';

import { Picker } from '@react-native-picker/picker';

const menuArray = [
  { id: 1, dishes: 'Hors D"Oeurves' },
  { id: 2, dishes: 'Amuse-Bouche' },
  { id: 3, dishes: 'Soup' },
  { id: 4, dishes: 'Salad' },
  { id: 5, dishes: 'Appetizer' },
  { id: 6, dishes: 'Fish' },
  { id: 7, dishes: 'Main Entree' },
  { id: 8, dishes: 'Palate Cleanser' },
  { id: 9, dishes: 'Second Main Entree' },
  { id: 10, dishes: 'Cheese' },
  { id: 11, dishes: 'Dessert' },
  { id: 12, dishes: 'Mignardise' },
];

export default function App() {
  const [dish, setDish] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [menuList, setMenuList] = useState([]);

  const handleSaveBook = () => {
    if (!dish || !description || !price) {
      Alert.alert('Error', 'Please insert in all the spaces provided')
      return;
    }

    const newMenu = {dish, description, price};
    setMenuList([...menuList, newMenu]);
    setDish('');
    setDescription('');
    setPrice('');
    Alert.alert('Success', 'Items added successfully');
  };

  const renderMenuItem = ({item}) => (
    <View>
      <Text>{item.dish}</Text>
      <Text>{item.description}</Text>
      <Text>R.{item.price}</Text>
    </View>
  );

  return (
    <View>
        <Text> MENU ITEMS </Text>

      <View>
        <TextInput
          placeholder='Enter Dishes'
          onChangeText={setDish}
          value={dish}
          style={styles.container} //change the container
        />
        <TextInput
          placeholder='Enter the description of the dish'
          onChangeText={setDescription}
          value={description}
          style={styles.container}
        />
        <TextInput
          placeholder='Enter the price of the dishes'
          onChangeText={setPrice}
          value={price}
          style={styles.container}
        />

        <Picker
          selectedValue={dish}
          onValueChange={(itemValue) => setDish(itemValue)}
          style={styles.container}
        >
          <Picker.Item label="Select a dish" value=""/>
          {menuArray.map((item) => (
            <Picker.Item key={item.id} label={item.dishes} value={item.dishes}/>
          ))}
        </Picker>

        <TouchableOpacity onPress={handleSaveBook}>
          <Text>Save</Text>
        </TouchableOpacity>

        <FlatList
          data={menuList}
          renderItem={renderMenuItem}
          keyExtractor={(item, index) => index.toString()}
          style={styles.container}
        />

      </View>
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
    fontSize: 26,
    fontWeight: 'bold',
  },
});