import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function Home() {
  return (
    <View style={styles.container}>
      <Text></Text>
    </View>
  );  
}
function Login () {
  return (
    <View style={styles.container}>
      <Text></Text>
    </View>
  );
}
function Enter () {
  return (
    <View style={styles.container}>
      <Text></Text>
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
        name='Home'
        component={Home}
        options={{ drawerLabel: 'Home'}}
      />
      <Drawer.Screen
        name='Login Screen'
        component={Login}
        options={{ drawerLabel: 'Sign in'}}
      />
      <Drawer.Screen
        name='Enter Items'
        component={Enter}
        options={{ drawerLabel: 'Enter menu items'}}
      />
      <Drawer.Screen
        name='Client Information'
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