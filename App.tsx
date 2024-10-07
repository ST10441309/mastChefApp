import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
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
function Login () {
  return (
    <View style={styles.container}>
      <Text> PLEASE SIGN IN </Text>
    </View>
  );
}
function Enter () {
  return (
    <View style={styles.container}>
      <Text> CHOOSE YOUR MEAL </Text>
    </View>
  );
}
function Clients () {
  return (
    <View style={styles.container}>
      <Text></Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen
        name='Chef Cristoffel'
        component={Home}
        options={{ drawerLabel: 'Home'}}
      />
      <Drawer.Screen
        name='Chef Cristoffel'
        component={Login}
        options={{ drawerLabel: 'Sign in'}}
      />
      <Drawer.Screen
        name='Chef Cristoffel'
        component={Enter}
        options={{ drawerLabel: 'Enter menu items'}}
      />
      <Drawer.Screen
        name='Chef Cristoffel'
        component={Clients}
        options={{ drawerLabel: 'View client details'}}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});