import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity } from 'react-native';

export default function Signup({ navigation }) {
    const [name, setName] = useState('');
    const [lastN, setLname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = () => {
        //later when we'll work on backend!
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <View>
                <Text style={{ textAlign: "center", fontSize: 28, bottom: 20 }}>Register</Text>
            </View>
            <TextInput
                style={styles.input}
                placeholder="Name"
                onChangeText={(text) => setName(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Last Name"
                onChangeText={(text) => setLname(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Username"
                onChangeText={(text) => setUsername(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity>
                <Text>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text>Already registered?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons}>
                <Button style={styles.buttonText} title="Sign up" onPress={handleSignup} />
            </TouchableOpacity>


        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // backgroundColor: "#668cff",
        padding: 16
    },
    input: {
        color: 'black',
        marginBottom: 12,
        padding: 8,
        borderWidth: .3,
        borderRadius: 15,
        borderColor: 'black',

    }, buttons: {
        backgroundColor: 'white',
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderRadius: 20,
        top: 10,
    },
    buttonText: {
        fontSize: 18,
        color: '#333',
        fontWeight: 'bold',
    },
});