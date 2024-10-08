import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Alert,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import { Picker } from '@react-native-picker/picker';

const menuArray = [
  { id: 1, course: 'Hors D"Oeurves' },
  { id: 2, course: 'Amuse-Bouche' },
  { id: 3, course: 'Soup' },
  { id: 4, course: 'Salad' },
  { id: 5, course: 'Appetizer' },
  { id: 6, course: 'Fish' },
  { id: 7, course: 'Main Entree' },
  { id: 8, course: 'Palate Cleanser' },
  { id: 9, course: 'Second Main Entree' },
  { id: 10, course: 'Cheese' },
  { id: 11, course: 'Dessert' },
  { id: 12, course: 'Mignardise' },
];

export default function App() {
  const [dish, setDish] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [course, setCourse] = useState('');
  const [menuList, setMenuList] = useState<{course: string ,dish: string, price: number, description: string}[]>([]);

  const handleSaveDish = () => {
    if (!dish || !description || !price) {
      Alert.alert('Error', 'Please insert in all the spaces provided')
      return;
    }else{
      setMenuList([...menuList, {course: dish, dish: course, price: price, description: description}]);
      setDish('');
      setDescription('');
      setPrice(0);
      setCourse('');
    Alert.alert('Success', 'Items added successfully');
    }
  };
  

   /* const handleSaveDish = () => {

      let theDish = dish;
      let theDescription = description;
      let thePrice = price;

      let errors = [];

      if (!theDish) {
        errors.push("The dish is required")
      }

      if (!theDescription) {
        errors.push("The description is required")
      }

      if (isNaN(thePrice) || thePrice <= 0) {
        errors.push("The price is required");
      }
      if (errors.length > 0) {
        return;
      }
*/


  return (
    <View>
        <Text> MENU ITEMS </Text>

      <View>
        <TextInput
          placeholder='Enter dish name'
          onChangeText={(text) => setDish(text)}
          value={dish}
          style={styles.container} //change the container
        />
        <TextInput
          placeholder='Enter the description of the dish'
          onChangeText={(text) => setDescription(text)}
          value={description}
          style={styles.container}
        />
        <TextInput
          placeholder='Enter the price of the dishes'
          onChangeText={(text) => setPrice(Number(text))}
          value={price.toString()}
          style={styles.container}
        />

        <Picker
          selectedValue={dish}
          onValueChange={(itemValue) => setDish(itemValue)}
          style={styles.container}
        >
          <Picker.Item label="Select a dish" value=""/>
          {menuArray.map((item) => (
            <Picker.Item key={item.id} label={item.course} value={item.course}/>
          ))}
        </Picker>

        <TouchableOpacity onPress={handleSaveDish}>
          <Text>Save</Text>
        </TouchableOpacity>

        <Text>Dish List</Text>
        {menuList.map((item,index) => <Text key={index}> {item.dish} {item.description} {item.course} {item.price}</Text>)}

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