import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity } from 'react-native';

export default function Login({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Perform login logic here
        console.log(`Username: ${username}, Password: ${password}`);
        navigation.navigate('BottomTab');

    };

    return (
        <View style={styles.container}>
            <View>
                <Text style={{ textAlign: "center", fontSize: 28, bottom: 20 }}>Vibe in!</Text>
            </View>
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
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                <Text>New User?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons}>
                <Button style={styles.buttonText} title="Login" onPress={handleLogin} />
            </TouchableOpacity>


        </View>
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