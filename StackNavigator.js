import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Screens/Login';
import BottomTabNavigator from './Screens/BottomTabNavigator';

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
        </Stack.Navigator>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    input: {
        marginBottom: 12,
        padding: 8,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    text: {
        fontSize: 18,
        textAlign: 'center',
    },
});
export default HomeStack;