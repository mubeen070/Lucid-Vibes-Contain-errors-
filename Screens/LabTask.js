import React from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const storeStringData = async (value) => {
    try {
        await AsyncStorage.setItem('@storage_Key', value)
    } catch (e) {
        // saving error
        console.log(e);
    }
}

const getStringData = async () => {
    try {
        const value = await AsyncStorage.getItem('@storage_Key')

        if (value !== null) {
            // value previously stored
            console.log(value);
        }
    } catch (e) {
        // error reading value
        console.log(e);
    }
}

const storeObjectData = async (value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('@storage_object_Key', jsonValue)
    } catch (e) {
        console.error(e)
    }
}

const getObjectData = async () => {
    try {
        var jsonValue = await AsyncStorage.getItem('@storage_object_Key')
        jsonValue = jsonValue != null ? JSON.parse(jsonValue) : null
        console.log("City name: " + jsonValue.cityname + " City Location: " + jsonValue.cityLocation)
    } catch (e) {
        // error reading value
        console.log(e);
    }
}

const LabTask = () => {
    return (
        <View>
            <Button
                title="Store string"
                onPress={() => storeStringData("Hello")}
            />

            <Button
                title="Store object"
                onPress={() => storeObjectData({ cityname: "Lahore", cityLocation: "Punjab" })}
            />

            <Button
                title="Store Class object"
                onPress={() => storeObjectData(new Person("Ali", 45))}
            />

            <Button
                title="Get string"
                onPress={() => getStringData()}
            />

            <Button
                title="Get object"
                onPress={() => getObjectData()}
            />

        </View>
    );
};

export default LabTask;

