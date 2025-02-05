import { View, StyleSheet ,Image} from 'react-native';
import * as React from 'react';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemmonFooter from './components/LittleLemmonFooter';
import WelcomeScreen from './components/WelcomeScreen';
import MenuItems from './components/MenuItems';
import LoginScreen from './components/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function LogoTitle() {
  return (
    <Image
      source = {require('./assets/logo.png')}
      style={{ 
        width: 300, 
        height: 40 ,
        resizeMode: 'contain',
        alignSelf: 'center',
      }} 
    />
  );
}



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ 
          headerStyle: { backgroundColor: '#333333' }, 
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}>
        <Stack.Screen
          name="Login"
          component={LoginScreen} 
          
        />
        <Stack.Screen 
          name="Welcome"
          component={WelcomeScreen} 
          options={{
            title: 'Home',
            headerTitle:(props) => <LogoTitle {...props}/>,
          }}
        />
        <Stack.Screen
          name="Menu"
          component={MenuItems} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
  },
});
