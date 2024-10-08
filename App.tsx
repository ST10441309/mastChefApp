import { useMemo, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  /* FlatList, */
  TouchableOpacity,
  Alert,
  StyleSheet,
 /* SafeAreaView, */
 ScrollView,
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
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [course, setCourse] = useState('');
  const [menuList, setMenuList] = useState<{course: string ,name: string, price: number, description: string}[]>([]);

  const totalMenuItems = useMemo(() => menuList.length, [menuList]);

  const handleSaveDish = () => {
    if (!name || !description || !price || !course) {
      Alert.alert('Error', 'Please insert in all the spaces provided')
      return;
    }else{
      setMenuList([...menuList, {name: name, course: course, price: price, description: description}]);
      setName('');
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
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}> MENU ITEMS </Text>
        </View>
        <Text>Dish List</Text>
        {menuList.map((item,index) => <Text key={index}> name -{item.name} descrip-{item.description} course-{item.course} price-{item.price}</Text>)}

      <View>
        <Text>Total: {totalMenuItems}</Text>
      </View>

      <View>
        <Text>Dish</Text>
        <TextInput
          placeholder='Enter dish name'
          onChangeText={(text) => setName(text)}
          value={name}
          style={styles.textInput} //change the container
        />
        <Text>Description</Text>
        <TextInput
          placeholder='Enter the description of the dish'
          onChangeText={(text) => setDescription(text)}
          value={description}
          style={styles.textInput}
        />
        <Text>Price</Text>
        <TextInput
          placeholder='Enter the price of the dishes'
          onChangeText={(text) => setPrice(Number(text))}
          value={price.toString()}
          style={styles.textInput}
        />

        <Picker
          selectedValue={course}
          onValueChange={(itemValue) => setCourse(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select a dish" value=""/>
          {menuArray.map((item) => (
            <Picker.Item key={item.id} label={item.course} value={item.course}/>
          ))}
        </Picker>
      <View style={styles.buttonConatiner}>
        <TouchableOpacity onPress={handleSaveDish} style={styles.button}>
          <Text>Save</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    alignItems: 'center',
    backgroundColor: '#6F4E37',
    height: '100%', 
  },
  headingContainer: {
    backgroundColor: '#FED8B1',
    padding: 15,
    marginTop: 10,
    width: '100%',
  },
  headingText: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
  },
  textInput: {
    width: 400,
    height: 70,
    backgroundColor: 'white',
    borderRadius: 10,
    borderBlockColor: 'black',
    padding: 10,
    margin: 30,
  },
  picker: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonConatiner: {
    padding: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#black',
    padding: 10,
    borderRadius: 10,
    width: 250,
  },
  // for textInput [add view around]
  inputContainer: {
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: '',
  },
});